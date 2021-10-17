import * as React from "react";
import Main from "../screens/Main";

import Theme from "../themes/Theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider as PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();

export default function AppStack  () {
  return (
    <PaperProvider theme={Theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ title: "Ekran główny", header: () => null }}
          />
        </Stack.Navigator>
    </PaperProvider>
  );
};
