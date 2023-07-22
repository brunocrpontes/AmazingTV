import { Episode, EpisodeImageQuality, getEpisodeImageUrl } from '@core/domains/episodes'
import { useTheme } from '@react-navigation/native'
import { type ImageProps, Image, StyleSheet, ImageURISource, ImageRequireSource } from 'react-native'

export type EpisodeSceneProps = Omit<ImageProps, "source"> & {
  episode: Episode,
  quality?: EpisodeImageQuality
}

const getTVSeriesImageSource = (episode: Episode, quality: EpisodeImageQuality): ImageURISource | ImageRequireSource => {
  const url = getEpisodeImageUrl(episode, quality);

  if (!url) return require("@core/assets/images/no_image.jpg");

  return { uri: url }
}

export function EpisodeScene({ episode, quality = "medium", style, ...props }: EpisodeSceneProps) {
  const { colors } = useTheme()

  return (
    <Image
      {...props}
      resizeMode="cover"
      style={[styles.cover, { backgroundColor: colors.background }, style]}
      source={getTVSeriesImageSource(episode, quality)}
    />
  )
}

const styles = StyleSheet.create({
  cover: {
    width: 96,
    aspectRatio: 16 / 9,
    borderRadius: 4
  }
})