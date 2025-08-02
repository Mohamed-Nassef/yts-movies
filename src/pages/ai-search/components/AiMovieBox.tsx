// File: src/pages/ai-search/AiMovieBox.tsx

import { Box, Typography, Button } from '@mui/material';
import type { Movie } from '../../homePage/types/MovieCard';
import { useNavigate } from 'react-router-dom';
import noPster from '../../../assets/noposter.svg'

interface Props {
    movie: Movie;
}

const AiMovieBox = ({ movie }: Props) => {
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
                p: 3,
                borderRadius: 2,
                backgroundColor: '#1a1a1a',
                boxShadow: '0 0 20px rgba(0,0,0,0.3)',
            }}
        >
            {/* Left: Image + Info */}
            <Box flex={1} display="flex" gap={2}>
                <img
                    src={movie.large_cover_image || noPster}
                    alt={movie.title}
                    style={{
                        width: 120,
                        height: 180,
                        objectFit: 'cover',
                        borderRadius: 6,
                        boxShadow: '0 0 10px rgba(0,0,0,0.4)',
                    }}

                />

                <Box>
                    <Typography variant="h6" color="white">
                        {movie.title} ({movie.year})
                    </Typography>

                    <Typography variant="body2" color="#ccc" mt={1}>
                        <strong>Genres:</strong> {movie.genres.join(', ')}
                    </Typography>

                    <Typography variant="body2" color="#ccc">
                        <strong>Language:</strong> {movie.language}
                    </Typography>

                    <Typography variant="body2" color="#ccc">
                        <strong>Runtime:</strong> {movie.runtime} min
                    </Typography>

                    <Typography variant="body2" color="#aaa" mt={1}>
                        <strong>IMDb Rating:</strong> {movie.rating}/10
                    </Typography>
                </Box>
            </Box>

            {/* Right: Actions */}
            <Box display="flex" flexDirection="column" justifyContent="center" gap={1}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDetailsClick}
                >
                    Details
                </Button>

                <Button
                    variant="outlined"
                    color="warning"
                    href={`https://www.imdb.com/title/${movie.imdb_code}`}
                    target="_blank"
                    disabled={!movie.imdb_code}
                >
                    IMDb
                </Button>
            </Box>
        </Box>
    );
};

export default AiMovieBox;
