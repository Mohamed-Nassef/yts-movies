import axios from 'axios';
import type { SimilarMovie } from '../types/movieDetailsTypes';

export const fetchSimilarMovies = async (movieId: number): Promise<SimilarMovie[]> => {
    const response = await axios.get('https://yts.mx/api/v2/movie_suggestions.json', {
        params: { movie_id: movieId },
    });

    return response.data.data.movies.map((movie: any) => ({
        id: movie.id,
        medium_cover_image: movie.medium_cover_image,
        title: movie.title,
    }));
};
