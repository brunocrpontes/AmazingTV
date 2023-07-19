import { useMemo } from 'react';
import { FlatList, type ListRenderItemInfo } from 'react-native'
import { type Show, getShowId } from '@core/domains/show';
import { Divider, Icon } from '@core/components'
import { useShows } from '@core/services/tvmaze/hooks';
import { HomeTabs } from "@home/types";
import { HomeCard } from '@home/components'
import { BottomTabNavigationScreen } from '@react-navigation/stack';

const getKeyFromShow = (show: Show) => getShowId(show).toString();
const HomeCardListItem = ({ item: show }: ListRenderItemInfo<Show>) => <HomeCard show={show} />

export const ShowsScreen: BottomTabNavigationScreen<HomeTabs, "Shows"> = (props) => {
  const { data, isRefetching, refetch, fetchNextPage } = useShows();

  const shows = useMemo(() => data?.pages.flatMap(page => page) ?? [], [data])

  return (
    <FlatList
      data={shows}
      keyExtractor={getKeyFromShow}
      initialNumToRender={50}
      ItemSeparatorComponent={Divider}
      renderItem={HomeCardListItem}
      refreshing={isRefetching}
      onRefresh={refetch}
      onEndReachedThreshold={5}
      onEndReached={() => fetchNextPage()}
    />
  );
}

ShowsScreen.options = {
  title: "AmazingTV",
  tabBarLabel: "Shows",
  tabBarIcon: (props) => <Icon {...props} name="movie" />
}