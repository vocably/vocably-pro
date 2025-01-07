import { FC, PropsWithChildren, useState } from 'react';
import { FlexStyle, Image, ImageBackground, View } from 'react-native';

type Props = {
  style?: FlexStyle;
};

export const IPhone: FC<PropsWithChildren<Props>> = ({
  style = {},
  children,
}) => {
  const [containerWidth, setContainerWidth] = useState(0);
  return (
    <View
      style={[
        {
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        },
        style,
      ]}
      onLayout={(event) => {
        const { width } = event.nativeEvent.layout;
        setContainerWidth(width);
      }}
    >
      <ImageBackground
        source={require('./iPhone.png')}
        resizeMode="cover"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          height: (containerWidth / 900) * 1828,
        }}
      >
        <View
          style={{
            transform: [
              {
                scale: 0.86,
              },
            ],
          }}
        >
          {children}
        </View>
        <View
          style={{
            position: 'absolute',
            left: 14,
            top: 18,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            resizeMode="cover"
            source={require('./iPhoneHeaderLight.png')}
            style={{
              width: '84%',
              height: 30,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
