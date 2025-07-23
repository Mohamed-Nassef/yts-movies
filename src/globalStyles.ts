import { GlobalStyles } from '@mui/material';
import bg from './assets/background.jpg';

export default function CustomGlobalStyles() {
    return GlobalStyles({
        styles: {
            body: {
                margin: 0,
                padding: 0,
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            },
            '*': {
                boxSizing: 'border-box',
            },
        },
    });
}
