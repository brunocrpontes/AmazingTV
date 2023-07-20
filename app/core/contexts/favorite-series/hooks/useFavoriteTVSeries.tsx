import { useContext, useMemo } from "react";
import { FavoriteTVSeriesContext } from "@core/contexts/favorite-series/FavoriteTVSeriesContext";
import type { FavoriteTVSeriesState } from "@core/contexts/favorite-series/reducers";

export function useFavoriteTVSeries<FS extends (shows: FavoriteTVSeriesState) => any>(selector: FS): ReturnType<FS> {
  const state = useContext(FavoriteTVSeriesContext)!;
  const [tvSeries] = state;

  if (!tvSeries) throw new Error("Component must be wrapped by `FavoriteShowsProvider`");

  return useMemo(() => selector(tvSeries), [tvSeries, selector]);
}