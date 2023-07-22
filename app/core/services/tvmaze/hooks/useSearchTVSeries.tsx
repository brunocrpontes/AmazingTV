import { UseQueryOptions, useQuery } from 'react-query'
import { TVMazeServiceError, TVSeriesService } from '@core/services/tvmaze'
import { AxiosError } from 'axios'
import { SearchTVSeries, TVSeries } from '@core/domains/tv-series'

export function useSearchTVSeries(query: string, options: UseQueryOptions<SearchTVSeries[], AxiosError<TVMazeServiceError>, TVSeries[], string[]> = {}) {
  return useQuery({
    queryKey: ['search-shows', query],
    queryFn: ({ signal }) => TVSeriesService.search(query, { signal }),
    select: (results) => results.map(result => result.show),
    initialData: []
  })
}