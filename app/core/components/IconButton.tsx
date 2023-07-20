import { TouchableOpacityProps, TouchableOpacity, StyleSheet } from "react-native";
import { Icon, IconProps } from "./Icon";
import { useTheme } from "@react-navigation/native";


export type IconButtonProps = TouchableOpacityProps & IconProps;

export function IconButton({ name, size = 24, color, style, ...props }: IconButtonProps) {
  const { colors } = useTheme()

  return (
    <TouchableOpacity {...props} style={[styles.container, style]}>
      <Icon name={name} size={size} color={color ?? colors.primary} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8
  }
})