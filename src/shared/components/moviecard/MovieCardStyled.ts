import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

export const CardContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    margin: theme.spacing(2),
    width: '80%',
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
        '& .overlay': {
            opacity: 1,
            transform: 'translateY(0)',
        },
    },
}));

export const CoverImage = styled('img')({
    width: '100%',
    height: '300px',
    objectFit: 'inherit',
    transition: 'transform 0.4s ease',
});
export const FavoriteIconWrapper = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 3,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: '50%',
    lineHeight: 0,
    padding: theme.spacing(0.5),
    transition: 'all 0.3s',
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: '#000',
    },
}));
export const QualityBadge = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: theme.palette.primary.main,
    color: '#000',
    fontWeight: 600,
    fontSize: '0.75rem',
    padding: theme.spacing(0.5, 1),
    borderRadius: 4,
    zIndex: 3,    
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    }
}));
export const Overlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.75)',
    color: '#fff',
    padding: theme.spacing(2),
    opacity: 0,
    transform: 'translateY(20%)',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    zIndex: 2,
}));

export const Info = styled(Box)({
    textAlign: 'center',
});

export const Genres = styled(Typography)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
}));

export const Details = styled(Typography)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
}));

export const ImdbLink = styled(Button)(({ theme }) => ({
    ...theme.typography.body2,
    color: '#f5c518',
    marginTop: theme.spacing(1),
    display: 'inline-block',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },

}));

export const TitleBelow = styled(Typography)(({ theme }) => ({
    ...theme.typography.subtitle1,
    fontWeight: 500,
    color: theme.palette.primary.main,
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 1),
    height: '40px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
}));




