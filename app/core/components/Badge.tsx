import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Text, TextProps } from "./Text";
import { useTheme } from "@react-navigation/native";

export type BadgeProps = TextProps & {
  containerStyle?: StyleProp<ViewStyle>
}

export function Badge({ containerStyle, style, ...props }: BadgeProps) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }, containerStyle]}>
      <Text style={[{ color: colors.onPrimary }, style]} {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4
  }
})