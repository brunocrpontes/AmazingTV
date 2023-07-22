import { FlatList, type FlatListProps, type GestureResponderEvent, type ListRenderItemInfo } from 'react-native'
import { type TVSeries, getTVSeriesId } from '@core/domains/tv-series';
import { Divider } from '@core/components'
import { TVSeriesCard } from './TVSeriesCard'
import React, { useCallback } from 'react';

const getKeyFromTVSeries = (tvSeries: TVSeries) => getTVSeriesId(tvSeries).toString();

export type TVSeriesListProps = Omit<FlatListProps<TVSeries>, "data" | "keyExtractor" | "renderItem" | "ItemSeparatorComponent"> & {
  tvSeries: TVSeries[],
  favoriteTVSeriesIds?: number[],
  onPressTVSeries: (tvSeries: TVSeries, event: GestureResponderEvent) => void;
  onPressFavoriteTVSeries: (tvSeries: TVSeries, wasFavorite: boolean, event: GestureResponderEvent) => void;
}

export const TVSeriesList = React.forwardRef<FlatList, TVSeriesListProps>(({ tvSeries, favoriteTVSeriesIds = [], onPressTVSeries, onPressFavoriteTVSeries, ...props }, ref) => {
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
      ref={ref}
      data={tvSeries}
      keyExtractor={getKeyFromTVSeries}
      renderItem={renderHomeCardItem}
      ItemSeparatorComponent={Divider}
    />
  );
})
