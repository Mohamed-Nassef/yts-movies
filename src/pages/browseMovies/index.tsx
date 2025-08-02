import { useState, } from 'react';
import Search from './components/Search';
import { useSearch } from './actions/useSearch';
import MovieList from '../../shared/components/movelist/MoveList';
import PaginationBar from '../../shared/components/paginationBar/PaginationBar';
import BrowseSearchLoading from '../../shared/components/globalLoading/BrowseSearchLoading';
import type { FiltersType } from './typs/FetchSearchTypes'
import { Typography } from '@mui/material';

const initialFilters: FiltersType = {
    search: '',
    quality: 'all',
    genre: 'all',
    rating: 'all',
    year: 'all',
    language: 'all',
    sort_by: 'latest',
};


const BrowseMovies = () => {


    const [filters, setFilters] = useState<FiltersType>(initialFilters);
    const [page, setPage] = useState(1);


    const { data, isLoading, isFetching } = useSearch({
        ...filters,
        order_by: 'desc',
        limit: 20,
        page,
    });

    const handleSubmit = (newFilters: FiltersType) => {
        setFilters(newFilters);
        setPage(1);
    };
    //console.log(isLoading , isFetching);


    return (
        <>
            <Search onSubmit={handleSubmit} />

            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main', textAlign: 'center', mt: 4 }}>
                {filters.quality} quality , {filters.genre} genre Movies sorted by {filters.sort_by} made by Nassef
            </Typography>
            {isFetching || isLoading ? (<BrowseSearchLoading />) : (
                <>

                    <MovieList movies={data?.movies || []} />
                    <PaginationBar
                        currentPage={data?.currentPage || page}
                        totalPages={data?.totalPages}
                        onChange={(newPage: number) => {
                            setPage(newPage);
                            setTimeout(() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }, 500);
                        }}
                    />

                </>)}

        </>
    );
};

export default BrowseMovies;
