import { useEffect } from 'react';
import type { Movie } from '../../homePage/types/MovieCard';

export function useInfiniteScroll({
    data,
    visibleMovies,
    setVisibleMovies,
}: {
    data: { movies?: Movie[] } | undefined;
    visibleMovies: Movie[];
    setVisibleMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
}) {
    useEffect(() => {
        const handleScroll = () => {
            const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
            if (bottom && data?.movies && data.movies.length > visibleMovies.length) {
                setVisibleMovies(prev => data.movies!.slice(0, prev.length + 1));
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [visibleMovies, data, setVisibleMovies]);
}
