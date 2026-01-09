import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ClubAssistant from './ClubAssistant';

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
            <Navbar />
            <main className="flex-grow">
                <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-2">
                    <Outlet />
                </div>
            </main>
            <Footer />
            <ClubAssistant />
        </div>
    );
};

export default Layout;
