// components/CommentsSection.tsx
import { Box, Typography, Avatar, TextField, Button, Divider, Stack } from '@mui/material';
import { useState } from 'react';

interface Comment {
    user: string;
    content: string;
    date: string;
}

const initialComments: Comment[] = [
    {
        user: 'Ali',
        content: 'Great movie! I loved the plot twists.',
        date: '2025-07-19',
    },
    {
        user: 'Sara',
        content: 'Cinematography was amazing!',
        date: '2025-07-18',
    },
];

const CommentsSection = () => {
    const [comments, setComments] = useState<Comment[]>(initialComments);
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        if (!newComment.trim()) return;
        const comment: Comment = {
            user: 'Anonymous',
            content: newComment,
            date: new Date().toISOString().split('T')[0],
        };
        setComments([comment, ...comments]);
        setNewComment('');
    };

    return (
        <Box sx={{ mt: 6, backgroundColor: '#1e1e1e', p: 3, borderRadius: 3 }}>
            <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
                Comments
            </Typography>

            {/* Add new comment */}
            <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ mb: 3 }}>
                <Avatar sx={{ bgcolor: 'secondary.main' }}>A</Avatar>
                <Box sx={{ flex: 1 }}>
                    <TextField
                        fullWidth
                        multiline
                        minRows={2}
                        placeholder="Add a comment..."
                        variant="outlined"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        sx={{
                            bgcolor: '#2a2a2a',
                            borderRadius: 1,
                            '& .MuiOutlinedInput-root': {
                                color: '#fff',
                            },
                        }}
                    />
                    <Button
                        onClick={handleAddComment}
                        variant="contained"
                        color="success"
                        sx={{ mt: 1 }}
                    >
                        Post
                    </Button>
                </Box>
            </Stack>

            {/* Render comments */}
            {comments.map((comment, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar>{comment.user[0]}</Avatar>
                        <Box>
                            <Typography fontWeight="bold" color="white">{comment.user}</Typography>
                            <Typography variant="body2" color="#aaa">{comment.date}</Typography>
                            <Typography sx={{ mt: 1, color: '#ccc' }}>{comment.content}</Typography>
                        </Box>
                    </Stack>
                    {index < comments.length - 1 && <Divider sx={{ mt: 2, mb: 2, borderColor: '#333' }} />}
                </Box>
            ))}
        </Box>
    );
};

export default CommentsSection;
