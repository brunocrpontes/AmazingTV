import { type Episode, type Season, getEpisodeId } from "@core/domains/episodes";
import { GestureResponderEvent, StyleSheet, View, ViewProps } from "react-native";
import { EpisodeCard } from "./EpisodeCard";
import { Icon, Title } from "@core/components";

export type SeasonProps = ViewProps & {
  season: Season,
  number: number;
  onPressEpisode: (episode: Episode, event: GestureResponderEvent) => void;
}

const byRenderEpisode = (onPress: (episode: Episode, event: GestureResponderEvent) => void) => (episode: Episode) => (
  <EpisodeCard
    key={getEpisodeId(episode)}
    episode={episode}
    onPress={onPress}
  />
)

export function Season({ season, onPressEpisode, number, ...props }: SeasonProps) {
  return (
    <View {...props}>
      <View style={styles.header}>
        <Icon name="theaters" size={18} />
        <Title style={styles.title}>Season {number}</Title>
      </View>
      {season.map(byRenderEpisode(onPressEpisode))}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8
  },
  title: {
    fontSize: 16,
  }
})