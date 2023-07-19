import { useTheme } from "@react-navigation/native";
import { StyleSheet, View, ViewProps } from "react-native";

export type DividerProps = ViewProps

export function Divider({ style, children: _, ...props }: DividerProps) {
  const { colors } = useTheme();

  return <View style={[styles.container, { backgroundColor: colors.border }, style]} {...props} />
}

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    height: StyleSheet.hairlineWidth
  }
})