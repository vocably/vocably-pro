import { AuthContainer } from "../auth/AuthContainer";
import { LanguagesContainer } from "../languages/LanguagesContainer";
import { ShareIntentLogin } from "./ShareIntentLogin";
import { ShareIntentStackNavigator } from "./ShareIntentStackNavigator";

const ShareIntentApp = () => {
    return (
      <AuthContainer>
        <ShareIntentLogin>
          <LanguagesContainer>
            <ShareIntentStackNavigator />
          </LanguagesContainer>
        </ShareIntentLogin>
      </AuthContainer>
    );
  };

  export default ShareIntentApp;