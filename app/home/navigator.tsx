import { StackNavigationScreen } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AmazingTVRoutes } from '../../App';
import { HomeTabs } from './types';
import { SearchScreen, ShowsScreen } from './screens';

const BottomTab = createBottomTabNavigator<HomeTabs>()

export const Home: StackNavigationScreen<AmazingTVRoutes, "Home"> = (props) => {

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Shows" component={ShowsScreen} options={ShowsScreen.options} />
      <BottomTab.Screen name="Search" component={SearchScreen} options={SearchScreen.options} />
    </BottomTab.Navigator>
  )
}

Home.options = {
  headerShown: false
}
