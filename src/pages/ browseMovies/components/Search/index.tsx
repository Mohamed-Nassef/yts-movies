import { Controller, useForm } from 'react-hook-form';
import { Grid, Button, MenuItem } from '@mui/material';
import {
    SearchContainer,
    StyledTextField,
    StyledSelect,
} from './SearchStyle';

import {
    genres,
    languages,
    orders,
    qualities,
    ratings,
    years,
} from '../../data/searchOptions';

import type { FiltersType } from '../../typs/FetchSearchTypes';

interface SearchProps {
    onSubmit: (filters: FiltersType) => void;
}

const Search = ({ onSubmit }: SearchProps) => {
    const { handleSubmit, control } = useForm<FiltersType>({
        defaultValues: {
            search: '',
            quality: 'all',
            genre: 'all',
            rating: 'all',
            year: 'all',
            language: 'all',
            sort_by: 'latest',
        },
    });

    const onSubmitForm = (data: FiltersType) => {
        onSubmit(data);
    };

    const filterConfigs = [
        { name: 'quality', label: 'Quality', options: qualities },
        { name: 'genre', label: 'Genre', options: genres },
        { name: 'rating', label: 'Rating', options: ratings },
        { name: 'year', label: 'Year', options: years },
        { name: 'language', label: 'Language', options: languages },
        { name: 'sort_by', label: 'Order By', options: orders },
    ];

    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <SearchContainer>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12 }}>
                        <Controller
                            name="search"
                            control={control}
                            render={({ field }) => (
                                <StyledTextField
                                    fullWidth
                                    label="Search Term"
                                    variant="outlined"
                                    {...field}
                                    onKeyDown={(e) => {
                                        e.key === 'Enter' && handleSubmit(onSubmitForm)();
                                    }}
                                />
                            )}
                        />
                    </Grid>

                    {filterConfigs.map((filter) => (
                        <Grid size={{ xs: 6, sm: 4, md: 2 }} key={filter.name}>
                            <Controller
                                name={filter.name as keyof FiltersType}
                                control={control}
                                render={({ field }) => (
                                    <StyledSelect
                                        fullWidth
                                        select
                                        label={filter.label}
                                        variant="outlined"
                                        {...field}
                                    >
                                        {filter.options.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </StyledSelect>
                                )}
                            />
                        </Grid>
                    ))}

                    <Grid size={{ xs: 12 }} >
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2 }}
                        >
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </SearchContainer>
        </form>
    );
};

export default Search;
