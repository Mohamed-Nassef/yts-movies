import { Grid, Typography, Chip, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import type { MovieDetails, SimilarMovie } from '../../types/movieDetailsTypes';
import Nopster from '../../../../assets/noposter.svg';
import { PosterImage, MovieImage, ContainerBox } from './MovieHeaderStyled';


interface Props {
    movie: MovieDetails;
    similar: SimilarMovie[];
}

const MovieDetailsHeader = ({ movie, similar }: Props) => {
    const {
        title,
        year,
        genres,
        like_count,
        rating,
        large_cover_image,
        torrents,
    } = movie;

    return (
        <ContainerBox container spacing={2} sx={{ backgroundColor: '#1e1e1e', borderRadius: 3, p: 3, mb: 4 }}>
            {/* Movie Info */}
            <Grid size={{ xs: 12, md: 9 }} >
                <Grid container spacing={3}>
                    {/* Poster */}
                    <Grid size={{ xs: 12, sm: 4 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <PosterImage
                            onError={(e) => (e.currentTarget.src = Nopster)}
                            src={large_cover_image}
                            alt={title}
                        />
                    </Grid>

                    {/* Details */}
                    <Grid size={{ xs: 12, sm: 8 }}>
                        <Typography variant="h4" color="primary" fontWeight="bold" sx={{ mb: 0 }}>
                            {title}
                        </Typography>

                        <Typography variant="subtitle1" sx={{ mb: 4, color: 'text.secondary' }}>
                            {year}
                        </Typography>

                        {/* Genres */}
                        <Typography sx={{ mb: 1, color: 'text.secondary' }}>Genres:</Typography>
                        <Stack direction="row" sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
                            {genres.map((genre) => (
                                <Chip key={genre} label={genre} color="secondary" variant="outlined" />
                            ))}
                        </Stack>

                        {/* Quality */}
                        <Typography sx={{ mb: 1, color: 'text.secondary' }}>Available in:</Typography>
                        <Stack direction="row" sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
                            {torrents.map((torrent) => (
                                <Chip
                                    key={torrent.hash}
                                    label={torrent.quality + '.' + torrent.type.toUpperCase()}
                                    variant="outlined"
                                    sx={{ color: '#89c403', borderColor: '#89c403' }}
                                />
                            ))}
                        </Stack>

                        {/* Like & Rating */}
                        <Stack direction="column" spacing={2} sx={{ mb: 4, mt: 2 }}>
                            <Typography>❤️ {like_count}</Typography>
                            <Typography>⭐ IMDb: {rating}/10</Typography>
                        </Stack>

                        {/* Download Button */}
                        <Button
                            variant="contained"
                            color="success"
                            href={torrents[0]?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ px: 4, py: 1 }}
                        >
                            Download
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            {/* Similar Movies */}
            <Grid size={{ xs: 12, md: 3 }} >
                <Typography variant="h6" color="primary" textAlign={'center'} fontWeight="bold" sx={{ mb: 2 }}>
                    Similar Movies
                </Typography>
                <Grid container spacing={2}>
                    {similar.map((movie) => (
                        <Grid size={{ xs: 3, md: 6 }} key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                <MovieImage src={movie.medium_cover_image} alt={movie.title} />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </ContainerBox>
    );
};

export default MovieDetailsHeader;
