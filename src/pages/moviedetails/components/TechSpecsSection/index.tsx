import {
    Box,
    Typography,
    Tab,
    Tabs,
    Grid,
    Button,

} from '@mui/material';
import { useState } from 'react';
import StorageIcon from '@mui/icons-material/Storage';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MovieIcon from '@mui/icons-material/Movie';
import DownloadIcon from '@mui/icons-material/Download';
import type { Torrent } from '../../types/movieDetailsTypes';

interface Props {
    torrents: Torrent[];
}

const TechSpecsSection = ({ torrents }: Props) => {
    const [tab, setTab] = useState(0);

    const handleTabChange = (_: any, newValue: number) => {
        setTab(newValue);
    };

    const current = torrents[tab];

    return (
        <Box sx={{ backgroundColor: '#1e1e1e', borderRadius: 3, px: 3, py: 4, mt: 4 }}>
            <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
                Tech specs
            </Typography>

            <Tabs
                value={tab}
                onChange={handleTabChange}
                textColor="inherit"
                indicatorColor="primary"
                sx={{ mb: 3 }}
            >
                {torrents.map((torrent) => (
                    <Tab
                        key={torrent.hash}
                        label={`${torrent.quality}.${torrent.type.toUpperCase()}`}
                        sx={{ color: '#fff', textTransform: 'none' }}
                    />
                ))}
            </Tabs>

            <Grid container spacing={2} sx={{backgroundColor: '#0d0a0a54',padding: 4, borderRadius: 2}}>
                <Grid size={{ xs: 12, sm: 6, md: 4 }} >
                    <Box display="flex" alignItems="center" gap={1}>
                        <StorageIcon color="action" />
                        <Typography sx={{ color: '#ccc' }}>{current.size}</Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box display="flex" alignItems="center" gap={1}>
                        <CropSquareIcon color="action" />
                        <Typography sx={{ color: '#ccc' }}>{current.quality || '1280x720'}</Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box display="flex" alignItems="center" gap={1}>
                        <MovieIcon color="action" />
                        <Typography sx={{ color: '#ccc' }}>
                            {current.type}
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box display="flex" alignItems="center" gap={1}>

                        <Button href={current.url} variant="contained" color="primary" size="small">
                            <DownloadIcon color="action" />
                        </Button>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box display="flex" alignItems="center" gap={1}>
                        <VisibilityIcon color="action" />
                        <Typography sx={{ color: '#ccc' }}>{current.seeds}</Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box display="flex" alignItems="center" gap={1}>
                        <Typography sx={{ color: '#ccc' }}>
                            {current.peers} peers
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TechSpecsSection;
