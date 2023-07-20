import { IconButton, Title } from "@core/components";
import { getTVSeriesName, type TVSeries } from "@core/domains/tv-series";
import { useTheme } from "@react-navigation/native";
import { useCallback } from "react";
import { GestureResponderEvent, StyleSheet, View, ViewProps } from "react-native";

export type TVSeriesCardHeaderProps = ViewProps & {
  tvSeries: TVSeries
  favorited: boolean;
  onPressFavoriteTVSeries: (tvSeries: TVSeries, wasFavorite: boolean, event: GestureResponderEvent) => void;
}

export function TVSeriesCardHeader({ tvSeries, favorited, onPressFavoriteTVSeries, ...props }: TVSeriesCardHeaderProps) {
  const { colors } = useTheme()

  const _onPress = useCallback(
    (event: GestureResponderEvent) => onPressFavoriteTVSeries(tvSeries, favorited, event),
    [onPressFavoriteTVSeries, favorited, tvSeries]
  )

  return (
    <View style={styles.container} {...props}>
      <Title style={styles.title} numberOfLines={1}>{getTVSeriesName(tvSeries)}</Title>
      <IconButton
        size={24}
        name={favorited ? "favorite" : "favorite-outline"}
        color={colors.primary}
        onPress={_onPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    flex: 1
  }
})

