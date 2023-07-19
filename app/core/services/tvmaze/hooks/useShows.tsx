import { QueryFunctionContext, useInfiniteQuery } from 'react-query'
import { Shows } from '@core/services/tvmaze'

const queryShows = ({ pageParam }: QueryFunctionContext<string, number>) => Shows.list(pageParam)

export function useShows() {
  return useInfiniteQuery({
    queryKey: 'shows',
    queryFn: queryShows,
    getNextPageParam: (_, pages) => pages.length + 1
  })
}