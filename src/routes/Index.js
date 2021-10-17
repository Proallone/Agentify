import React from 'react';

import { AuthenticatedUserProvider } from './AuthenticatedUserProvider';
import Router from './Router';

/**
 * Wrap all providers here
 * https://github.com/amandeepmittal/react-native-examples/tree/master/authFlow
 */

export default function Routes() {
  return (
    <AuthenticatedUserProvider>
      <Router/>
    </AuthenticatedUserProvider>
  );
}