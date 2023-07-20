import type { BottomTabScreenProps, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import type { CompositeScreenProps, ParamListBase } from '@react-navigation/native'

declare module '@react-navigation/bottom-tabs' {
  export interface BottomTabNavigationScreen<ParamList extends ParamListBase, Route extends keyof ParamList = keyof ParamList> {
    (props: BottomTabScreenProps<ParamList, Route>): React.ReactElement;
    options: BottomTabNavigationOptions;
  }

  export interface CompositeBottomTabNavigationScreenWith<ParamList extends ParamListBase, Route extends keyof ParamList = keyof ParamList, With> {
    (props: CompositeScreenProps<
      BottomTabScreenProps<ParamList, Route>,
      With>
    ): React.ReactElement;
    options: BottomTabNavigationOptions
  }
}