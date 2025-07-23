import { Box, Container, Typography } from '@mui/material';
import { FooterStyles, FooterLink } from './FooterStyles';
export default function Footer() {
    const links = [
        { label: 'Blog', to: '/' },
        { label: 'DMCA', to: '/' },
        { label: 'API', to: '/' },
        { label: 'RSS', to: '/' },
        { label: 'Contact', to: '/' },
        { label: 'Browse Movies', to: '/browse-movies' },
        { label: 'Requests', to: '/' },
        { label: 'Login', to: '/login' },
        { label: 'Language', to: '/' },
    ];
    return (
        <FooterStyles>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1.5,
                        justifyContent: 'center',
                        textAlign: 'center',
                        mb: 1,
                    }}
                >
                    <Typography component="span" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                        YTS © 2011 - 2025
                    </Typography>
                    {links.map((link, index) => (
                        <FooterLink key={index} to={link.to}>
                            {link.label}
                        </FooterLink>
                    ))}
                </Box>

                <Typography align="center" sx={{ fontSize: '0.75rem', mt: 1, color: '#777' }}>
                    By using this site you agree to and accept our{' '}
                    <FooterLink to="/">
                        User Agreement
                    </FooterLink>
                    , which can be read{' '}
                    <FooterLink to="/">
                        here
                    </FooterLink>
                    .
                </Typography>
            </Container>
        </FooterStyles>
    );
}
