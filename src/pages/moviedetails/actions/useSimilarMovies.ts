import { useQuery } from '@tanstack/react-query';
import { fetchSimilarMovies } from '../api/fetchSimilarMovies';
import type { SimilarMovie } from '../types/movieDetailsTypes';


export const useSimilarMovies = (movieId: number) =>
    useQuery<SimilarMovie[], Error>({
        queryKey: ['similarMovies', movieId],
        queryFn: () => fetchSimilarMovies(movieId),
        enabled: !!movieId, // Enable the query only if movieId is truthy
    });
