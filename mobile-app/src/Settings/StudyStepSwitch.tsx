import { FC, useEffect, useState } from 'react';
import { Switch } from 'react-native-paper';

type Props = {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled: boolean;
  readonly: boolean;
  testID?: string;
};

export const StudyStepSwitch: FC<Props> = ({
  value,
  onValueChange,
  disabled,
  readonly,
  testID,
}) => {
  const [isEnabled, setIsEnabled] = useState(value);

  useEffect(() => {
    setIsEnabled(value);
  }, [value]);

  return (
    <Switch
      testID={testID}
      value={isEnabled}
      disabled={disabled}
      onValueChange={(newValue) => {
        if (readonly) {
          return;
        }

        setIsEnabled(newValue);
        onValueChange(newValue);
      }}
    />
  );
};
