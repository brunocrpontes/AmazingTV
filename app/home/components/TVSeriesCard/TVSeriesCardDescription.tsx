import { StyleSheet } from "react-native";
import { Text, type TextProps } from "@core/components";
import { getTVSeriesSummary, type TVSeries } from "@core/domains/tv-series";

export type TVSeriesCardDescriptionProps = TextProps & {
  tvSeries: TVSeries
}

export function TVSeriesCardDescription({ tvSeries, style, ...props }: TVSeriesCardDescriptionProps) {
  return (
    <Text numberOfLines={4} style={[styles.description, style]} {...props}>
      {getTVSeriesSummary(tvSeries)}
    </Text>
  )
}

const styles = StyleSheet.create({
  description: {
    flex: 1,
    marginTop: 8,
  }
})

