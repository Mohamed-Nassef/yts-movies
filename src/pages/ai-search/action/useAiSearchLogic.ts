import { useEffect, useState } from 'react';
import type { Movie } from '../../homePage/types/MovieCard';
import { getFiltersFromAI } from './getFiltersFromAI';
import { useSearch } from '../../browseMovies/actions/useSearch';

interface FiltersType {
    quality: string;
    genre: string;
    rating: string;
    sort_by: string;
}

export function useAiSearchLogic() {
    const [prompt, setPrompt] = useState('');
    const [filters, setFilters] = useState<FiltersType | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [visibleMovies, setVisibleMovies] = useState<Movie[]>([]);

    const { data, isLoading, isFetching } = useSearch({
        ...(filters || {}),
        sort_by: filters?.sort_by || 'latest',
        order_by: 'desc',
        limit: 20,
        page: 1,
    });

    const handleSubmit = async () => {
        if (!prompt.trim()) return;
        setLoading(true);
        setSubmitted(true);
        setError('');
        setFilters(null);
        setVisibleMovies([]);

        try {
            const result = await getFiltersFromAI(prompt);
            setFilters(result);
            setSubmitted(false);
            setPrompt('');
        } catch {
            setError('AI failed to understand your request. Please try again.');
        }

        setLoading(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    useEffect(() => {
        if (data?.movies?.length) {
            setVisibleMovies(data.movies.slice(0, 1));
        }
    }, [data]);

    return {
        prompt,
        setPrompt,
        filters,
        data,
        error,
        submitted,
        loading: isLoading || isFetching || loading,
        visibleMovies,
        setVisibleMovies,
        handleSubmit,
        handleKeyDown,
    };
}
