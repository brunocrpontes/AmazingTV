import React from 'react';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from 'react-query'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Theme } from '@core/theme';
import { FavoriteTVSeriesProvider } from '@core/contexts/favorite-series';
import { Home, HomeRoutes } from '@home';
import { TVSeriesDetailsScreen, TVSeriesEpisodeDetailsScreen, type TVSeriesDetailsRoutes } from '@tv-series-details'

type AmazingTVRoutes = HomeRoutes & TVSeriesDetailsRoutes;

const Stack = createStackNavigator<AmazingTVRoutes>()

const queryClient = new QueryClient()

export default function App() {
  const scheme = useColorScheme() ?? "light"

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style='auto' />
      <FavoriteTVSeriesProvider initialFavoriteTVSeries={[]}>
        <NavigationContainer theme={Theme[scheme]}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={Home.options}
            />
            <Stack.Screen
              name="TVSeriesDetails"
              component={TVSeriesDetailsScreen}
              options={TVSeriesDetailsScreen.options}
            />
            <Stack.Screen
              name="TVSeriesEpisodeDetails"
              component={TVSeriesEpisodeDetailsScreen}
              options={TVSeriesEpisodeDetailsScreen.options}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteTVSeriesProvider>
    </QueryClientProvider>
  );
}