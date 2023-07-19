import { useTheme } from '@react-navigation/native';
import { type TextProps as NativeTextProps, Text as NativeText } from 'react-native';

export type TextProps = NativeTextProps;

export function Text({ style, ...props }: TextProps) {
  const { colors } = useTheme();

  return <NativeText {...props} style={[{ color: colors.text }, style]} />
}