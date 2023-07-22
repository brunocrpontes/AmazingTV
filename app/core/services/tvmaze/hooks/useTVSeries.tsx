import { QueryFunctionContext, UseInfiniteQueryOptions, useInfiniteQuery } from 'react-query'
import { TVMazeServiceError, TVSeriesService } from '@core/services/tvmaze'
import { TVSeries } from '@core/domains/tv-series'
import { AxiosError } from 'axios'

const queryShows = ({ pageParam, signal }: QueryFunctionContext<string, number>) => TVSeriesService.list(pageParam, { signal })

export function useTVSeries(options: UseInfiniteQueryOptions<TVSeries[], AxiosError<TVMazeServiceError>, TVSeries[], TVSeries[], "shows"> = {}) {
  return useInfiniteQuery({
    queryKey: 'shows',
    queryFn: queryShows,
    getNextPageParam: (_, pages) => pages.length + 1,
    ...options
  })
}