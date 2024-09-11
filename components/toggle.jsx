import { useState, useEffect } from 'react';

export function Header() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        // Check localStorage for theme preference on initial render
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkTheme(savedTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkTheme ? 'dark' : 'light';
        setIsDarkTheme(!isDarkTheme);
        document.documentElement.classList.toggle('dark', !isDarkTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <nav className={`flex items-center justify-between pt-6 pb-12 ${isDarkTheme ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'}`}>
            <button onClick={toggleTheme} className="ml-4 p-2 bg-gray-800 text-white rounded-full">
                {isDarkTheme ? '🌞' : '🌙'}
            </button>
            {/* Rest of your header content */}
        </nav>
    );
}
