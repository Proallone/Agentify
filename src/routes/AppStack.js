import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "../screens/Main";
import AddClient from "../screens/AddClient";
import AddDoc from "../screens/AddDoc";

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
            name="AddClient"
            component={AddClient}
            options={{ title: "Nowy Klient"}}
          />
          <Stack.Screen
            name="AddDoc"
            component={AddDoc}
            options={{ title: "Dodaj dokument"}}
          />
        </Stack.Navigator>
  );
};
