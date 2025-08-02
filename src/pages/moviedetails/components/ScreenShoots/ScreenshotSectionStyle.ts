import { Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SectionWrapper = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    backgroundColor: '#1e1e1e',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    textAlign: 'center',
}));

export const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
    textAlign: 'center',
    marginTop: theme.spacing(2),
}));

export const TrailerImageWrapper = styled(Box)(() => ({
    position: 'relative',
    minWidth: 200,
}));

export const ScreenshotImage = styled('img')(() => ({
    width: '90%',
    borderRadius: 4,
    objectFit: 'cover',
    ":hover": {
        opacity: 0.7
    }
}));

export const PlayButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: '40%',
    left: '40%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#fff',
    '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
}));

export const TrailerLabel = styled(Typography)(() => ({
    position: 'absolute',
    top: '65%',
    left: '41%',
    color: '#fff',
    fontWeight: 'bold',
}));
