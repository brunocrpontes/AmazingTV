import type { StackScreenProps, StackNavigationOptions } from '@react-navigation/stack'
import type { ParamListBase } from '@react-navigation/native'

declare module '@react-navigation/stack' {
  export interface StackNavigationScreen<ParamList extends ParamListBase, Route extends keyof ParamList = keyof ParamList> {
    (props: StackScreenProps<ParamList, Route>): React.ReactElement;
    options: StackNavigationOptions;
  }
}