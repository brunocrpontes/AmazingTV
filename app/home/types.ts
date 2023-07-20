import { NavigatorScreenParams, ParamListBase } from "@react-navigation/native"

export type HomeTabs = {
  TVSeries: undefined,
  SearchTVSeries: undefined,
  FavoriteTVSeries: undefined
}
export type HomeRoutes = {
  Home: NavigatorScreenParams<HomeTabs>
}



