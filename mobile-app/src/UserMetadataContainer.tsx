import {
  getUserMetadata as apiGetUserMetadata,
  saveUserMetadata as apiSaveUserMetadata,
} from '@vocably/api';
import {
  defaultUserMetadata,
  mergeUserMetadata,
  PartialUserMetadata,
  UserMetadata,
} from '@vocably/model';
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

type UserMetadataContextValues = {
  userMetadata: UserMetadata;
  updateUserMetadata: (metadata: PartialUserMetadata) => Promise<void>;
};

export const UserMetadataContext = createContext<UserMetadataContextValues>({
  userMetadata: defaultUserMetadata,
  updateUserMetadata: () => Promise.resolve(),
});

type UserMetadataContainer = FC<{
  children: ReactNode;
}>;

export const UserMetadataContainer: UserMetadataContainer = ({ children }) => {
  const [userMetadata, setUserMetadata] =
    useState<UserMetadata>(defaultUserMetadata);

  useEffect(() => {
    apiGetUserMetadata().then((result) => {
      if (result.success === true) {
        setUserMetadata(result.value);
      }
    });
  }, []);

  const updateUserMetadata = useCallback(
    async (metadata: PartialUserMetadata) => {
      const saveUserMetadataResult = await apiSaveUserMetadata(metadata);

      if (saveUserMetadataResult.success === true) {
        setUserMetadata(saveUserMetadataResult.value);
      } else {
        setUserMetadata(mergeUserMetadata(userMetadata, metadata));
      }
    },
    [setUserMetadata]
  );

  return (
    <UserMetadataContext.Provider value={{ userMetadata, updateUserMetadata }}>
      {children}
    </UserMetadataContext.Provider>
  );
};
