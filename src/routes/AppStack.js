import * as React from "react";
import Main from "../screens/Main";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewClient from "../screens/NewClient";

const Stack = createNativeStackNavigator();

export default function AppStack  () {
  return (
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ title: "Ekran główny", header: () => null }}
          />
          <Stack.Screen
            name="NewClient"
            component={NewClient}
            options={{ title: "Nowy Klient", header: () => null }}
          />
        </Stack.Navigator>
  );
};
