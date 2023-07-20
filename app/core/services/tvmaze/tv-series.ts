import { AxiosRequestConfig } from 'axios';
import { TVMazeService } from './service'
import type { TVSeries } from '@core/domains/tv-series'
import { Episode } from '@core/domains/episodes/types';

export async function list(page: number = 0, config?: AxiosRequestConfig) {
  const response = await TVMazeService.get<TVSeries[]>("/shows", { ...config, params: { page } });
  return response.data;
}

export async function search(query: string, config?: AxiosRequestConfig) {
  type SearchTVSeries = {
    score: number;
    show: TVSeries;
  }

  const response = await TVMazeService.get<SearchTVSeries[]>("/search/shows", { ...config, params: { q: query } });
  return response.data;
}

export async function episodes(tvSeriesId: TVSeries["id"], config?: AxiosRequestConfig) {
  const response = await TVMazeService.get<Episode[]>(`/shows/${tvSeriesId}/episodes`, config);
  return response.data;
}