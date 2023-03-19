// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native-stack

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './screens/LoginSignupScreens/AuthNavigation';

const RootNavigation = () => {
  return (
    <NavigationContainer>
        <AuthNavigation />
    </NavigationContainer>
  )
}

export default RootNavigation