import { Box, TextField, IconButton, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

type Props = {
    prompt: string;
    setPrompt: (val: string) => void;
    loading: boolean;
    handleSubmit: () => void;
    handleKeyDown: (e: React.KeyboardEvent) => void;
};

export default function AiSearchInput({ prompt, setPrompt, loading, handleSubmit, handleKeyDown }: Props) {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                py: 2,
                px: 2,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 700,
                    mx: 'auto',
                    backgroundColor: 'background.paper',
                    borderRadius: 1,
                    px: 2,
                    py: 1,
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: `
            0 0 8px #89c40344,
            0 0 16px #89c40322,
            0 0 32px #89c40311
          `,
                }}
            >
                <TextField
                    fullWidth
                    placeholder="Describe the movie..."
                    variant="standard"
                    multiline
                    minRows={3}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={handleKeyDown}
                    InputProps={{ disableUnderline: true }}
                    sx={{
                        color: 'text.primary',
                        backgroundColor: 'background.paper',
                        borderRadius: 2,
                        px: 1,
                    }}
                />
                <IconButton
                    onClick={handleSubmit}
                    disabled={!prompt.trim() || loading}
                >
                    {loading ? <CircularProgress size={20} color="primary" /> : <SendIcon sx={{ color: 'primary.main' }} />}
                </IconButton>
            </Box>
        </Box>
    );
}
