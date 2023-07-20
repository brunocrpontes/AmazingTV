import { View, type StyleProp, type ViewStyle, StyleSheet } from "react-native";
import { type IconProps, Icon } from "./Icon";
import { type TextProps, Text } from "./Text";
import { useTheme } from "@react-navigation/native";

export type LabelProps = TextProps & {
  icon: IconProps["name"];
  size?: IconProps["size"];
  color?: IconProps["color"];
  containerStyle?: StyleProp<ViewStyle>;
};

export function Label({ containerStyle, size = 16, icon, color, style, ...props }: LabelProps) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, containerStyle]}>
      <Icon name={icon} size={size} color={color ?? colors.primary} style={styles.icon} />
      <Text style={[styles.label, { color: color ?? colors.primary }, style]} {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    marginRight: 4,
    paddingVertical: 8
  },
  label: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 16,
    textAlignVertical: "center"
  }
})