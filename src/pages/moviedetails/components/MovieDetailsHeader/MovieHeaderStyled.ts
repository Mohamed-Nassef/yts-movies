import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const ContainerBox = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
}));

export const PosterImage = styled('img')(({ theme }) => ({
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    objectFit: 'cover',
    display: 'block',
}));

export const MovieImage = styled('img')(({ theme }) => ({
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    display: 'block',
}));
