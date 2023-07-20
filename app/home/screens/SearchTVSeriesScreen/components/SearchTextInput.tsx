import { useCallback, useRef } from 'react';
import { Icon, IconButton, TextInput, type TextInputProps } from '@core/components'
import { useTheme } from '@react-navigation/native'
import { StyleProp, StyleSheet, View, ViewStyle, type TextInput as NativeTextInput } from 'react-native'

export type SearchTextInputProps = TextInputProps & {
  containerStyle?: StyleProp<ViewStyle>;
}

export function SearchTextInput({ containerStyle, style, onChangeText, ...props }: SearchTextInputProps) {
  const inputRef = useRef<NativeTextInput>(null);
  const { colors } = useTheme();

  const onPressClear = useCallback(() => {
    inputRef.current?.clear();
    //ISSUE: Input clear function doesn't trigger onChangeText, so we have to trigger it manually
    typeof onChangeText === "function" && onChangeText("");
  }, [onChangeText])

  return (
    <View style={[styles.container, { backgroundColor: colors.background }, containerStyle]}>
      <Icon name="search" size={20} color={colors.text} style={styles.icon} />
      <TextInput
        {...props}
        ref={inputRef}
        style={[styles.input, style]}
        onChangeText={onChangeText}
      />
      <IconButton
        name="close"
        size={20}
        color={colors.primary}
        style={styles.icon}
        onPress={onPressClear}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    borderRadius: 20,
    height: 40,
  },
  input: {
    fontSize: 18
  },
  icon: {
    padding: 8
  }
})