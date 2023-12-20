/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  NavigationContainer
} from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Color } from './constants/colors';
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import AddChat from './screens/Home/add-screen/AddChat';
import ShowQr from './screens/Home/show-qr/ShowQr';
import AddedContact from './screens/Home/added_contact/AddedContact';
import Chat from './screens/Home/chat/Chat';

const Stack = createNativeStackNavigator();


function Seperator(): React.JSX.Element {
  return (
    <View style={styles.centerView}><View style={styles.innerSeperatorView} /></View>
  )
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='chat'>
        <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='chat' component={Chat} options={{ headerShown: false }} />
        <Stack.Screen name='add_chat' component={AddChat} options={{ headerShown: false }} />
        <Stack.Screen name='show_qr' component={ShowQr} options={{ headerShown: false }} />
        <Stack.Screen name='added_contact' component={AddedContact} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: Color.background,
    width: "100%",
    height: "100%"
  },
  textStyle: {
    color: Color.text,
    fontFamily: "Nunito-Regular",
    fontSize: 40
  },
  centerView: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  innerSeperatorView: {
    width: "80%",
    height: 1,
    backgroundColor: Color.accent
  }
});

export default App;
