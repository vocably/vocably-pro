import { createContext, FC, PropsWithChildren } from 'react';
import { getItem, setItem } from './asyncAppStorage';
import { useAsync } from './useAsync';

type WelcomeContextProps = {
  isWelcomeVisible: boolean;
  setIsWelcomeVisible: (isWelcome: boolean) => void;
};

export const WelcomeContext = createContext<WelcomeContextProps>({
  isWelcomeVisible: true,
  setIsWelcomeVisible: (isWelcome: boolean) => {},
});

export const WelcomeContainer: FC<PropsWithChildren> = ({ children }) => {
  const [isWelcomeVisibleResult, setIsWelcomeVisible] = useAsync(
    async () => {
      return (await getItem('isWelcomeVisible')) !== 'false';
    },
    async (isWelcomeVisible) => {
      await setItem('isWelcomeVisible', isWelcomeVisible ? 'true' : 'false');
    }
  );

  if (isWelcomeVisibleResult.status !== 'loaded') {
    return <></>;
  }

  return (
    <WelcomeContext.Provider
      value={{
        isWelcomeVisible: isWelcomeVisibleResult.value,
        setIsWelcomeVisible: setIsWelcomeVisible,
      }}
    >
      {children}
    </WelcomeContext.Provider>
  );
};
