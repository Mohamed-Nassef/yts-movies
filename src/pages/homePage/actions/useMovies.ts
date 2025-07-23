import { useState, useEffect } from 'react';
import { fetchMovies } from '../api/fetchMovies';
import type { Movie, FetchMoviesParams } from '../types/MovieCard';

export const useMovies = ({ sort_by, limit = 8, order_by = 'desc' }: FetchMoviesParams) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const getMovies = async () => {
        setLoading(true);
        setError(null);

        try {
            const data = await fetchMovies({ sort_by, limit, order_by });
            setMovies(data);
        } catch (err) {
            setError(`Failed to fetch movies ${sort_by}`);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, [sort_by]);

    return { movies, loading, error };
};
