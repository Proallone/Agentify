import React from "react";
import Routes from "./src/routes/Index";

/* Ref https://stackoverflow.com/a/64832663 */
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);

const App = () => {
  return <Routes />;
};

export default App;
