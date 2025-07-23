import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { wrapperStyles, numberStyles, buttonStyles } from './NotFoundStyle';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            sx={wrapperStyles}
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
            >
                <Typography variant="h1" sx={numberStyles}>
                    404
                </Typography>
            </motion.div>

            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                style={{ textAlign: 'center' }}
            >
                <Typography variant="h4" sx={{ mb: 1 }}>
                    Oops! Page not found
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, maxWidth: 480 }}>
                    The page you're looking for might have been removed or is temporarily unavailable.
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => navigate('/')}
                    sx={buttonStyles}
                >
                    Go Home
                </Button>
            </motion.div>
        </Box>
    );
};

export default NotFound;
