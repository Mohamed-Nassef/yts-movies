import axios from 'axios';

export interface Movie {
    id: number;
    title: string;
    year: number;
    small_cover_image: string;
}

interface SearchResponse {
    data: {
        movies: Movie[];
    };
}


export const fetchSearchMovies = async (query: string): Promise<Movie[]> => {
    const response = await axios.get<SearchResponse>('https://yts.mx/api/v2/list_movies.json', {
        params: { query_term: query, limit: 4 },
    });

    return response.data.data.movies || [];
};
