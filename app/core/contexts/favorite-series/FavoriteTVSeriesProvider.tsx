import { useReducer, memo } from "react";
import { FavoriteTVSeriesContext } from "./FavoriteTVSeriesContext";
import { favoriteTVSeriesReducer } from "@core/contexts/favorite-series/reducers";
import { TVSeries } from "@core/domains/tv-series";

export type FavoriteTVSeriesProviderProps = Pick<React.ComponentProps<typeof FavoriteTVSeriesContext.Provider>, "children"> & {
  initialFavoriteTVSeries: TVSeries[];
}

export const FavoriteTVSeriesProvider = memo(({ initialFavoriteTVSeries, ...props }: FavoriteTVSeriesProviderProps) => {
  const reducer = useReducer(favoriteTVSeriesReducer, initialFavoriteTVSeries)

  return (
    <FavoriteTVSeriesContext.Provider {...props} value={reducer} />
  )
})
