import { Dispatch, createContext } from "react";
import type { FavoriteTVSeriesState, FavoriteTVSeriesActions } from "@core/contexts/favorite-series/reducers";

export const FavoriteTVSeriesContext = createContext<[FavoriteTVSeriesState, Dispatch<FavoriteTVSeriesActions>] | null>(null);