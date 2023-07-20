import { type TVSeries, getTVSeriesId } from "@core/domains/tv-series";

export const selectFavoriteTVSeriesIds = (tvSeries: TVSeries[]) => tvSeries.map(getTVSeriesId);