import React from "react";

import { AuthenticatedUserProvider } from "./AuthenticatedUserProvider";
import Router from "./Router";

import Theme from "../assets/themes/Theme";
import { Provider as PaperProvider } from "react-native-paper";


/**
 * Wrap all providers here
 * https://github.com/amandeepmittal/react-native-examples/tree/master/authFlow
 */

export default function Routes() {
  return (
    <PaperProvider theme={Theme}>
      <AuthenticatedUserProvider>
        <Router />
      </AuthenticatedUserProvider>
    </PaperProvider>
  );
}
