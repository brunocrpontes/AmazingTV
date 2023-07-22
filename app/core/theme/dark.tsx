import { DarkTheme } from '@react-navigation/native'

export const Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#8A9AFF",
    onPrimary: "rgb(255, 255, 255)"
  }
}