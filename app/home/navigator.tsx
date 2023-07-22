import { StackNavigationScreen } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'

import { HomeRoutes, HomeTabs } from './types';
import { FavoriteTVSeriesScreen, SearchTVSeriesScreen, TVSeriesScreen } from './screens';

const BottomTab = createBottomTabNavigator<HomeTabs>()

const BOTTOM_TAB_SCREEN_OPTIONS: BottomTabNavigationOptions = {
  freezeOnBlur: true,
  lazy: true
}

export const Home: StackNavigationScreen<HomeRoutes, "Home"> = (props) => {
  return (
    <BottomTab.Navigator screenOptions={BOTTOM_TAB_SCREEN_OPTIONS}>
      <BottomTab.Screen name="TVSeries" component={TVSeriesScreen} options={TVSeriesScreen.options} />
      <BottomTab.Screen name="SearchTVSeries" component={SearchTVSeriesScreen} options={SearchTVSeriesScreen.options} />
      <BottomTab.Screen name="FavoriteTVSeries" component={FavoriteTVSeriesScreen} options={FavoriteTVSeriesScreen.options} />
    </BottomTab.Navigator>
  )
}

Home.options = {
  headerShown: false
}
