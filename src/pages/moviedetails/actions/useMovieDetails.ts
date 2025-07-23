import { useQuery } from '@tanstack/react-query';
import { fetchMovieDetails } from '../api/fetchMovieDetails';
import type { MovieDetailsResponse } from '../types/movieDetailsTypes';

export const useMovieDetails = (movieId: number) =>
    useQuery<MovieDetailsResponse, Error>({
        queryKey: ['movieDetails', movieId],
        queryFn: () => fetchMovieDetails(movieId),
        enabled: !!movieId, // Enable the query only if movieId is truthy
    });
