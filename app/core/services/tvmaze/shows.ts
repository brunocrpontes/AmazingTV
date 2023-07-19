import { MazeTVService } from './service'
import type { Show } from '@core/domains/show'

export async function list(page: number = 0) {
  const response = await MazeTVService.get<Show[]>("/shows", { params: { page } });
  return response.data;
}

export async function search(query: string) {
  const response = await MazeTVService.get<Show[]>("/search", { params: { q: query } });
  return response.data;
}