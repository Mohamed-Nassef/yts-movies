import { useQuery } from '@tanstack/react-query';
import { fetchSearchMovies } from '../api/searchMovies';

export const useSearchMovies = (query: string) => {
    return useQuery({
        queryKey: ['searchMovies', query],
        queryFn: () => fetchSearchMovies(query),
        enabled: query.trim().length > 0, // Enable the query only if the search term is not empty
    });
};
