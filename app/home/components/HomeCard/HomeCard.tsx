import React from "react"
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from "react-native"
import { useTheme } from "@react-navigation/native"
import type { Show } from "@core/domains/show"
import { Cover } from '@core/components'
import { HomeCardFooter } from "./HomeCardFooter"
import { HomeCardHeader } from "./HomeCardHeader"
import { HomeCardDescription } from "./HomeCardDescription"

export type HomeCardProps = ViewProps & {
  show: Show;
  style?: StyleProp<ViewStyle>;
}

export const HomeCard = React.memo(({ show, style, ...props }: HomeCardProps) => {
  const { colors } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]} {...props}>
      <Cover show={show} />
      <View style={styles.body}>
        <HomeCardHeader show={show} />
        <HomeCardDescription show={show} />
        <HomeCardFooter show={show} />
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  body: {
    flex: 1,
    padding: 16,
  }
})