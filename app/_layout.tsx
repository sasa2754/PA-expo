import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Karla_700Bold_Italic } from '@expo-google-fonts/karla';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    Karla: require('@/assets/fonts/Karla-VariableFont_wght.ttf'),
    aaa: Karla_700Bold_Italic
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name='register' options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name='(tabs)' options={{headerShown: false}}></Stack.Screen>
    </Stack>
  );
}

