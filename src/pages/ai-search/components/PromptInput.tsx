import { Box, TextField, IconButton, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';

interface Props {
    prompt: string;
    setPrompt: (v: string) => void;
    handleSubmit: () => void;
    loading: boolean;
}

const FixedPromptWrapper = styled(Box)({
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '16px',
});

const PromptInputBox = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: 700,
    marginInline: 'auto',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    padding: '8px 16px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: `
        0 0 8px #89c40344,
        0 0 16px #89c40322,
        0 0 32px #89c40311
    `,
}));

const PromptInput = ({ prompt, setPrompt, handleSubmit, loading }: Props) => {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <FixedPromptWrapper>
            <PromptInputBox>
                <TextField
                    fullWidth
                    variant="standard"
                    multiline
                    minRows={3}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Describe the movie..."
                    InputProps={{ disableUnderline: true }}
                    sx={{ color: 'text.primary' }}
                />
                <IconButton
                    onClick={handleSubmit}
                    disabled={!prompt.trim() || loading}
                >
                    {loading ? (
                        <CircularProgress size={20} color="primary" />
                    ) : (
                        <SendIcon sx={{ color: 'primary.main' }} />
                    )}
                </IconButton>
            </PromptInputBox>
        </FixedPromptWrapper>
    );
};

export default PromptInput;
