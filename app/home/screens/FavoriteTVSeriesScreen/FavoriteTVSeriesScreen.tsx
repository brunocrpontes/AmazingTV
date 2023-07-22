import { View } from 'react-native';
import { CompositeBottomTabNavigationScreenWith } from '@react-navigation/bottom-tabs';
import { Header, Icon } from '@core/components'
import type { TVSeries } from '@core/domains/tv-series';
import { useFavoriteTVSeries, useFavoriteTVSeriesActions } from '@core/contexts/favorite-series';
import { HomeTabs } from "@home/types";
import { TVSeriesList } from '@home/components'
import { selectFavoriteTVSeriesIds } from '@home/selectors';
import { StackScreenProps } from '@react-navigation/stack';
import { TVSeriesDetailsRoutes } from '@tv-series-details';

const selectFavoriteTVSeriesAndIds = (tvSeries: TVSeries[]) => ({ favoriteTVSeries: tvSeries, favoriteTVSeriesIds: selectFavoriteTVSeriesIds(tvSeries) })

type FavoriteTVSeriesScreen = CompositeBottomTabNavigationScreenWith<HomeTabs, "FavoriteTVSeries", StackScreenProps<TVSeriesDetailsRoutes>>

export const FavoriteTVSeriesScreen: FavoriteTVSeriesScreen = ({ navigation }) => {
  const { addFavoriteTVSeries, removeFavoriteTVSeries } = useFavoriteTVSeriesActions()
  const { favoriteTVSeries, favoriteTVSeriesIds } = useFavoriteTVSeries(selectFavoriteTVSeriesAndIds);

  function onPressTVSeries(tvSeries: TVSeries) {
    navigation.navigate("TVSeriesDetails", { TVSeries: tvSeries })
  }

  function onPressFavoriteTVSeries(tvSeries: TVSeries, wasFavorite: boolean) {
    wasFavorite ? removeFavoriteTVSeries(tvSeries) : addFavoriteTVSeries(tvSeries);
  }

  return (
    <TVSeriesList
      tvSeries={favoriteTVSeries}
      favoriteTVSeriesIds={favoriteTVSeriesIds}
      onPressTVSeries={onPressTVSeries}
      onPressFavoriteTVSeries={onPressFavoriteTVSeries}
      initialNumToRender={50}
    />
  );
}

FavoriteTVSeriesScreen.options = {
  title: "Your favorites",
  tabBarLabel: "Favorites",
  tabBarIcon: (props) => <Icon {...props} name="favorite" />
}