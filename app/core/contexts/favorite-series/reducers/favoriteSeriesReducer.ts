import { type TVSeries, isTVSeriesEqual } from "@core/domains/tv-series"
import { TVSeriesActionTypes, type FavoriteTVSeriesActions } from "./favoriteTVSeriesActions";

export type FavoriteTVSeriesState = TVSeries[];

export function favoriteTVSeriesReducer(favoriteTVSeries: FavoriteTVSeriesState, action: FavoriteTVSeriesActions) {
  switch (action.type) {
    case TVSeriesActionTypes.ADD: {
      const { tvSeries } = action

      const isInFavoriteShows = favoriteTVSeries.findIndex((favorite) => isTVSeriesEqual(favorite, tvSeries)) > -1;

      if (isInFavoriteShows) return favoriteTVSeries;

      return favoriteTVSeries.concat(tvSeries);
    }

    case TVSeriesActionTypes.REMOVE: {
      const { tvSeries } = action

      const favoriteTVSeriesIndex = favoriteTVSeries.findIndex((favoriteShow) => isTVSeriesEqual(favoriteShow, tvSeries));

      if (favoriteTVSeriesIndex === -1) return favoriteTVSeries;

      return favoriteTVSeries.slice(0, favoriteTVSeriesIndex)
        .concat(favoriteTVSeries.slice(Math.min(favoriteTVSeriesIndex + 1, favoriteTVSeries.length)))
    }
  }
}