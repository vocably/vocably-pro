import { PropsWithChildren } from 'react';
import { Error } from '../Error';
import { Loader } from '../loaders/Loader';
import { useSharedStorageSync } from './useSharedStorageSync';

export const SharedStorageProvider = (props: PropsWithChildren) => {
    const sharedStorage = useSharedStorageSync();
  
    if (sharedStorage.status === 'error') {
      return (
        <Error onRetry={sharedStorage.sync}>Oops! Something went wrong.</Error>
      );
    } else if (sharedStorage.status === 'loading') {
      return <Loader>Synchronizing...</Loader>;
    } else {
      return props.children;
    }
  };