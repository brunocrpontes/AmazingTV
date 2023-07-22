import { UseQueryOptions, useQuery } from 'react-query'
import { TVMazeServiceError, TVSeriesService } from '@core/services/tvmaze'
import { TVSeries } from '@core/domains/tv-series'
import { groupBy } from '@core/arrays'
import { Episode, Season, getEpisodeSeason } from '@core/domains/episodes'
import { AxiosError } from 'axios'

export function useTVSeriesEpisodes(tvSeriesId: TVSeries["id"], options: UseQueryOptions<Episode[], AxiosError<TVMazeServiceError>, Season[], (string | number)[]> = {}) {
  return useQuery({
    queryKey: ['show-episodes', tvSeriesId],
    queryFn: ({ signal }) => TVSeriesService.episodes(tvSeriesId, { signal }),
    select: (episodes): Season[] => groupBy(episodes, getEpisodeSeason),
    initialData: [],
    ...options,
  })
}