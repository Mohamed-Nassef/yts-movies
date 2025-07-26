import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    ListItemAvatar,
    Avatar,
    ListItemText,
    IconButton,
    Menu,
    MenuItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-YTS.svg';
import {
    Search,
    SearchIconWrapper,
    StyledInputBase,
    StyledNavLink,
    SearchDropdown,
    SearchDropdownList,
    SearchDropdownItem,
    AdvancedSearchItem,
    SpinerSearch
} from './HeaderStyles';
import { useState, useEffect, useRef, useCallback } from 'react';
import { debounce  } from 'lodash';
import { useSearchMovies } from './actions/useSearchMovies';
import { CircularProgress } from '@mui/material';
//import { useDebouncedValue } from './actions/useDebouncedValue';


export default function Header() {

    const [searchTerm, setSearchTerm] = useState(''); // State to store the search term
    //const debouncedSearchTerm = useDebouncedValue(searchTerm, 500); // Debounced search term
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false); // State to control the visibility of the dropdown in the search bar
    const searchRef = useRef<HTMLDivElement>(null);

    // State to store the anchor element for the menu fo mobile view
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const debounceInput = useCallback(
        debounce((value: string) => {
            setDebouncedSearchTerm(value);
        }, 500),
        []
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        debounceInput(value);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            debounceInput.cancel();
        };
    }, [debounceInput]);

    // Use the useSearchMovies hook to fetch search results (api call)
    const { data: searchResults = [], isLoading } = useSearchMovies(debouncedSearchTerm);

    return (
        <AppBar position="fixed" color="transparent" elevation={0}>
            <Toolbar sx={{ justifyContent: 'space-between', position: 'relative' }}>
                {/* Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/">
                        <Box
                            component="img"
                            src={logo}
                            alt="YTS Logo"
                            sx={{
                                height: { xs: '20px', sm: '30px', md: '35px', lg: '40px' },
                            }}></Box>
                    </Link>
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            ml: 2,
                            display: { xs: 'none', lg: 'block' },
                        }}
                    >
                        HD movies at the smallest file size.
                    </Typography>
                </Box>



                {/* Search Input */}
                <Box sx={{
                    position: 'relative',
                    minWidth: '150px',
                    maxWidth: '300px',
                    flexGrow: 1,
                    mx: 2
                }} ref={searchRef}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Quick search"
                            value={searchTerm}
                            onChange={handleChange}
                            onFocus={() => setShowDropdown(true)}
                        />
                        {isLoading && (
                            <SpinerSearch>
                                <CircularProgress size={20} thickness={4} />
                            </SpinerSearch>
                        )}
                    </Search>

                    {/* Search Dropdown */}
                    {showDropdown && searchResults.length > 0 && (
                        <SearchDropdown>
                            <SearchDropdownList>
                                {searchResults.map((movie) => (
                                    <SearchDropdownItem
                                        to={`/movie/${movie.id}`}
                                        key={movie.id}
                                        onClick={() => {
                                            setShowDropdown(false);
                                            setSearchTerm('');
                                        }}
                                    >
                                        <ListItemAvatar>
                                            <Avatar
                                                variant="square"
                                                src={movie.small_cover_image}
                                                alt={movie.title}
                                                sx={{ width: 40, height: 60, mr: 1 }}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={movie.title}
                                            secondary={movie.year}
                                        />
                                    </SearchDropdownItem>

                                ))}

                                <AdvancedSearchItem onClick={() => setShowDropdown(false)}>
                                    <Link to={`/browse-movies`} style={{ textDecoration: 'none' }}>
                                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                            🔍 Advanced Search
                                        </Typography>
                                        <Typography variant="caption" sx={{ fontSize: { xs: '10px' }}} >
                                            Find more results and apply filters
                                        </Typography>
                                    </Link>
                                </AdvancedSearchItem>
                            </SearchDropdownList>
                        </SearchDropdown>
                    )}
                </Box>
                {/* Mobile Menu Button */}
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        color="primary"
                        onClick={handleMenuOpen}
                        size="large"
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
                {/* Navigation Links */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
                    <StyledNavLink to="/">Home</StyledNavLink>
                    <StyledNavLink to="/4k" sx={{ color: '#89c403' }}>4K</StyledNavLink>
                    <StyledNavLink to="/trending">Trending</StyledNavLink>
                    <StyledNavLink to="/browse-movies">Browse Movies</StyledNavLink>
                    <StyledNavLink to="/login">Login</StyledNavLink>
                    <span style={{ color: '#777' }}>|</span>
                    <StyledNavLink to="/register">Register</StyledNavLink>
                </Box>
            </Toolbar>

            {/* Mobile Menu */}
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                sx={{ mt: 1, }}
            >
                {[
                    { text: 'Home', path: '/' },
                    { text: '4K', path: '/4k' },
                    { text: 'Trending', path: '/trending' },
                    { text: 'Browse Movies', path: '/browse-movies' },
                    { text: 'Login', path: '/login' },
                    { text: 'Register', path: '/register' },
                ].map(({ text, path }) => (
                    <MenuItem
                        key={text}
                        component={Link}
                        to={path}
                        onClick={handleMenuClose}
                        sx={{ fontWeight: 'bold' }}
                    >
                        {text}
                    </MenuItem>
                ))}
            </Menu>


        </AppBar>
    );
}
