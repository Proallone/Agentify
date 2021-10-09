import * as React from "react";

//import { Theme } from "./src/themes/Themes.js";
import LoginScreen from "./src/screens/LoginScreen";
import MainScreen from "./src/screens/MainScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ForgotScreen from "./src/screens/ForgotPasswordScreen";

import Theme from "./src/themes/Theme"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {Provider as PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider theme={Theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: "Rejestracja" }}
          />
          <Stack.Screen
            name="Forgot"
            component={ForgotScreen}
            options={{ title: "Przypomij" }}
          />
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ title: "Ekran główny" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;

