import { Text } from "@core/components";
import { TVSeries, getTVSeriesSummary } from "@core/domains/tv-series";
import { Section, SectionProps } from "@tv-series-details/components";

export type TVSeriesSummarySectionProps = Omit<SectionProps, "label"> & {
  tvSeries: TVSeries
}

export function TVSeriesSummarySection({ tvSeries, ...props }: TVSeriesSummarySectionProps) {
  return (
    <Section label="Summary" {...props}>
      <Text>
        {getTVSeriesSummary(tvSeries)}
      </Text>
    </Section>
  );
}