import { Box, Dialog } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useState } from 'react';
import {
    SectionWrapper,
    TrailerImageWrapper,
    ScreenshotImage,
    PlayButton,
    TrailerLabel,
} from './ScreenshotSectionStyle';

interface Props {
    ytTrailerCode: string;
    screenshots: string[];
}

const ScreenshotsSection = ({ ytTrailerCode, screenshots }: Props) => {
    const [videoOpen, setVideoOpen] = useState(false);
    const [imageOpen, setImageOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleVideoOpen = (e: React.MouseEvent) => {
        e.stopPropagation();
        setVideoOpen(true);
    };

    const handleImageOpen = (src: string) => {
        setSelectedImage(src);
        setImageOpen(true);
    };

    const handleClose = () => {
        setVideoOpen(false);
        setImageOpen(false);
        setSelectedImage(null);
    };

    return (
        <SectionWrapper>
            <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto' }}>
                {/* Trailer Image */}
                <TrailerImageWrapper>
                    <ScreenshotImage src={screenshots[0]} alt="Trailer" onClick={handleVideoOpen} />
                    <PlayButton onClick={handleVideoOpen}>
                        <PlayCircleOutlineIcon fontSize="large" />
                    </PlayButton>
                    <TrailerLabel variant="body2">Trailer</TrailerLabel>
                </TrailerImageWrapper>

                {/* Other Screenshots */}
                {screenshots.slice(1).map((shot, index) => (
                    <Box key={index} sx={{ minWidth: 200 }}>
                        <ScreenshotImage
                            src={shot}
                            alt={`Screenshot ${index}`}
                            onClick={() => handleImageOpen(shot)}
                            style={{ cursor: 'pointer' }}
                        />
                    </Box>
                ))}
            </Box>

            {/* YouTube Dialog */}
            <Dialog open={videoOpen} onClose={handleClose} maxWidth="md" fullWidth>
                <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                    <iframe
                        src={`https://www.youtube.com/embed/${ytTrailerCode}`}
                        title="YouTube Trailer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 0,
                        }}
                    />
                </Box>
            </Dialog>

            {/* Image Dialog */}
            <Dialog open={imageOpen} onClose={handleClose} maxWidth="md" fullWidth>
                {selectedImage && (
                    <Box sx={{ width: '100%' }}>
                        <img
                            src={selectedImage}
                            alt="Screenshot"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                borderRadius: 8,
                            }}
                        />
                    </Box>
                )}
            </Dialog>
        </SectionWrapper>
    );
};

export default ScreenshotsSection;
