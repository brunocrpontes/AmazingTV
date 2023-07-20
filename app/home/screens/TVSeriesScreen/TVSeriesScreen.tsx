import { useMemo } from 'react';
import { Header, Icon, Title } from '@core/components'
import { useTVSeries } from '@core/services/tvmaze/hooks';
import { HomeTabs } from "@home/types";
import { TVSeriesList } from '@home/components'
import { StackScreenProps } from '@react-navigation/stack';
import { CompositeBottomTabNavigationScreenWith } from '@react-navigation/bottom-tabs'
import { TVSeries, getTVSeriesId } from '@core/domains/tv-series';
import { useFavoriteTVSeries, useFavoriteTVSeriesActions } from '@core/contexts/favorite-series';
import { selectFavoriteTVSeriesIds } from '@home/selectors';
import { View } from 'react-native';
import { TVSeriesDetailsRoutes } from '@tv-series-details';

type TVSeriesScreen = CompositeBottomTabNavigationScreenWith<HomeTabs, "TVSeries", StackScreenProps<TVSeriesDetailsRoutes>>


export const TVSeriesScreen: TVSeriesScreen = ({ navigation }) => {
  const { data, isRefetching, refetch } = useTVSeries();
  const { addFavoriteTVSeries, removeFavoriteTVSeries } = useFavoriteTVSeriesActions()
  const favoriteTVSeriesIds = useFavoriteTVSeries(selectFavoriteTVSeriesIds)

  const tvSeries = useMemo(() => data?.pages.flatMap(page => page) ?? [], [data])


  function onPressTVSeries(tvSeries: TVSeries) {
    navigation.navigate("TVSeriesDetails", { TVSeries: tvSeries })
  }

  function onPressFavoriteTVSeries(tvSeries: TVSeries, wasFavorite: boolean) {
    wasFavorite ? removeFavoriteTVSeries(tvSeries) : addFavoriteTVSeries(tvSeries);
  }

  return (
    <View>
      <Header>
        <Title>AmazingTV</Title>
      </Header>
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

TVSeriesScreen.options = {
  tabBarLabel: "TV Series",
  tabBarIcon: (props) => <Icon {...props} name="movie" />
}