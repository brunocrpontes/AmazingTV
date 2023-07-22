import { StyleSheet, ScrollView } from "react-native";
import { StackNavigationScreen } from "@react-navigation/stack";
import { TVSeriesDetailsRoutes } from "@tv-series-details/types";
import { getTVSeriesName } from "@core/domains/tv-series";
import { useTheme } from "@react-navigation/native";
import { TVSeriesEpisodesSection, TVSeriesHeader, TVSeriesScheduleSection, TVSeriesSummarySection } from "./components";
import { Episode } from "@core/domains/episodes";

export const TVSeriesDetailsScreen: StackNavigationScreen<TVSeriesDetailsRoutes, "TVSeriesDetails"> = ({ navigation, route }) => {
  const { colors } = useTheme()
  const tvSeries = route.params.TVSeries;

  const onPressEpisode = (episode: Episode) => {
    navigation.navigate("TVSeriesEpisodeDetails", { Episode: episode });
  }

  return (
    <ScrollView style={{ backgroundColor: colors.card }} contentContainerStyle={styles.container}>
      <TVSeriesHeader tvSeries={tvSeries} />
      <TVSeriesScheduleSection tvSeries={tvSeries} />
      <TVSeriesSummarySection tvSeries={tvSeries} />
      <TVSeriesEpisodesSection tvSeries={tvSeries} onPressEpisode={onPressEpisode} />
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