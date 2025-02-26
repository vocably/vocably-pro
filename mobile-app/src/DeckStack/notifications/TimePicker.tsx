import DateTimePicker from '@react-native-community/datetimepicker';
import { FC, useState } from 'react';
import { Platform, View } from 'react-native';
import { Button } from 'react-native-paper';

type Props = {
  time: string;
  onChange: (time: string) => void;
  disabled?: boolean;
};

export const TimePicker: FC<Props> = ({ time, onChange, disabled = false }) => {
  const [hours, minutes] = time.split(':');
  const value = new Date(2025, 2, 4, Number(hours), Number(minutes));

  const [isAndroidVisible, setIsAndroidVisible] = useState(false);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {Platform.OS === 'ios' && (
        <DateTimePicker
          value={value}
          minuteInterval={30}
          mode={'time'}
          display={'spinner'}
          disabled={disabled}
        />
      )}
      {Platform.OS !== 'ios' && (
        <>
          <Button
            mode="contained"
            disabled={disabled}
            onPress={() => setIsAndroidVisible(true)}
          >
            Receive at {time}
          </Button>
          {isAndroidVisible && (
            <DateTimePicker
              value={value}
              minuteInterval={30}
              display={'spinner'}
              mode={'time'}
              disabled={disabled}
              onChange={(_, date) => {
                setIsAndroidVisible(false);
                if (date !== undefined) {
                  onChange(
                    `${date.getHours().toString().padStart(2, '0')}:${date
                      .getMinutes()
                      .toString()
                      .padStart(2, '0')}`
                  );
                }
              }}
            />
          )}
        </>
      )}
    </View>
  );
};
