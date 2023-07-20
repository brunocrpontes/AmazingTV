import { Label } from "@core/components";
import { getTVSeriesCalendar, getTVSeriesRating, type TVSeries } from "@core/domains/tv-series";
import { StyleSheet, View, ViewProps } from "react-native";


export type TVSeriesCardFooterProps = ViewProps & {
  tvSeries: TVSeries
}

export function TVSeriesCardFooter({ tvSeries, ...props }: TVSeriesCardFooterProps) {
  const rating = getTVSeriesRating(tvSeries);
  const calendar = getTVSeriesCalendar(tvSeries);

  return (
    <View style={styles.container} {...props}>
      <Label icon="star">
        {rating}
      </Label>
      <Label icon="calendar-today">
        {calendar}
      </Label>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 16
  },
})

