import type { Episode, Season as TSeason } from "@core/domains/episodes";
import { FlatListProps, GestureResponderEvent } from "react-native";
import { Season } from "./Season";

export type SeasonListProps = Omit<FlatListProps<TSeason>, "data" | "keyExtractor" | "renderItem" | "horizontal"> & {
  seasons: TSeason[];
  onPressEpisode: (episode: Episode, event: GestureResponderEvent) => void;
}

export function SeasonList({ seasons, onPressEpisode, ...props }: SeasonListProps) {
  return seasons.map((season, index) => (
    <Season key={index} onPressEpisode={onPressEpisode} season={season} number={index + 1} />
  ));
}