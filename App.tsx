import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/screens/HomeScreen';
import HistoryScreen from './components/screens/HistoryScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

//1. Needs to fix font bug
export default function App() {

  let [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={homeScreen} />
          <Stack.Screen name="History" component={historyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const homeScreen = ({ navigation }) => {
  return (
    <HomeScreen
      navigation = {navigation}
    />
  );
};
const historyScreen = ({ navigation}) => {
  return <HistoryScreen navigation = {navigation}></HistoryScreen>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
