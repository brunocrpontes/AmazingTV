import { StyleSheet, View } from 'react-native'
import { type Show, getShowId } from '@core/domains/show';
import { Text, Icon } from '@core/components'
import { useShows } from '@core/services/tvmaze/hooks';
import { HomeTabs } from "@home/types";
import { HomeCard } from '@home/components'
import { BottomTabNavigationScreen } from '@react-navigation/stack';

export const SearchScreen: BottomTabNavigationScreen<HomeTabs, "Search"> = (props) => {

  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

SearchScreen.options = {
  tabBarLabel: "Search",
  headerShown: false,
  tabBarIcon: (props) => <Icon {...props} name="search" />
}