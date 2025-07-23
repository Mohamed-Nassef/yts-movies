import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function AppLayout() {
    return (
        <>
            <Header />
            <main style={{ padding: '20px', marginTop: '64px' }}>
                <Outlet /> 
            </main>
            <Footer />
        </>
    );
}