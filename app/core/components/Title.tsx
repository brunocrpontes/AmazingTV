import { Text, TextProps } from './Text';
import { StyleSheet } from 'react-native';

export type TitleProps = TextProps;

export function Title({ style, ...props }: TitleProps) {
  return <Text {...props} style={[styles.title, style]} />
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontWeight: "700",
    fontSize: 18
  }
})