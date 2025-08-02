// File: src/pages/ai-search/AiThinking.tsx

import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import video from '../../../../public/ai-loading.mp4'
const phrases = [
    'Thinking...',
    'Analyzing your prompt...',
    'Filtering best results...',
    'Almost done...',
];


const AiThinking = () => {
    const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhrase((prev) => {
                const index = phrases.indexOf(prev);
                return phrases[(index + 1) % phrases.length];
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt={6}
            sx={{ width: '100%', maxWidth: 400 }}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    width: '100%',
                    maxHeight: '300px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    boxShadow: '0 0 40px rgba(0,0,0,0.3)',
                }}
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <Typography color="primary" fontSize={18} mt={2}>
                {currentPhrase}
            </Typography>
        </Box>
    );
};

export default AiThinking;
