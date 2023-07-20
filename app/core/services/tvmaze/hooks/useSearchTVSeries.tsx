import { useQuery } from 'react-query'
import { TVSeriesService } from '@core/services/tvmaze'

export function useSearchTVSeries(query: string = "") {
  return useQuery({
    queryKey: ['search-shows', query],
    queryFn: ({ signal }) => TVSeriesService.search(query, { signal }),
    select: (results) => results.map(result => result.show),
    initialData: []
  })
}