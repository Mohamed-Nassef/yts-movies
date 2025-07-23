import axios from 'axios';
import type { Movie, FetchMoviesParams } from '../types/MovieCard';

export const fetchMovies = async ({
    sort_by,
    limit,
    order_by,
}: FetchMoviesParams): Promise<Movie[]> => {
    const res = await axios.get('https://yts.mx/api/v2/list_movies.json', {
        params: {
            sort_by,
            limit,
            order_by,
        },
    });

    return res.data?.data?.movies || [];
};
