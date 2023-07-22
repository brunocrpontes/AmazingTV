import { Episode } from "@core/domains/episodes";
import { TVSeries } from "@core/domains/tv-series";

export type TVSeriesDetailsRoutes = {
  TVSeriesDetails: {
    TVSeries: TVSeries,
  };
  TVSeriesEpisodeDetails: {
    Episode: Episode;
  };
}