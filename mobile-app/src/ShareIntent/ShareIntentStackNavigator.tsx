import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LanguageSelectorModal } from "../LanguageSelectorModal";
import { ShareIntentScreen } from "./ShareIntentScreen";

const Stack = createStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export const ShareIntentStackNavigator = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator>
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="Share" component={ShareIntentScreen} />
          <Stack.Screen
            name="LanguageSelector"
            component={LanguageSelectorModal}
            options={{
              presentation: 'modal',
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};