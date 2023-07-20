import { FlatList, FlatListProps, GestureResponderEvent, type ListRenderItemInfo } from 'react-native'
import { type TVSeries, getTVSeriesId } from '@core/domains/tv-series';
import { Divider } from '@core/components'
import { TVSeriesCard } from './TVSeriesCard'
import { useCallback } from 'react';

const getKeyFromTVSeries = (tvSeries: TVSeries) => getTVSeriesId(tvSeries).toString();

export type TVSeriesListProps = Omit<FlatListProps<TVSeries>, "data" | "keyExtractor" | "renderItem" | "ItemSeparatorComponent"> & {
  tvSeries: TVSeries[],
  favoriteTVSeriesIds?: number[],
  onPressTVSeries: (tvSeries: TVSeries, event: GestureResponderEvent) => void;
  onPressFavoriteTVSeries: (tvSeries: TVSeries, wasFavorite: boolean, event: GestureResponderEvent) => void;
}

export const TVSeriesList = ({ tvSeries, favoriteTVSeriesIds = [], onPressTVSeries, onPressFavoriteTVSeries, ...props }: TVSeriesListProps) => {
  const renderHomeCardItem = useCallback(
    ({ item }: ListRenderItemInfo<TVSeries>) => {
      const favorited = favoriteTVSeriesIds.includes(getTVSeriesId(item));
      return (
        <TVSeriesCard
          tvSeries={item}
          onPress={onPressTVSeries}
          onPressFavoriteTVSeries={onPressFavoriteTVSeries}
          favorited={favorited}
        />
      )
    },
    [onPressTVSeries, onPressFavoriteTVSeries, favoriteTVSeriesIds]
  )

  return (
    <FlatList
      {...props}
      data={tvSeries}
      keyExtractor={getKeyFromTVSeries}
      renderItem={renderHomeCardItem}
      ItemSeparatorComponent={Divider}
    />
  );
}
