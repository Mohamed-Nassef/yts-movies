import type { SxProps, Theme } from '@mui/material';

export const wrapperStyles: SxProps<Theme> = {
    height: '85vh',
    backgroundColor: '#0f0f0f',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    p: 3,
};

export const numberStyles: SxProps<Theme> = {
    fontSize: { xs: '6rem', md: '10rem' },
    fontWeight: 'bold',
    color: '#89c403',
    mb: 2,
};

export const textWrapperStyles: SxProps<Theme> = {
    textAlign: 'center',
};

export const buttonStyles: SxProps<Theme> = {
    borderRadius: '999px',
    textTransform: 'none',
    px: 4,
    py: 1.5,
    fontWeight: 'bold',
    fontSize: '1rem',
};
