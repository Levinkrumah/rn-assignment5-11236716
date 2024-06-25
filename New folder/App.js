// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <NavigationContainer theme={isDarkTheme ? darkTheme : lightTheme}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings">
          {() => <SettingsScreen setIsDarkTheme={setIsDarkTheme} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const lightTheme = {
  dark: false,
  colors: {
    primary: '#000',
    background: '#fff',
    card: '#fff',
    text: '#000',
    border: '#ccc',
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: '#fff',
    background: '#000',
    card: '#000',
    text: '#fff',
    border: '#333',
  },
};

export default App;
