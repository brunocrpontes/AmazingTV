import { DarkTheme } from '@react-navigation/native'

export const Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    onPrimary: "rgb(255, 255, 255)"
  }
}