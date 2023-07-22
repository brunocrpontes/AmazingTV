import { TVSeriesImageQuality, TVSeries, getTVSeriesImageUrl } from '@core/domains/tv-series'
import { useTheme } from '@react-navigation/native'
import { type ImageProps, Image, StyleSheet, ImageURISource, ImageRequireSource } from 'react-native'

export type CoverProps = Omit<ImageProps, "source"> & {
  tvSeries: TVSeries,
  quality?: TVSeriesImageQuality
}

const getTVSeriesImageSource = (tvSeries: TVSeries, quality: TVSeriesImageQuality): ImageURISource | ImageRequireSource => {
  const url = getTVSeriesImageUrl(tvSeries, quality);

  if (!url) return require("@core/assets/images/no_image.jpg");

  return { uri: url }
}

export function Cover({ tvSeries, quality = "medium", style, ...props }: CoverProps) {
  const { colors } = useTheme()

  return (
    <Image
      {...props}
      resizeMode="cover"
      style={[styles.cover, { backgroundColor: colors.background }, style]}
      source={getTVSeriesImageSource(tvSeries, quality)}
    />
  )
}

const styles = StyleSheet.create({
  cover: {
    width: 120,
    aspectRatio: 210 / 295,
  }
})