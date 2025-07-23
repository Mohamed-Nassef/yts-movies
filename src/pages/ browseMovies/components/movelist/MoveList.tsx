import { Grid, Box } from '@mui/material';
import type { Movie } from '../../../homePage/types/MovieCard';
import MovieCard from '../../../../shared/components/moviecard';



const MovieList = ({ movies }: { movies: Movie[] }) => {

    return (
        <Box sx={{ px: 3, py: 4, backgroundColor: '#1e1e1e', borderRadius: 3, mb: 4, mt: 4 }
        }>
            <Grid container spacing={4} sx={{ py: 4 }}>
                {movies.map((movie) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={movie.id}>
                        <MovieCard movie={movie} />
                    </Grid>
                ))}
            </Grid>
        </Box>

    );
};

export default MovieList;
