import { Label } from "@core/components";
import { TVSeries, getTVSeriesSchedule } from "@core/domains/tv-series";
import { useTheme } from "@react-navigation/native";
import { Section, SectionProps } from "@tv-series-details/components";

export type TVSeriesScheduleSectionProps = Omit<SectionProps, "label"> & {
  tvSeries: TVSeries
}

export function TVSeriesScheduleSection({ tvSeries, ...props }: TVSeriesScheduleSectionProps) {
  const { colors } = useTheme()
  const schedule = getTVSeriesSchedule(tvSeries);

  if (!schedule) return null;

  const { days, time } = schedule;

  return (
    <Section label="Schedule" {...props}>
      {days.map(day => <Label icon="schedule" color={colors.text}>{day} at {time}</Label>)}
    </Section>
  );
}