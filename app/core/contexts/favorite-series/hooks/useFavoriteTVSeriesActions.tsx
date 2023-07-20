import { useContext, useMemo } from "react";
import { FavoriteTVSeriesContext } from "@core/contexts/favorite-series/FavoriteTVSeriesContext";
import { TVSeries } from "@core/domains/tv-series";
import { addFavoriteTVSeries, removeFavoriteTVSeries } from "@core/contexts/favorite-series/reducers";

export function useFavoriteTVSeriesActions() {
  const state = useContext(FavoriteTVSeriesContext)!;

  if (!state) throw new Error("Component must be wrapped by `FavoriteTVSeriesProvider`");

  const [, dispatch] = state;

  return useMemo(() => ({
    addFavoriteTVSeries: (show: TVSeries) => dispatch(addFavoriteTVSeries(show)),
    removeFavoriteTVSeries: (show: TVSeries) => dispatch(removeFavoriteTVSeries(show))
  }),
    [dispatch]
  )
}