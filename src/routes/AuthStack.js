import * as React from "react";

import Login from "../screens/Login";
import Register from "../screens/Register";
import Reset from "../screens/Reset";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function AuthStack (){
  return (
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
  );
};

