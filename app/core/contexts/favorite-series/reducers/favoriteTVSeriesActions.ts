import { TVSeries } from "@core/domains/tv-series";

export enum TVSeriesActionTypes {
  ADD = "@FAVORITE/ADD",
  REMOVE = "@FAVORITE/REMOVE"
}

export type AddFavoriteTVSeriesAction = {
  type: TVSeriesActionTypes.ADD;
  tvSeries: TVSeries;
}

export type RemoveFavoriteTVSeriesAction = {
  type: TVSeriesActionTypes.REMOVE;
  tvSeries: TVSeries;
}

export type FavoriteTVSeriesActions = AddFavoriteTVSeriesAction | RemoveFavoriteTVSeriesAction;

export const addFavoriteTVSeries = (tvSeries: TVSeries): AddFavoriteTVSeriesAction => ({ type: TVSeriesActionTypes.ADD, tvSeries })

export const removeFavoriteTVSeries = (tvSeries: TVSeries): RemoveFavoriteTVSeriesAction => ({ type: TVSeriesActionTypes.REMOVE, tvSeries })