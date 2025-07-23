import { styled, alpha, InputBase, Paper, ListItem, List, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.common.white}`,
    backgroundColor: alpha(theme.palette.common.white, 0.1),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.3),
        border: `1px solid ${theme.palette.primary.main}`,
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
        fontSize: '1.2rem',
    },
    '&:focus-within': {
        color: theme.palette.primary.main,
    },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 1),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: 400,
    transition: 'all 0.3s ease',
    paddingBottom: '4px',
    '&:hover': {
        color: theme.palette.text.primary,
    },
    '&.active': {
        color: theme.palette.primary.main,
        borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
}));

export const SearchDropdown = styled(Paper)(({ theme }) => ({
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    marginTop: 0,
    backgroundColor: '#1e1e1e',
    color: '#fff',
    zIndex: 10,
    borderRadius: theme.spacing(1),
}));

export const SearchDropdownList = styled(List)(() => ({
    padding: 0,
    margin: 0,
}));

export const SearchDropdownItem = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1.5, 2),
    color: '#fff',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease',
    borderBottom: '1px solid #333',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

export const AdvancedSearchItem = styled(ListItem)(({ theme }) => ({
    backgroundColor: '#0a5',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
    borderRadius: theme.spacing(1),
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    '&:hover': {
        backgroundColor: '#0c6',
    },
}));

export const SpinerSearch = styled(Box)(() => ({
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
}))