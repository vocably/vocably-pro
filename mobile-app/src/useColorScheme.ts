import { useEffect, useState } from 'react';
import { Appearance } from 'react-native';

export type ColorScheme = 'dark' | 'light';

export const useColorScheme = (): ColorScheme => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    Appearance.getColorScheme() ?? 'light'
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener((preferences) => {
      setColorScheme(preferences.colorScheme ?? 'light');
    });

    return () => {
      subscription.remove();
    };
  }, [Appearance]);

  return colorScheme;
};
