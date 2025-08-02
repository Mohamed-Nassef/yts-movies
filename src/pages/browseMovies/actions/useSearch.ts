import { useQuery  } from '@tanstack/react-query';
import { fetchSearchMovies } from '../api/fetchSearchMovies';
import type { FetchSearchMoviesParams, FetchMoviesResponse } from '../typs/FetchSearchTypes';

export const useSearch = (params: FetchSearchMoviesParams) => {
   // const queryClient = useQueryClient();

    return useQuery<FetchMoviesResponse, Error>({
        queryKey: ['searchMovies', params],
        queryFn: () => fetchSearchMovies(params),
        // placeholderData: () =>
        //     queryClient.getQueryData<FetchMoviesResponse>(['searchMovies', { ...params, page: params.page! - 1 }]),
        

    });

};
