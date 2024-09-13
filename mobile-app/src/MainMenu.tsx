import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, Divider, List, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import VersionNumber from 'react-native-version-number';

export type MenuMainProps = {
  parentNavigator: any;
};

export const MainMenu: FC<MenuMainProps> = ({ parentNavigator }) => {
  const theme = useTheme();
  const navigator = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        paddingLeft: insets.left,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View
        style={{
          marginBottom: 'auto',
        }}
      >
        <List.Item
          title="Your Account"
          onPress={() => navigator.navigate('AccountMenu')}
          titleStyle={{
            color: theme.colors.onBackground,
          }}
          right={() => (
            <Icon
              name="menu-right"
              size={24}
              color={theme.colors.onBackground}
            />
          )}
        ></List.Item>
        <Divider />
        <List.Item
          title="How to Group Cards"
          titleStyle={{
            color: theme.colors.onBackground,
          }}
          onPress={() => navigator.navigate('HowToGroupCards')}
          right={() => (
            <Icon
              name="menu-right"
              size={24}
              color={theme.colors.onBackground}
            />
          )}
        ></List.Item>
      </View>

      <View
        style={{
          paddingHorizontal: 16,
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Text style={{ marginBottom: 12 }}>
          Are you missing any crucial feature or simply want to share your
          opinion about Vocably with me? I would love to hear from you!
        </Text>
        <View
          style={{
            alignSelf: 'stretch',
          }}
        >
          <Button
            mode={'contained'}
            onPress={() => parentNavigator.navigate('Feedback')}
          >
            Provide Feedback
          </Button>
        </View>
      </View>

      {VersionNumber.appVersion && (
        <View
          style={{
            paddingHorizontal: 16,
            marginBottom: 16,
          }}
        >
          <Text>
            Version:{' '}
            {`${VersionNumber.appVersion}${
              (VersionNumber.buildVersion !== VersionNumber.appVersion &&
                ` (${VersionNumber.buildVersion})`) ||
              ``
            }`}
          </Text>
        </View>
      )}
    </View>
  );
};
