import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from './pages/homePage';
import FourK from './pages/FourK';
import Trending from './pages/trending/Trending';
import BrowseMovies from './pages/ browseMovies';
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
                path: '/yts-movies',
                element: <Home />,
            },
            {
                path: '/4k',
                element: <FourK />,

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
]);
