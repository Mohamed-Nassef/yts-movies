import {
    CardContainer,
    CoverImage,
    Overlay,
    Info,
    Genres,
    Details,
    ImdbLink,
    TitleBelow,
    QualityBadge,
    FavoriteIconWrapper,
} from './MovieCardStyled';
import type { Movie } from '../../../pages/homePage/types/MovieCard';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Nopster from '../../../assets/noposter.svg';
import { Link } from 'react-router-dom';

interface Props {
    movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
    
    const bestquality = movie.torrents[movie.torrents.length - 1];
    //const firstTorrent = movie.torrents?.[bestquality - 1];


    return (
        <CardContainer>
            <Link style={{ textDecoration: 'none' }} to={`/movie/${movie.id}`}>
                <CoverImage onError={(e) => (e.currentTarget.src = Nopster)} src={movie.large_cover_image} alt={movie.title} loading="lazy" />


                {/* Favorite Icon */}
                <FavoriteIconWrapper>
                    <FavoriteBorderIcon fontSize="small" />
                </FavoriteIconWrapper>

                {/* Quality Badge */}
                {bestquality?.quality && <QualityBadge>{bestquality.quality}</QualityBadge>}

                {/* Hover Info */}
                <Overlay className="overlay">
                    <Info>
                        <Genres>{movie.genres.join(', ')}</Genres>
                        <Details>
                            <span style={{ fontWeight: 600, color: 'green' }}>{movie.year}</span>  • {movie.runtime ? `${movie.runtime} min` : 'N/A'}
                        </Details>
                        {movie.rating > 0 && (
                            <Details>
                                <StarIcon sx={{ fontSize: '0.8rem', color: '#f5c518' }} /> {movie.rating}
                            </Details>
                        )}
                        {movie.imdb_code && (
                            <ImdbLink
                                // href={`https://www.imdb.com/title/${movie.imdb_code}`}
                                rel="noopener noreferrer"
                                title="View on IMDb"
                                // onClick={handleClick}
                                onClick={(e) => {
                                    e.preventDefault();// Prevent the default link behavior
                                    window.open(`https://www.imdb.com/title/${movie.imdb_code}`, '_blank');
                                }}

                            >
                                View on IMDb
                            </ImdbLink>
                        )}
                    </Info>
                </Overlay>

                {/* Title */}
                <TitleBelow variant="subtitle1"> <span style={{ color: 'green' }}> [ {movie.language} ]  </span>{movie.title}</TitleBelow>
            </Link>
        </CardContainer>
    );
};

export default MovieCard;
