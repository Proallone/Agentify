import * as React from "react";

import Login from "../screens/Login";
import Register from "../screens/Register";
import Reset from "../screens/Reset";

import Theme from "../themes/Theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider as PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();

export default function AuthStack (){
  return (
    <PaperProvider theme={Theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login", header: () => null }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: "Rejestracja", header: () => null }}
          />
          <Stack.Screen
            name="Reset"
            component={Reset}
            options={{ title: "Przypomij hasło", header: () => null }}
          />
        </Stack.Navigator>
    </PaperProvider>
  );
};

