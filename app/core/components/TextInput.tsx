import { useTheme } from '@react-navigation/native';
import { forwardRef } from 'react';
import { type TextInputProps as NativeTextInputProps, TextInput as NativeTextInput, StyleSheet } from 'react-native'

export type TextInputProps = NativeTextInputProps;

export const TextInput = forwardRef<NativeTextInput, TextInputProps>(({ style, ...props }, ref) => {
  const { colors } = useTheme()

  return (
    <NativeTextInput
      ref={ref}
      underlineColorAndroid="transparent"
      cursorColor={colors.primary}
      style={[styles.input, { color: colors.text }, style]}
      {...props}
    />
  )
})

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 14,
  }
})