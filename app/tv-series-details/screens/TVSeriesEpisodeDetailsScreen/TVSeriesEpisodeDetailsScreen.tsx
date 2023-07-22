import { StyleSheet, View, useWindowDimensions } from "react-native";
import { StackNavigationScreen } from "@react-navigation/stack";
import { TVSeriesDetailsRoutes } from "@tv-series-details/types";
import { ScrollView } from "react-native-gesture-handler";
import { EpisodeScene, Section } from "@tv-series-details/components";
import { getEpisodeName, getEpisodeNumber, getEpisodeRating, getEpisodeSeason, getEpisodeSummary } from "@core/domains/episodes";
import { Label, Text, Title } from "@core/components";
import { useTheme } from "@react-navigation/native";


export const TVSeriesEpisodeDetailsScreen: StackNavigationScreen<TVSeriesDetailsRoutes, "TVSeriesEpisodeDetails"> = ({ navigation, route }) => {
  const { Episode: episode } = route.params
  const { colors } = useTheme();
  const { width: screenWidth } = useWindowDimensions()

  return (
    <ScrollView style={{ backgroundColor: colors.card }}>
      <EpisodeScene
        quality="original"
        episode={episode}
        style={[styles.scene, { width: screenWidth, height: screenWidth * (9 / 16) }]}
      />
      <View style={styles.description}>
        <Title style={styles.title}>{getEpisodeNumber(episode)}. {getEpisodeName(episode)}</Title>
        <View style={styles.labels}>
          <Label icon="theaters" color={colors.text}>Season {getEpisodeSeason(episode)}</Label>
          <Label icon="star" color={colors.text}>{getEpisodeRating(episode)}</Label>
        </View>
        <Section label="Summary">
          <Text>
            {getEpisodeSummary(episode)}
          </Text>
        </Section>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16
  },
  description: {
    padding: 16
  },
  scene: {
    borderRadius: 0
  },
  title: {
    fontSize: 22,
  },
  labels: {
    flexDirection: "row",
    columnGap: 8
  },
  label: {
    fontWeight: "normal"
  }
})

TVSeriesEpisodeDetailsScreen.options = ({ navigation, route }) => ({
  title: getEpisodeName(route.params.Episode),
  headerBackTitle: "TV Series"
})