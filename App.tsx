import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, HomeTabs } from '@home';
import { Theme } from '@core/theme';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export type AmazingTVRoutes = {
  "Home": NavigatorScreenParams<HomeTabs>
}

const { Navigator, Screen } = createStackNavigator<AmazingTVRoutes>()

const queryClient = new QueryClient()

export default function App() {
  const scheme = useColorScheme() ?? "light"

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style='auto' />
      <NavigationContainer theme={Theme[scheme]}>
        <Navigator>
          <Screen name="Home" component={Home} options={Home.options} />
        </Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}