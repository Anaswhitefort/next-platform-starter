'use client';
import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import ClientRootLayout from './clientrootlayout'; 
import { useState, useEffect } from 'react';
import Loader from '../components/loader';


export default function RootLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
       
        const timer = setTimeout(() => {
            setIsLoading(false); 
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased bg-grid-pattern">
                <div 
                    className="flex flex-col min-h-screen px-6 sm:px-12 dark:text-black dark:bg-white"
                    style={{
                        backgroundImage: 'linear-gradient(to bottom, rgba(10, 10, 10, 0%), rgba(10, 10, 10, 30%)), url(/images/noise.png)',
                    }}
                >
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                    {isLoading ? (
                            <Loader />
                        ) : (
                            <>
                                <Header /> {/* Pass the title */}
                                <ClientRootLayout>{children}</ClientRootLayout>
                                <Footer />
                            </>
                        )}
                    </div>
                </div>
            </body>
        </html>
    );
}
