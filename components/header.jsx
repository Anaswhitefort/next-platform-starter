'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Revalidation', href: '/revalidation' },
    { linkText: 'Image CDN', href: '/image-cdn' },
    { linkText: 'Edge Function', href: '/edge' },
    { linkText: 'Blobs', href: '/blobs' },
    { linkText: 'Classics', href: '/classics' }
];

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="flex items-center justify-between pt-6 pb-12 sm:pt-12 md:pb-24">
                <Link href="/">
                    <Image src={netlifyLogo} alt="Netlify logo" />
                </Link>

                {/* Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    className="hamburger-button text-2xl"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Regular Navigation Menu */}
                <ul className="nav-menu flex flex-wrap gap-x-4 gap-y-1 lg:flex lg:items-center lg:gap-4">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex lg:items-center lg:ml-auto">
                    <Link
                        href="https://github.com/netlify-templates/next-platform-starter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={githubLogo} alt="GitHub logo" className="w-7" />
                    </Link>
                </div>
            </nav>

            {/* Overlay */}
            <div className={`overlay ${menuOpen ? 'open' : ''}`}>
                <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl text-white">
                    <FiX />
                </button>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block px-1.5 py-1 transition hover:opacity-80"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
