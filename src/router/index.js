import React from 'react';
import { About, Guide, Home, Result, Scan, SplashScreen } from '../pages';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
      <Stack.Screen name="Guide" component={Guide} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
      <Stack.Screen name="Scan" component={Scan} options={{ headerShown: false }} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router