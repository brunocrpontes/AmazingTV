import { TVSeries } from "@core/domains/tv-series";

export type TVSeriesDetailsRoutes = {
  TVSeriesDetails: {
    TVSeries: TVSeries,
  };
  TVSeriesEpisodeDetails: {
    EpisodeId: number;
  };
  TVSeriesPersonDetails: {
    PersonId: number;
  }
}