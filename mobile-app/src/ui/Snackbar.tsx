import { ComponentProps, FC } from 'react';
import { Snackbar as PaperSnackbar } from 'react-native-paper';

type Props = ComponentProps<typeof PaperSnackbar>;

export const Snackbar: FC<Props> = ({ style, ...props }) => {
  return <PaperSnackbar {...props} style={[{ borderRadius: 12 }, style]} />;
};
