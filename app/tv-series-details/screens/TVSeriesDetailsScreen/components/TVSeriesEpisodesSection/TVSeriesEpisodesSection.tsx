import { TVSeries, getTVSeriesId } from "@core/domains/tv-series";
import { useTVSeriesEpisodes } from "@core/services/tvmaze/hooks";
import { Section, SectionProps } from "@tv-series-details/components";
import { SeasonList } from "./SeasonList";
import { Episode } from "@core/domains/episodes";
import { GestureResponderEvent } from "react-native";

export type TVSeriesEpisodesSectionProps = Omit<SectionProps, "label"> & {
  tvSeries: TVSeries;
  onPressEpisode: (episode: Episode, event: GestureResponderEvent) => void;
}

export function TVSeriesEpisodesSection({ tvSeries, onPressEpisode, ...props }: TVSeriesEpisodesSectionProps) {
  const { data: seasons = [] } = useTVSeriesEpisodes(getTVSeriesId(tvSeries));

  return (
    <Section label="Episodes" {...props}>
      <SeasonList seasons={seasons} onPressEpisode={onPressEpisode} />
    </Section>
  );
} 