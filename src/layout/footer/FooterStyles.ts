import { styled } from '@mui/material'
import { Link } from 'react-router-dom'


export const FooterStyles = styled('footer')(({ theme }) => ({
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0),
    marginTop: theme.spacing(6),
    borderTop: `1px solid ${theme.palette.divider}`,
}))
export const FooterLink = styled(Link)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    '&:hover': {
        color: theme.palette.primary.main,
        textDecoration: 'underline',
    },
}));