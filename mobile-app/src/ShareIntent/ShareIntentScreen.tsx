import { useNavigation } from "@react-navigation/native";
import { useTranslationPreset } from "../LookUpScreen/useTranslationPreset";
import { useShareIntentData } from "./useShareIntentData";
import { View, Text, Button, BackHandler } from "react-native";
import { TranslationPreset } from "../LookUpScreen/TranslationPreset";

export const ShareIntentScreen = () => {
    const sharedText = useShareIntentData();
    const [translationPreset, setTranslationPreset] = useTranslationPreset();
    const navigation = useNavigation();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: '100%', padding: 16, backgroundColor: 'gray' }}>
          <TranslationPreset
            preset={translationPreset}
            onChange={setTranslationPreset}
            navigation={navigation}
          />
          <Text style={{ fontSize: 32, textAlign: 'center' }}>{sharedText}</Text>
          <Button title="Done" onPress={() => BackHandler.exitApp()} />
        </View>
      </View>
    );
  };