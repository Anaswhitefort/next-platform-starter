"use client"; // Mark this as a Client Component for interactivity

import { useEffect, useState } from 'react';

export default function ClientRootLayout({ children }) {
    const [theme, setTheme] = useState('light'); // Default to light theme

    useEffect(() => {
        // Get the saved theme from localStorage or system preference
        const savedTheme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        setTheme(savedTheme);
        // Apply theme class to the <html> element
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className="flex flex-col grow">
            <button
                onClick={toggleTheme}
                className="bg-[#35cbee] text-white px-2 py-1 rounded-lg font-semibold flex items-center no-underline fixed top-[15%] z-10 right-2 m-0"
            >
                {theme === 'dark' ? '🌙' : '🌞'}
            </button>
            <div className="grow">{children}</div>
        </div>
    );
}
