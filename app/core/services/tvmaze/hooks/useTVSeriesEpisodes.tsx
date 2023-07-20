import { useQuery } from 'react-query'
import { TVSeriesService } from '@core/services/tvmaze'
import { TVSeries } from '@core/domains/tv-series'
import { groupBy } from '@core/array'

export function useTVSeriesEpisodes(tvSeriesId: TVSeries["id"]) {
  return useQuery({
    queryKey: ['show-episodes', tvSeriesId],
    queryFn: ({ signal }) => TVSeriesService.episodes(tvSeriesId, { signal }),
    select: (episodes) => groupBy(episodes, (episode) => episode.season),
    initialData: []
  })
}