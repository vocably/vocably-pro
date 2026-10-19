import { ComponentProps, FC } from 'react';
import { Divider as PaperDivider } from 'react-native-paper';
import { useAppTheme } from '../ThemeProvider';

type Props = ComponentProps<typeof PaperDivider>;

// Paper's Divider uses outlineVariant, which is shared with icons and
// borders. This wrapper gives dividers their own theme color.
export const Divider: FC<Props> = (props) => {
  const theme = useAppTheme();

  return (
    <PaperDivider
      {...props}
      theme={{ colors: { outlineVariant: theme.colors.divider } }}
    />
  );
};
