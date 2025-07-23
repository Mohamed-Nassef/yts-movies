import { useParams } from 'react-router-dom';
import { useMovieDetails } from './actions/useMovieDetails';
import { useSimilarMovies } from './actions/useSimilarMovies';
import MovieDetailsHeader from './components/MovieDetailsHeader';
import { Box, CircularProgress, Typography } from '@mui/material';
import ScreenshotsSection from './components/ScreenShoots';
import SummaryCast from './components/summaryCast';
import TechSpecsSection from './components/TechSpecsSection';
import CommentsSection from './components/comentsSection';

const MovieDetails = () => {
    const { id } = useParams();
    const movieId = Number(id);

    const { data, isLoading } = useMovieDetails(movieId);
    const { data: similar } = useSimilarMovies(movieId);

    // console.log(data);




    return (
        <Box>
            {isLoading && (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                    <CircularProgress color="primary" />
                </Box>
            )}
            {!isLoading && (!data || !data.movie || !data.movie.torrents) && (
                <Box sx={{ textAlign: 'center', py: 4 ,backgroundColor: '#1e1e1e', borderRadius: 3,height:'70vh', display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Typography variant="h4" sx={{ mb: 3, color: 'primary.main', textAlign: 'center' }}>Movie not found</Typography>
                </Box>
            )}
            {!isLoading && data && data?.movie && data?.movie.torrents && (
                <>
                    <MovieDetailsHeader movie={data.movie} similar={similar || []} />

                    <ScreenshotsSection
                        ytTrailerCode={data.movie.yt_trailer_code}
                        screenshots={[
                            data.movie.large_screenshot_image1,
                            data.movie.large_screenshot_image2,
                            data.movie.large_screenshot_image3,
                        ]}
                    />
                    <SummaryCast
                        description={data.movie.description_full}
                        cast={data.movie.cast}
                    />
                    <TechSpecsSection torrents={data.movie.torrents} />
                    <CommentsSection />
                </>
            )}
        </Box>
    );

};

export default MovieDetails;
