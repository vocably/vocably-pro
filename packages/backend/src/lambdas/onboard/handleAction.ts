import {
  nodeFetchUserMetadata,
  nodeSaveUserMetadata,
} from '@vocably/lambda-shared';
import { Facility, Result } from '@vocably/model';
import { UsefulData } from './extractUsefulData';
import { mobileAppInstalled } from './mobileAppInstalled';
import { welcomeExtensionUser } from './welcomeExtensionUser';
import { welcomeMobileApp } from './welcomeMobileApp';

const allowedFacilities: Facility[] = [
  'chrome-extension',
  'safari-extension',
  'ios-app',
  'android-app',
];

const mobileAppFacilities: Facility[] = ['ios-app', 'android-app'];

const extensionFacilities: Facility[] = [
  'chrome-extension',
  'safari-extension',
];

export const handleAction = async ({
  action,
  sub,
  email,
}: UsefulData): Promise<Result<any>> => {
  if (!allowedFacilities.includes(action.payload.facility)) {
    return {
      success: true,
      value: null,
    };
  }

  const userMetadataResult = await nodeFetchUserMetadata(
    sub,
    process.env?.USER_FILES_BUCKET ?? ''
  );

  if (userMetadataResult.success === false) {
    return userMetadataResult;
  }

  const onboardingFlow = userMetadataResult.value.onboardingFlow;

  if (!onboardingFlow.allowed) {
    console.log(
      `Onboarding flow is not allowed for user with ${email} and metadata:`,
      userMetadataResult.value
    );

    return {
      success: true,
      value: null,
    };
  }

  if (onboardingFlow.extensionSent && onboardingFlow.mobileAppSent) {
    console.log(
      `Onboarding flow for user with ${email} has already been triggered. Metadata:`,
      userMetadataResult.value
    );

    return {
      success: true,
      value: null,
    };
  }

  if (
    !onboardingFlow.extensionSent &&
    !onboardingFlow.mobileAppSent &&
    action.name === 'facilityOnboarded' &&
    extensionFacilities.includes(action.payload.facility)
  ) {
    const result = await welcomeExtensionUser(
      email,
      action.payload.targetLanguage
    );
    if (result.success === false) {
      return result;
    }

    console.log('Welcome extension email has been successfully sent.');

    return nodeSaveUserMetadata(sub, process.env?.USER_FILES_BUCKET ?? '', {
      onboardingFlow: {
        language: action.payload.targetLanguage,
        extensionSent: true,
      },
    });
  }

  if (
    onboardingFlow.extensionSent &&
    !onboardingFlow.mobileAppSent &&
    action.name === 'userLoggedIn' &&
    mobileAppFacilities.includes(action.payload.facility) &&
    onboardingFlow.language
  ) {
    const result = await mobileAppInstalled(email, onboardingFlow.language);
    if (result.success === false) {
      return result;
    }
    console.log('Mobile app installed email has been successfully sent.');

    return nodeSaveUserMetadata(sub, process.env?.USER_FILES_BUCKET ?? '', {
      onboardingFlow: {
        mobileAppSent: true,
      },
    });
  }

  if (
    !onboardingFlow.extensionSent &&
    !onboardingFlow.mobileAppSent &&
    action.name === 'facilityOnboarded' &&
    mobileAppFacilities.includes(action.payload.facility)
  ) {
    const result = await welcomeMobileApp(email, action.payload.targetLanguage);
    if (result.success === false) {
      return result;
    }

    console.log('Welcome mobile app email has been successfully sent.');

    return nodeSaveUserMetadata(sub, process.env?.USER_FILES_BUCKET ?? '', {
      onboardingFlow: {
        mobileAppSent: true,
        language: action.payload.targetLanguage,
      },
    });
  }

  console.log(
    `No emails have been sent for user ${email} and metadata:`,
    userMetadataResult.value
  );

  return {
    success: true,
    value: null,
  };
};
