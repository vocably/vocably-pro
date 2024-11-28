import { WelcomeFlowFacility, WelcomeFlowMetadata } from '@vocably/model';

type WelcomeFlowStepSend = {
  send: true;
  templateId: number;
};

type WelcomeFlowStepSkip = {
  send: false;
};

export type WelcomeFlowStep = WelcomeFlowStepSend | WelcomeFlowStepSkip;

type Options = {
  welcomeFlowMetadata: WelcomeFlowMetadata;
  targetLanguage: string;
  facility: WelcomeFlowFacility;
};

export const getWelcomeFlowStep = ({
  welcomeFlowMetadata,
  targetLanguage,
  facility,
}: Options): WelcomeFlowStep => {
  if (
    welcomeFlowMetadata[facility].some(
      (facility) => facility.targetLanguage === targetLanguage
    )
  ) {
    return {
      send: false,
    };
  }
};
