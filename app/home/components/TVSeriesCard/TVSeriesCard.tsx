import React, { useCallback } from "react"
import { GestureResponderEvent, StyleProp, StyleSheet, TouchableOpacity, View, ViewProps, ViewStyle } from "react-native"
import { useTheme } from "@react-navigation/native"
import type { TVSeries } from "@core/domains/tv-series"
import { Cover } from '@core/components'
import { TVSeriesCardFooter } from "./TVSeriesCardFooter"
import { TVSeriesCardHeader } from "./TVSeriesCardHeader"
import { TVSeriesCardDescription } from "./TVSeriesCardDescription"

export type TVSeriesCardProps = ViewProps & {
  tvSeries: TVSeries;
  favorited?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress: (tvSeries: TVSeries, event: GestureResponderEvent) => void;
  onPressFavoriteTVSeries: (tvSeries: TVSeries, wasFavorite: boolean, event: GestureResponderEvent) => void;
}

export const TVSeriesCard = React.memo(({ tvSeries, favorited = false, onPressFavoriteTVSeries, onPress, style, ...props }: TVSeriesCardProps) => {
  const { colors } = useTheme()

  const _onPress = useCallback((event: GestureResponderEvent) => onPress(tvSeries, event), [onPress, tvSeries])

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.5}
      onPress={_onPress}
      style={[styles.container, { backgroundColor: colors.card }, style]}
    >
      <Cover tvSeries={tvSeries} />
      <View style={styles.body}>
        <TVSeriesCardHeader tvSeries={tvSeries} favorited={favorited} onPressFavoriteTVSeries={onPressFavoriteTVSeries} />
        <TVSeriesCardDescription tvSeries={tvSeries} />
        <TVSeriesCardFooter tvSeries={tvSeries} />
      </View>
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  body: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8
  }
})