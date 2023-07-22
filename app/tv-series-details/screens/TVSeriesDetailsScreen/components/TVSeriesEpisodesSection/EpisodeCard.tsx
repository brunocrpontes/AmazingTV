import { Label, Title } from "@core/components";
import { Episode, getEpisodeName, getEpisodeNumber, getEpisodeRating, getEpisodeAirDate } from "@core/domains/episodes";
import { EpisodeScene } from "@tv-series-details/components";
import { useCallback } from "react";
import { GestureResponderEvent, StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

export type EpisodeCardProps = Omit<TouchableOpacityProps, "children" | "onPress"> & {
  episode: Episode;
  onPress: (episode: Episode, event: GestureResponderEvent) => void;
}

export function EpisodeCard({ episode, style, onPress, ...props }: EpisodeCardProps) {
  const _onPress = useCallback((event: GestureResponderEvent) => onPress(episode, event), [onPress, episode])

  return (
    <TouchableOpacity {...props} style={[styles.container, style]} onPress={_onPress}>
      <EpisodeScene episode={episode} />
      <View style={styles.description}>
        <Title numberOfLines={1} style={styles.title}>{getEpisodeNumber(episode)}. {getEpisodeName(episode)}</Title>
        <View style={styles.labels}>
          <Label icon="star">{getEpisodeRating(episode)}</Label>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    columnGap: 8
  },
  description: {
    flex: 1,
  },
  title: {
    fontSize: 16,
  },
  labels: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8
  }
})