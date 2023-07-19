import { Show, getShowImage } from '@core/domains/show'
import { useTheme } from '@react-navigation/native'
import { type ImageProps, Image, StyleSheet } from 'react-native'

export type CoverProps = Omit<ImageProps, "source"> & {
  show: Show
}

export function Cover({ show, style, ...props }: CoverProps) {
  const { colors } = useTheme()

  return (
    <Image
      {...props}
      resizeMode="cover"
      style={[styles.cover, { backgroundColor: colors.background }, style]}
      source={{ uri: getShowImage(show) }}
    />
  )
}

const styles = StyleSheet.create({
  cover: {
    width: 120,
    aspectRatio: 210 / 295,
  }
})