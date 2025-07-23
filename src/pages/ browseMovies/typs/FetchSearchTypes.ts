import type { Movie } from '../../homePage/types/MovieCard';

export interface FetchSearchMoviesParams {
  search?: string;
  quality?: string;
  genre?: string;
  rating?: string;
  sort_by: string;
  order_by: string;
  limit: number;
  page?: number;
}
export interface FetchMoviesResponse {
  movies: Movie[];
  totalPages: number;
  currentPage: number;
}
export interface FiltersType {
  search: string;
  quality: string;
  genre: string;
  rating: string;
  year: string;
  language: string;
  sort_by: string;
}

