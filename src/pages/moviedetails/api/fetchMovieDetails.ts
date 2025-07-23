import axios from 'axios';
import type { MovieDetailsResponse } from '../types/movieDetailsTypes';

export const fetchMovieDetails = async (movieId: number): Promise<MovieDetailsResponse> => {
    const response = await axios.get('https://yts.mx/api/v2/movie_details.json', {
        params: {
            movie_id: movieId,
            with_images: true,
            with_cast: true,
        },
    });

    return response.data.data; 
};
