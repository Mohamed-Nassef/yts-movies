import { Box, Grid, Typography, Avatar, Divider, Stack } from '@mui/material';
import type { Cast } from '../../types/movieDetailsTypes';

interface Props {
    description: string;
    cast: Cast[];
}

const SummaryCast = ({ description, cast }: Props) => {
    return (
        <Box sx={{ backgroundColor: '#1e1e1e', borderRadius: 3, px: 4, py: 6, mt: 4 }}>
            <Grid container spacing={4}>
                {/* Plot summary */}
                <Grid size={{ xs: 12, md: 8 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#fff' }}>
                        Plot summary
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#aaa', lineHeight: 1.8 }}>
                        {description}
                    </Typography>
                </Grid>

                {/* Top cast only */}
                <Grid size={{ xs: 12, md: 4 }} >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff', mb: 2 }}>
                        Top cast
                    </Typography>

                    {cast.map((actor, idx) => (
                        <Box key={idx}>
                            <Stack direction="row" alignItems="center" spacing={2} sx={{ my: 1 }}>
                                <Avatar
                                    src={actor.url_small_image}
                                    alt={actor.name}
                                    sx={{ width: 40, height: 40 }}
                                />
                                <Typography variant="body1" sx={{ color: '#aaa' }}>
                                    <strong>{actor.name}</strong> as <span style={{ fontStyle: 'italic', fontWeight: 'bold', color: '#fff' }}>{actor.character_name}</span>
                                </Typography>
                            </Stack>
                            <Divider sx={{ borderColor: '#444' }} />
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default SummaryCast;
