import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/screens/HomeScreen';
import HistoryScreen from './components/screens/HistoryScreen';
export default function App() {
  return (
    <HomeScreen></HomeScreen>
    //<HistoryScreen></HistoryScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
