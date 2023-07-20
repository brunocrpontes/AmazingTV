import { StyleSheet, View } from "react-native";
import { StackNavigationScreen } from "@react-navigation/stack";
import { TVSeriesDetailsRoutes } from "@tv-series-details/types";
import { getTVSeriesCalendar, getTVSeriesGenres, getTVSeriesName, getTVSeriesRating, getTVSeriesSummary, getTVSeriesSchedule } from "@core/domains/tv-series";
import { Badge, Cover, Label, Text, Title } from "@core/components";
import { ScrollView } from "react-native-gesture-handler";
import { Section } from "@tv-series-details/components";
import { useTheme } from "@react-navigation/native";
import { TVSeriesEpisodesSection, TVSeriesHeader, TVSeriesScheduleSection, TVSeriesSummarySection } from "./components";

export const TVSeriesDetailsScreen: StackNavigationScreen<TVSeriesDetailsRoutes, "TVSeriesDetails"> = ({ route }) => {
  const { colors } = useTheme()
  const tvSeries = route.params.TVSeries;

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.card }]}>
      <TVSeriesHeader tvSeries={tvSeries} />
      <TVSeriesScheduleSection tvSeries={tvSeries} />
      <TVSeriesSummarySection tvSeries={tvSeries} />
      <TVSeriesEpisodesSection tvSeries={tvSeries} />
    </ScrollView>
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

TVSeriesDetailsScreen.options = ({ route }) => ({
  title: getTVSeriesName(route.params.TVSeries)
})