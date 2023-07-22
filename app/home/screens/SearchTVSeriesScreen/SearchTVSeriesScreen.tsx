import { useRef, useState } from 'react'
import { ActivityIndicator, StyleSheet, TouchableOpacity, View, type FlatList } from 'react-native'
import type { CompositeBottomTabNavigationScreenWith } from '@react-navigation/bottom-tabs'
import { Icon, Text, Title } from '@core/components'
import { HomeTabs } from "@home/types";
import { useSearchTVSeries } from '@core/services/tvmaze/hooks';
import { TVSeriesList } from '@home/components';
import { TVSeries } from '@core/domains/tv-series';
import { SearchHeader } from '@home/screens/SearchTVSeriesScreen/components';
import { selectFavoriteTVSeriesIds } from '@home/selectors';
import { useFavoriteTVSeries, useFavoriteTVSeriesActions } from '@core/contexts/favorite-series';
import { StackScreenProps } from '@react-navigation/stack';
import { TVSeriesDetailsRoutes } from '@tv-series-details';
import { useScrollToTop, useTheme } from '@react-navigation/native';

type SearchTVSeriesScreen = CompositeBottomTabNavigationScreenWith<HomeTabs, "SearchTVSeries", StackScreenProps<TVSeriesDetailsRoutes>>

export const SearchTVSeriesScreen: SearchTVSeriesScreen = ({ navigation }) => {
  const listRef = useRef<FlatList>(null)
  const { colors } = useTheme()
  const [query, setQuery] = useState("");
  const { data: tvSeries = [], isLoading, isError, isRefetching, refetch } = useSearchTVSeries(query);
  const { addFavoriteTVSeries, removeFavoriteTVSeries } = useFavoriteTVSeriesActions()
  const favoriteTVSeriesIds = useFavoriteTVSeries(selectFavoriteTVSeriesIds);

  useScrollToTop(listRef)

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
          <TouchableOpacity onPress={() => refetch()} style={{ flexDirection: "row", columnGap: 8, paddingHorizontal: 8, borderRadius: 4, borderWidth: 1, borderColor: colors.primary }}>
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

  return (
    <View style={styles.container}>
      <SearchHeader query={query} onQueryChange={setQuery} />
      <TVSeriesList
        ref={listRef}
        contentContainerStyle={styles.listContainer}
        tvSeries={tvSeries}
        favoriteTVSeriesIds={favoriteTVSeriesIds}
        onPressTVSeries={onPressTVSeries}
        onPressFavoriteTVSeries={onPressFavoriteTVSeries}
        refreshing={isRefetching && !!tvSeries.length}
        onRefresh={refetch}
        ListEmptyComponent={renderListEmptyComponent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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

SearchTVSeriesScreen.options = {
  headerShown: false,
  tabBarLabel: "Search",
  tabBarIcon: (props) => <Icon {...props} name="search" />
}