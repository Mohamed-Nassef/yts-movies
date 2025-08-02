import { Box, Typography, Alert, Stack } from '@mui/material';
import AiMovieBox from './components/AiMovieBox';
import AiThinking from './components/AiThinking';
import AiSearchInput from './components/AiSearchInput';
import { useAiSearchLogic } from './action/useAiSearchLogic';
import { useInfiniteScroll } from './action/useInfiniteScroll';
import { pulseContainer } from './aiSearchStyle';
import { motion } from 'framer-motion';

const AiSearchPage = () => {
    const {
        prompt,
        setPrompt,
        filters,
        data,
        error,
        submitted,
        loading,
        visibleMovies,
        setVisibleMovies,
        handleSubmit,
        handleKeyDown,
    } = useAiSearchLogic();

    useInfiniteScroll({ data, visibleMovies, setVisibleMovies });

    return (
        <Box sx={pulseContainer}>
            <Typography variant="h2" color="text.primary" fontWeight={600} textAlign="center" mb={1}>
                What do you want to watch?
            </Typography>

            <Typography variant="body2" color="primary.main" textAlign="center" mb={4}>
                AI will convert your idea into filters and find the best movies 🎬
            </Typography>

            {error && (
                <Alert severity="error" sx={{ mb: 2, maxWidth: 700, mx: 'auto' }}>
                    {error}
                </Alert>
            )}

            {submitted && loading && (
                <Box mt={2} sx={{ maxWidth: 700, mx: 'auto' }}>
                    <AiThinking />
                </Box>
            )}

            {filters && data && (
                <Stack spacing={1} mt={2} width="100%" maxWidth="900px" mx="auto">
                    {visibleMovies.map((movie, index) => (
                        <motion.div
                            key={movie.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 1, duration: 0.5 }}
                        >
                            <AiMovieBox movie={movie} />
                        </motion.div>
                    ))}
                </Stack>
            )}

            {visibleMovies.length === data?.movies?.length && !loading && (
                <Typography color="text.secondary" textAlign="center" mt={2}>
                    No more results to show 🎬
                </Typography>
            )}

            <AiSearchInput
                prompt={prompt}
                setPrompt={setPrompt}
                loading={loading}
                handleSubmit={handleSubmit}
                handleKeyDown={handleKeyDown}
            />
        </Box>
    );
};

export default AiSearchPage;

