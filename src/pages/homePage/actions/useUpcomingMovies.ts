import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from '../api/fetchMovies';
import type { Movie } from '../types/MovieCard';

export const useUpcomingMovies = () =>
    useQuery<Movie[]>({
        queryKey: ['upcoming-movies'],
        queryFn: () =>
            fetchMovies({
                sort_by: 'year',
                limit: 8,
                order_by: 'desc',
            }),

        staleTime: 1000 * 60 * 5,// Optional: Cache data for 5 minutes to avoid refetching
        retry: 1,// Optional: Retry once if the request fails
        //cacheTime: 1000 * 60 * 10, // Cache for 10 minutes
        refetchOnWindowFocus: false, // Do not refetch on window focus
        refetchOnReconnect: false, // Do not refetch on reconnect
        refetchOnMount: false, // Do not refetch on mount
        //keepPreviousData: true, // Keep previous data while fetching new data
        enabled: true, // Enable the query by default
    });
