import { QueryFunctionContext, useInfiniteQuery } from 'react-query'
import { TVSeriesService } from '@core/services/tvmaze'

const queryShows = ({ pageParam, signal }: QueryFunctionContext<string, number>) => TVSeriesService.list(pageParam, { signal })

export function useTVSeries() {
  return useInfiniteQuery({
    queryKey: 'shows',
    queryFn: queryShows,
    getNextPageParam: (_, pages) => pages.length + 1
  })
}