import { Badge, Cover, Label, Title } from "@core/components"
import { TVSeries, getTVSeriesCalendar, getTVSeriesGenres, getTVSeriesName, getTVSeriesRating } from "@core/domains/tv-series"
import { StyleSheet, View, ViewProps } from "react-native"

export type TVSeriesHeaderProps = ViewProps & {
  tvSeries: TVSeries
}

export function TVSeriesHeader({ tvSeries, style, ...props }: TVSeriesHeaderProps) {
  const genres = getTVSeriesGenres(tvSeries);

  return (
    <View style={[styles.header, style]} {...props}>
      <Cover style={styles.cover} tvSeries={tvSeries} />
      <View style={styles.details}>
        <Title style={styles.title}>{getTVSeriesName(tvSeries)}</Title>
        <Label icon="star">
          {getTVSeriesRating(tvSeries)}
        </Label>
        <Label icon="calendar-today">
          {getTVSeriesCalendar(tvSeries)}
        </Label>
        <View style={styles.badges}>
          {genres.map(genre => (<Badge>{genre}</Badge>))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    gap: 16
  },
  cover: {
    width: "40%",
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 22
  },
  badges: {
    paddingVertical: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4
  }
})