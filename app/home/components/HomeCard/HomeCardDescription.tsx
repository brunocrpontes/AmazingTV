import { StyleSheet } from "react-native";
import { Text, type TextProps } from "@core/components";
import { getShowSummary, type Show } from "@core/domains/show";

export type HomeCardDescriptionProps = TextProps & {
  show: Show
}

export function HomeCardDescription({ show, style, ...props }: HomeCardDescriptionProps) {
  return (
    <Text numberOfLines={4} style={[styles.description, style]} {...props}>
      {getShowSummary(show)}
    </Text>
  )
}

const styles = StyleSheet.create({
  description: {
    flex: 1,
    marginTop: 8,
  }
})

