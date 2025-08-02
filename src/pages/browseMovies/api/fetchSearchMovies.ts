import axios from 'axios';
import type { FetchSearchMoviesParams, FetchMoviesResponse } from '../typs/FetchSearchTypes';

export const fetchSearchMovies = async ({
    search = '',
    quality = 'all',
    genre = 'all',
    rating = 'all',
    sort_by = 'date_added',
    order_by = 'desc',
    limit = 20,
    page = 1,
}: FetchSearchMoviesParams): Promise<FetchMoviesResponse> => {
    const params: Record<string, string | number> = {
        query_term: search,
        quality: quality !== 'all' ? quality : '',
        genre: genre !== 'all' ? genre : '',
        minimum_rating: rating !== 'all' ? Number(rating) : 0,
        sort_by,
        order_by,
        limit,
        page,
    };

    Object.keys(params).forEach((key) => {
        if (params[key] === '') {
            delete params[key];
        }
    });

    const response = await axios.get('https://yts.mx/api/v2/list_movies.json', {
        params,
    });

    const data = response.data?.data;
    const movies = data?.movies || [];
    const totalResults = data?.movie_count || 0;
    const totalPages = Math.ceil(totalResults / limit);
    const currentPage = data?.page_number || page;

    return { movies, totalPages, currentPage };
};
