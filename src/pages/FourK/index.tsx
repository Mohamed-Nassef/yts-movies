import { useState } from 'react';
import { useSearch } from '../ browseMovies/actions/useSearch';
import MovieList from '../ browseMovies/components/movelist/MoveList';
import PaginationBar from '../../shared/components/paginationBar/PaginationBar';
import BrowseSearchLoading from '../../shared/components/globalLoading/BrowseSearchLoading';
import { Typography } from '@mui/material';

const FourK = () => {
    const [page, setPage] = useState(1);

    const { data, isLoading } = useSearch({
        quality: '2160p',
        sort_by: 'date_added',
        order_by: 'desc',
        limit: 20,
        page,
    });

    return (
        <>
            <Typography style={{ color: '#f50057', fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>🎬 4K Movies</Typography>

            <PaginationBar
                currentPage={data?.currentPage || page}
                totalPages={data?.totalPages}
                onChange={(newPage: number) => setPage(newPage)}
            />

            {isLoading ? (
                <BrowseSearchLoading />
            ) : (
                <MovieList movies={data?.movies || []} />
            )}

            <PaginationBar
                currentPage={data?.currentPage || page}
                totalPages={data?.totalPages}
                onChange={(newPage: number) => setPage(newPage)}
            />
        </>
    );
};

export default FourK;
