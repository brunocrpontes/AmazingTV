import { useState } from 'react'
import { View } from 'react-native'
import type { CompositeBottomTabNavigationScreenWith } from '@react-navigation/bottom-tabs'
import { Icon } from '@core/components'
import { HomeTabs } from "@home/types";
import { useSearchTVSeries } from '@core/services/tvmaze/hooks';
import { TVSeriesList } from '@home/components';
import { TVSeries, getTVSeriesId } from '@core/domains/tv-series';
import { SearchHeader } from '@home/screens/SearchTVSeriesScreen/components';
import { selectFavoriteTVSeriesIds } from '@home/selectors';
import { useFavoriteTVSeries, useFavoriteTVSeriesActions } from '@core/contexts/favorite-series';
import { StackScreenProps } from '@react-navigation/stack';
import { TVSeriesDetailsRoutes } from '@tv-series-details';

type SearchTVSeriesScreen = CompositeBottomTabNavigationScreenWith<HomeTabs, "SearchTVSeries", StackScreenProps<TVSeriesDetailsRoutes>>

export const SearchTVSeriesScreen: SearchTVSeriesScreen = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const { data: tvSeries = [], isRefetching, refetch } = useSearchTVSeries(query);
  const { addFavoriteTVSeries, removeFavoriteTVSeries } = useFavoriteTVSeriesActions()
  const favoriteTVSeriesIds = useFavoriteTVSeries(selectFavoriteTVSeriesIds);

  function onPressTVSeries(tvSeries: TVSeries) {
    navigation.navigate("TVSeriesDetails", { TVSeries: tvSeries })
  }

  function onPressFavoriteTVSeries(tvSeries: TVSeries, wasFavorite: boolean) {
    wasFavorite ? removeFavoriteTVSeries(tvSeries) : addFavoriteTVSeries(tvSeries);
  }

  return (
    <View>
      <SearchHeader query={query} onQueryChange={setQuery} />
      <TVSeriesList
        tvSeries={tvSeries}
        favoriteTVSeriesIds={favoriteTVSeriesIds}
        onPressTVSeries={onPressTVSeries}
        onPressFavoriteTVSeries={onPressFavoriteTVSeries}
        refreshing={isRefetching}
        onRefresh={refetch}
      />
    </View>
  );
}

SearchTVSeriesScreen.options = {
  tabBarLabel: "Search",
  tabBarIcon: (props) => <Icon {...props} name="search" />
}