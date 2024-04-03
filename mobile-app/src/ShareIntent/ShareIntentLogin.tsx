import { FC, ReactNode, useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../auth/AuthContext";
import { Loader } from "../loaders/Loader";
import { openMainApp } from "./openMainApp";

export const ShareIntentLogin: FC<{
    children?: ReactNode;
  }> = ({ children }) => {
    const authStatus = useContext(AuthContext);
  
    if (authStatus.status === 'undefined') {
      return <Loader>Authenticating...</Loader>;
    }
  
    if (authStatus.status === 'logged-in') {
      return <>{children}</>;
    }
  
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: 'gray',
            padding: 24,
            borderRadius: 16,
          }}
        >
          <Text style={{ fontSize: 24 }}>You are not logged in</Text>
          <Button title="Login" onPress={openMainApp} />
        </View>
      </View>
    );
  };