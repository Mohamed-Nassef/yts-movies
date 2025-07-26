import { Box, Pagination } from '@mui/material';

interface Props {
    currentPage?: number;
    totalPages?: number;
    onChange: (page: number) => void;
}

const PaginationBar = ({ currentPage, totalPages, onChange }: Props) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, }}>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(_, value) => onChange(value)}
                color="primary"
                variant="outlined"
                shape="rounded"
                size='small'
            />
        </Box>
    );
};

export default PaginationBar;
