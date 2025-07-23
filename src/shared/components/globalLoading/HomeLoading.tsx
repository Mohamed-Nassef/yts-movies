import { Grid, Box, Skeleton } from '@mui/material';
//import MovieCardSkeleton from './MovieCardSkeleton';

const LoadingGrid = ({ count = 8 }: { count?: number }) => {
    return (
        <Grid container spacing={2}>
            {Array.from({ length: count }).map((_, index) => (
                <Grid display="flex" justifyContent="center" alignItems="center" size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                    <Box
                        sx={{
                            width: '80%',
                            borderRadius: 2,
                            overflow: 'hidden',
                            backgroundColor: '#1e1e1e',
                        }}
                    >
                        <Skeleton variant="rectangular" width="100%" height={300} animation="wave" />
                        <Box sx={{ p: 1 }}>
                            <Skeleton variant="text" width="80%" height={24} animation="wave" />
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default LoadingGrid;
