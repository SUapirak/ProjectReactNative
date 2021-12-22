import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import WebViewExample from './components/WebViewExample';
import WebViewLoading from './components/WebViewLoading';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    //<WebViewExample/>
    //<WebViewLoading/>

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: 'red',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title:'main page'}}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{title:'about page'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
