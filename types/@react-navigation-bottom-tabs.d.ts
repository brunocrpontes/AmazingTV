import type { BottomTabScreenProps, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import type { ParamListBase } from '@react-navigation/native'

declare module '@react-navigation/stack' {
  export interface BottomTabNavigationScreen<ParamList extends ParamListBase, Route extends keyof ParamList = keyof ParamList> {
    (props: BottomTabScreenProps<ParamList, Route>): React.ReactElement;
    options: BottomTabNavigationOptions;
  }
}