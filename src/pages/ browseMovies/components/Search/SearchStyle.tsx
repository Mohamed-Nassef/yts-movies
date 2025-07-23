import { styled } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';

export const SearchContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    margin: '0 auto',
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    transition: 'all 0.3s ease',
    '& .MuiInputBase-input': {
        color: theme.palette.text.primary,
    },
    '& .MuiInputLabel-root': {
        color: theme.palette.text.secondary,
    },
    '&:hover': {
        borderColor: theme.palette.primary.main,
    },
}));

export const StyledSelect = styled(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    transition: 'all 0.3s ease',
    '& .MuiSelect-select': {
        color: theme.palette.text.primary,
    },
    '& .MuiInputLabel-root': {
        color: theme.palette.text.secondary,
    },
    '&:hover': {
        borderColor: theme.palette.primary.main,
    },
}));
