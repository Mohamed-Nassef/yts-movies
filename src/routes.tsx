import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from './pages/homePage';
import Ai from './pages/ai-search';
import Trending from './pages/trending/Trending';
import BrowseMovies from './pages/browseMovies';
import MovieDetails from './pages/moviedetails';
import NotFoundPage from './pages/notFound';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/ai-search',
                element: <Ai />,

            },
            {
                path: '/trending',
                element: <Trending />,
            },
            {
                path: '/browse-movies',
                element: <BrowseMovies />,
            },
            {
                path: '/movie/:id',
                element: <MovieDetails />,

            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],

    },

],
    {
        basename: '/yts-movies',
    }
);
