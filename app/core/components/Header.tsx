import { StyleSheet, View, ViewProps } from "react-native"
import { useTheme } from "@react-navigation/native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export type HeaderProps = ViewProps

export const MIN_HEADER_HEIGHT = 48;

export function Header({ style, ...props }: HeaderProps) {
  const { colors } = useTheme()

  return (
    <SafeAreaView
      edges={["top"]}
      style={[
        styles.container,
        { backgroundColor: colors.card, borderBottomColor: colors.border, shadowColor: colors.text },
        style
      ]}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    elevation: 4,
    shadowOffset: {
      width: 4,
      height: 0
    },
    shadowOpacity: 0.26,
    paddingHorizontal: 16,
    paddingBottom: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    justifyContent: "center"
  }
})