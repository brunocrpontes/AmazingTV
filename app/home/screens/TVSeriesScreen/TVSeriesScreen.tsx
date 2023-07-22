import { useMemo, useRef } from 'react';
import { Icon, Text, Title } from '@core/components'
import { useTVSeries } from '@core/services/tvmaze/hooks';
import { HomeTabs } from "@home/types";
import { TVSeriesList } from '@home/components'
import { StackScreenProps } from '@react-navigation/stack';
import { CompositeBottomTabNavigationScreenWith } from '@react-navigation/bottom-tabs'
import { TVSeries, getTVSeriesId } from '@core/domains/tv-series';
import { useFavoriteTVSeries, useFavoriteTVSeriesActions } from '@core/contexts/favorite-series';
import { selectFavoriteTVSeriesIds } from '@home/selectors';
import { TVSeriesDetailsRoutes } from '@tv-series-details';
import { ActivityIndicator, TouchableOpacity, StyleSheet, View, type FlatList } from 'react-native';
import { useScrollToTop, useTheme } from '@react-navigation/native';

type TVSeriesScreen = CompositeBottomTabNavigationScreenWith<HomeTabs, "TVSeries", StackScreenProps<TVSeriesDetailsRoutes>>


export const TVSeriesScreen: TVSeriesScreen = ({ navigation }) => {
  const listRef = useRef<FlatList>(null)
  const { colors } = useTheme()
  const { data, isLoading, isFetchingNextPage, isError, isRefetching, refetch, fetchNextPage } = useTVSeries();
  const { addFavoriteTVSeries, removeFavoriteTVSeries } = useFavoriteTVSeriesActions()
  const favoriteTVSeriesIds = useFavoriteTVSeries(selectFavoriteTVSeriesIds)

  useScrollToTop(listRef)

  const tvSeries = useMemo(() => data?.pages.flatMap(page => page) ?? [], [data])

  function onPressTVSeries(tvSeries: TVSeries) {
    navigation.navigate("TVSeriesDetails", { TVSeries: tvSeries })
  }

  function onPressFavoriteTVSeries(tvSeries: TVSeries, wasFavorite: boolean) {
    wasFavorite ? removeFavoriteTVSeries(tvSeries) : addFavoriteTVSeries(tvSeries);
  }

  function renderListEmptyComponent() {
    if (isLoading || isRefetching) {
      return (
        <View style={styles.emptyContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )
    }

    if (isError) {
      return (
        <View style={styles.emptyContainer}>
          <Title>Something went wrong! 😥</Title>
          <TouchableOpacity onPress={() => refetch()} style={{ flexDirection: "row", columnGap: 8, paddingHorizontal: 8 }}>
            <Icon name="refresh" color={colors.primary} size={18} />
            <Text style={{ color: colors.primary, fontWeight: "bold" }}>Retry</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View style={styles.emptyContainer}>
        <Title style={{ textAlign: "center" }}>Looks like there's nothing around here 😶‍🌫️</Title>
      </View>
    );
  }

  function renderListFooterComponent() {
    if (!isFetchingNextPage)
      return null;

    return (
      <View style={{ padding: 16, justifyContent: "center" }}>
        <ActivityIndicator size="small" color={colors.primary} />
      </View>
    )
  }

  return (
    <TVSeriesList
      ref={listRef}
      tvSeries={tvSeries}
      favoriteTVSeriesIds={favoriteTVSeriesIds}
      onPressTVSeries={onPressTVSeries}
      onPressFavoriteTVSeries={onPressFavoriteTVSeries}
      refreshing={isRefetching && !!tvSeries.length}
      extraData={[isLoading, isRefetching, isError]}
      onRefresh={refetch}
      onEndReached={() => fetchNextPage()}
      onEndReachedThreshold={5}
      contentContainerStyle={styles.listContainer}
      ListEmptyComponent={renderListEmptyComponent}
      ListFooterComponent={renderListFooterComponent}
    />
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 64
  },
  listContainer: {
    flexGrow: 1
  }
})

TVSeriesScreen.options = {
  title: "AmazingTV",
  tabBarLabel: "TV Series",
  tabBarIcon: (props) => <Icon {...props} name="movie" />
}