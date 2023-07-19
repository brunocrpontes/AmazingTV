import { Icon, Title } from "@core/components";
import { getShowName, type Show } from "@core/domains/show";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View, ViewProps } from "react-native";

export type HomeCardHeaderProps = ViewProps & {
  show: Show
}

export function HomeCardHeader({ show, ...props }: HomeCardHeaderProps) {
  const { colors } = useTheme()

  return (
    <View style={styles.container} {...props}>
      <Title numberOfLines={1}>{getShowName(show)}</Title>
      <Icon
        size={24}
        name={"favorite-outline"}
        color={colors.primary}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})

