import { Text } from "@core/components";
import { TVSeries, getTVSeriesId, getTVSeriesSummary } from "@core/domains/tv-series";
import { useTVSeriesEpisodes } from "@core/services/tvmaze/hooks";
import { Section, SectionProps } from "@tv-series-details/components";

export type TVSeriesEpisodesSectionProps = Omit<SectionProps, "label"> & {
  tvSeries: TVSeries
}

export function TVSeriesEpisodesSection({ tvSeries, ...props }: TVSeriesEpisodesSectionProps) {
  const { data: episodes = [] } = useTVSeriesEpisodes(getTVSeriesId(tvSeries));

  console.log(episodes)

  return (
    <Section label="Episodes" {...props}>

    </Section>
  );
} 