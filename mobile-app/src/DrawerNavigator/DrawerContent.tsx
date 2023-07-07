import { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AccountMenu } from './AccountMenu';
import { MainMenu } from './MainMenu';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type DrawerContent = FC<{}>;

export const DrawerContent: DrawerContent = () => {
  const theme = useTheme();
  const [menu, setMenu] = useState<'main' | 'account'>('main');

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: theme.colors.background,
        paddingHorizontal: 20,
        paddingVertical: 64,
      }}
    >
      <View style={{ alignItems: 'flex-start', marginBottom: 16 }}>
        <Text
          style={{ color: theme.colors.primary }}
          onPress={() => setMenu(menu === 'account' ? 'main' : 'account')}
        >
          My Account
          <Icon
            name={menu === 'account' ? 'chevron-down' : 'chevron-right'}
            style={{ marginLeft: 10 }}
          />
        </Text>
      </View>
      {menu === 'main' && <MainMenu />}
      {menu === 'account' && <AccountMenu />}
    </View>
  );
};
