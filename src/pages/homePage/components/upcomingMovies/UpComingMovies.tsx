import { Box, Grid, Typography } from '@mui/material';
import MovieCard from '../../../../shared/components/moviecard';
import { useUpcomingMovies } from '../../actions/useUpcomingMovies';
import LoadingGrid from '../../../../shared/components/globalLoading/HomeLoading';

const UpComingMovies = () => {
    const { data: movies = [], isLoading, isError, error } = useUpcomingMovies();

    return (
        <Box sx={{ px: 3, py: 4, backgroundColor: '#1e1e1e', borderRadius: 3, mb: 4 }
        }>
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main', textAlign: 'center' }}>
                Upcoming YIFY Movies
            </Typography>
            {isError && <Typography variant="body1" sx={{ mb: 3, color: 'primary.main', textAlign: 'center' }}>
                {error.message}
            </Typography>}
            {
                isLoading ? <LoadingGrid /> : (<Grid container spacing={2}>
                    {
                        movies.map((movie) => (
                            <Grid display="flex" justifyContent="center" alignItems="center" size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={movie.id} >
                                <MovieCard movie={movie} />
                            </Grid>
                        ))
                    }
                </Grid>)}

        </Box>

    );
};

export default UpComingMovies;
