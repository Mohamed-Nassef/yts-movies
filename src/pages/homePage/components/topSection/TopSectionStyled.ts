import { styled } from '@mui/material/styles';
import { Box, Typography, Link } from '@mui/material';

export const StyledSection = styled(Box)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    textAlign: 'center',
    padding: theme.spacing(1, 0),
}));

export const Title = styled(Typography)(({ theme }) => ({
    ...theme.typography.h1,
    marginBottom: theme.spacing(2),
    fontWeight: 700,
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.text.secondary,
    maxWidth: 800,
    margin: '0 auto',
}));

export const ImportantText = styled(Typography)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.info.main,
    fontWeight: 'bold',
    margin: theme.spacing(2, 0),
}));

export const LinksContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(3),
}));

export const IconLink = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
    color: theme.palette.info.main,
    textDecoration: 'none',
    fontSize: '0.875rem',
    '&:hover': {
        textDecoration: 'underline',
    },
}));

export const DownloadsRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(5),
    marginTop: theme.spacing(2),
    fontWeight: 600,
    borderBottom: `2px solid ${theme.palette.divider}`,
    paddingBottom: theme.spacing(1),
}));
