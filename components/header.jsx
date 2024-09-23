'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import vexaLogo from 'public/vexa-logo.svg';
import { FiMenu, FiX, FiArrowLeft } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaTiktok, FaSnapchatGhost, FaLinkedinIn } from 'react-icons/fa';
import Head from 'next/head';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Shopify Development', href: '/shopify-developer-abudhabi' },
    { linkText: 'Revalidation', href: '/revalidation' },
    { linkText: 'Creatives', href: '/creative-content-creation' },
    { 
        linkText: 'Case Studies ->', 
        href: '/case-studies',
        subItems: [
            { linkText: 'Ecommerce Marketing', href: '/case-studies/ecommerce-marketing' }
        ]
    },
    { linkText: 'Blobs', href: '/blobs' },
    { linkText: 'Classics', href: '/classics' },
    { linkText: 'Our Team', href: '/our-team' },
    { linkText: 'About us', href: '/about-us' },
];

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [sticky, setSticky] = useState(false);
    const overlayRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const toggleSubMenu = (index) => {
        setShowSubMenu(showSubMenu === index ? null : index);
    };

    const handleClickOutside = (event) => {
        if (overlayRef.current && !overlayRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            setSticky(false);
        } else {
            // Scrolling up
            setSticky(true);
        }
        setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };
    function toggleTheme() {
        document.documentElement.classList.toggle("dark");
    };
    useEffect(() => {
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [menuOpen, lastScrollTop]);

    return  (
        <>
            <Head>
                <title>Digital Marketing Agency in Abu Dhabi | Vexa</title>
                <meta name="description" content="Vexa is a leading digital marketing agency in Abu Dhabi, offering services in SEO, PPC, social media marketing, and more to help your business grow online." />
                <meta name="keywords" content="digital marketing agency, Abu Dhabi, SEO, PPC, social media marketing, online marketing" />
                <meta property="og:title" content="Digital Marketing Agency in Abu Dhabi | Vexa" />
                <meta property="og:description" content="Vexa is a leading digital marketing agency in Abu Dhabi, specializing in SEO, PPC, social media marketing, and more." />
                <meta property="og:image" content="/images/og-image.jpg" />
                <meta property="og:url" content="https://www.vexa.ae" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Digital Marketing Agency in Abu Dhabi | Vexa" />
                <meta name="twitter:description" content="Vexa is a leading digital marketing agency in Abu Dhabi, specializing in SEO, PPC, social media marketing, and more." />
                <meta name="twitter:image" content="/images/twitter-image.jpg" />

                {/* JSON-LD Schema Markup for Organization */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Vexa Marketing Agency",
                            "url": "https://www.vexa.ae",
                            "logo": "https://www.vexa.ae/images/logo.png",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "Customer Service",
                                "telephone": "+971-563901109",
                                "email": "anas@vexa.ae"
                            },
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Corniche St - al bateen - W2 - Abu Dhabi",
                                "addressLocality": "Abu Dhabi",
                                "addressRegion": "AD",
                                "postalCode": "0000",
                                "addressCountry": "AE"
                            }
                        })
                    }}
                />

                {/* JSON-LD Schema Markup for LocalBusiness */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Vexa Digital Marketing Agency",
                            "description": "Vexa Marketing Agency based in Abu Dhabi, specializes in creative, purpose-driven digital marketing. We design unique social media strategies, turn customers into brand advocates, develop immersive websites, and execute effective paid ad campaigns. As an official Shopify Partner, we excel in eCommerce development, content production, and enhancing your search engine presence. Serving clients in Abu dhabi and worldwide, we offer expertise in both English and Arabic.",
                            "url": "https://www.vexa.ae",
                            "logo": "https://www.vexa.ae/images/logo.png",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Corniche St - al bateen - W2 - Abu Dhabi",
                                "addressLocality": "Abu Dhabi",
                                "addressRegion": "AD",
                                "postalCode": "0000",
                                "addressCountry": "AE"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "Customer Service",
                                "telephone": "+971-123-4567",
                                "email": "anas@vexa.ae"
                            },
                            "sameAs": [
                                "https://www.facebook.com/vexauae",
                                "https://www.instagram.com/vexa.ae",
                                "https://www.linkedin.com/company/vexa-ae/",
                                "https://www.tiktok.com/@vexa.ae",
                                "https://www.snapchat.com/add/vexa.ae"
                            ]
                        })
                    }}
                />

                {/* JSON-LD Schema Markup for Breadcrumb */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://www.vexa.ae/"
                                }
                            ]
                        })
                    }}
                />
            </Head>

            <nav
                className={`flex items-center justify-between pt-2 pb-2 sm:pt-2 sm:pb-2 md:pb-15 relative rounded-[15px] bg-black text-white border border-white dark:border-black dark:bg-white dark:text-black ${sticky ? 'sticky top-0 z-10 ' : ''}`}
            >
                <button
                    onClick={toggleMenu}
                    className="hamburger-button text-3xl mt-4 ml-4 absolute left-0 top-1/2"
                    style={{ transform: 'translateY(-100%)' }}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

 <div className="flex-grow flex justify-center items-center ml-20">
    <Link href="/">
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="sm:w-[220px] lg:w-[250px] lg:h-[65px] w-[150px] h-[50px] fill-white dark:fill-black" 
            viewBox="0 0 933 248"
            alt="Vexa Marketing Agency Abu Dhabi logo"
        >
            <g>
	<path d="M238.82,75.19c3.8,0.23,7.57,0.4,11.31,0.52c3.74,0.12,7.45,0.17,11.14,0.17c3.68,0,7.43-0.06,11.22-0.17   c3.8-0.11,7.54-0.29,11.22-0.52v1.73c-2.19,0.23-4,1.24-5.44,3.02c-1.44,1.79-2.22,3.77-2.33,5.96c-0.23,2.19,0,4.32,0.69,6.39   c0.69,2.07,1.49,4.09,2.42,6.04c3.68,8.98,7.43,17.85,11.22,26.59c3.8,8.75,7.6,17.56,11.4,26.42   c4.95-11.86,11.57-20.61,19.86-26.25c8.29-5.64,18.88-8.92,31.77-9.84h0.17c3.68-0.57,7.43-0.89,11.22-0.95   c3.8-0.06,7.54-0.09,11.22-0.09h45.76c-0.81-4.6-2.02-9.15-3.63-13.64c-1.61-4.49-3.77-8.52-6.48-12.09   c-2.71-3.57-6.04-6.42-10.02-8.55c-3.97-2.13-8.66-3.19-14.07-3.19c-5.07,0-9.47,0.95-13.21,2.85c-3.74,1.9-6.97,4.46-9.67,7.68   c-2.71,3.22-4.89,6.88-6.56,10.97c-1.67,4.09-2.97,8.32-3.89,12.69c-3.8,0.23-7.57,0.66-11.31,1.29c-3.74,0.63-7.4,1.64-10.97,3.02   c1.49-5.53,3.8-10.73,6.91-15.63c3.11-4.89,6.99-9.15,11.66-12.78c4.66-3.63,10.1-6.5,16.32-8.63c6.22-2.13,13.24-3.19,21.07-3.19   c7.25,0,13.93,1.01,20.03,3.02c6.1,2.02,11.54,4.84,16.32,8.46c4.78,3.63,8.83,7.97,12.17,13.04c3.34,5.07,5.81,10.59,7.43,16.58   h-43c3.57,0.58,7.17,1.38,10.79,2.42s7.02,2.42,10.19,4.14c3.17,1.73,6.1,3.86,8.81,6.39c2.7,2.53,4.92,5.53,6.65,8.98   c1.49,3,2.44,6.16,2.85,9.5c0.4,3.34,0.32,6.68-0.26,10.02c-1.27,5.41-3.6,10.28-6.99,14.59c-3.4,4.32-7.51,7.97-12.35,10.97   c-4.84,3-10.13,5.27-15.89,6.82c-5.76,1.55-11.57,2.33-17.44,2.33c-10.71,0-19.95-2.13-27.72-6.39   c-7.77-4.26-14.05-9.76-18.82-16.49c-4.78-6.73-8.03-14.25-9.76-22.54c-1.73-8.29-1.9-16.52-0.52-24.69   c-0.46,0.23-0.86,0.4-1.21,0.52c-0.35,0.12-0.75,0.29-1.21,0.52c-6.1,3.11-11.14,7.2-15.11,12.26c-3.97,5.07-7.14,10.68-9.5,16.84   c-2.36,6.16-4.03,12.67-5.01,19.51c-0.98,6.85-1.47,13.67-1.47,20.46h-1.55l-1.04-2.07c-6.33-14.85-12.61-29.59-18.82-44.21   c-6.22-14.62-12.49-29.36-18.82-44.21c-1.5-3.34-3-6.62-4.49-9.84c-1.5-3.22-3.4-6.27-5.7-9.15   C244.11,80.03,241.58,77.5,238.82,75.19z M352.27,126.14c-0.46,7.02-0.23,14.31,0.69,21.84c0.92,7.54,2.76,14.45,5.53,20.72   c2.76,6.28,6.5,11.46,11.22,15.54c4.72,4.09,10.71,6.13,17.96,6.13c8.29,0,15.68-1.29,22.19-3.89c6.5-2.59,12.23-6.07,17.18-10.45   c2.76-2.53,5.06-5.32,6.91-8.38c1.84-3.05,3.14-6.22,3.89-9.5c0.75-3.28,0.95-6.56,0.6-9.84c-0.35-3.28-1.27-6.42-2.76-9.41   c-4.14-8.17-11.37-14.01-21.67-17.53c-10.3-3.51-23-5.27-38.08-5.27c-3.8,0-7.6,0.06-11.4,0.17c-3.8,0.12-7.6,0.29-11.4,0.52v0.35   c-0.23,1.5-0.4,2.99-0.52,4.49C352.5,123.14,352.38,124.64,352.27,126.14z"/>
	<path d="M451.91,75.19c4.37,0.23,8.29,0.4,11.74,0.52c3.45,0.12,6.85,0.17,10.19,0.17c3.34,0,6.76-0.06,10.27-0.17   c3.51-0.11,7.63-0.29,12.35-0.52c3.45-0.23,6.39,0.32,8.81,1.64c2.42,1.33,4.52,3.02,6.3,5.09c1.78,2.07,3.34,4.35,4.66,6.82   c1.32,2.48,2.59,4.78,3.8,6.91c1.21,2.13,2.39,3.92,3.54,5.35c1.15,1.44,2.47,2.16,3.97,2.16c1.61,0,3.17-0.69,4.66-2.07   c1.04-1.27,2.01-2.47,2.94-3.63c0.92-1.15,1.84-2.3,2.76-3.45c3.68-4.37,5.06-8.14,4.14-11.31c-0.92-3.17-4.83-5.04-11.74-5.61   v-1.9c0.46,0,1.87,0.12,4.23,0.34c2.36,0.23,5.73,0.35,10.1,0.35c2.3,0,4.78-0.06,7.43-0.17c2.65-0.11,5.64-0.29,8.98-0.52v1.21   c-4.03,1.5-7.63,3.74-10.79,6.74c-3.17,3-6.07,6.16-8.72,9.5c-4.03,4.95-8.12,9.96-12.26,15.02c-4.14,5.07-8.23,10.13-12.26,15.2   c6.56,9.67,12.92,19.05,19.08,28.15c6.16,9.1,11.54,17.1,16.15,24c0.11,0.23,0.63,1.01,1.55,2.33c0.92,1.33,2.16,2.88,3.71,4.66   c1.55,1.79,3.39,3.54,5.53,5.27c2.13,1.73,4.46,3,6.99,3.8l-0.17,1.38c-4.38-0.35-8.32-0.58-11.83-0.69   c-3.51-0.11-6.94-0.17-10.27-0.17c-3.34,0-6.85,0.06-10.53,0.17c-3.69,0.12-7.94,0.34-12.78,0.69v-1.38   c3.91-1.04,5.78-2.82,5.61-5.35c-0.17-2.53-1.41-5.58-3.71-9.15c-2.65-4.03-6.13-9.21-10.45-15.54   c-4.32-6.33-8.89-13.01-13.73-20.03c-6.33,7.83-11.86,14.62-16.58,20.38c-4.72,5.76-7.94,9.73-9.67,11.92   c-1.73,2.19-2.94,4.26-3.63,6.22c-0.69,1.96-0.69,3.74,0,5.35c0.69,1.61,2.07,2.97,4.14,4.06c2.07,1.1,5.01,1.81,8.81,2.16v1.38   c-2.76-0.23-5.38-0.4-7.86-0.52c-2.48-0.11-4.87-0.17-7.17-0.17c-2.76,0-5.5,0.06-8.2,0.17c-2.71,0.12-5.44,0.29-8.2,0.52v-1.38   c3.45-1.49,6.33-3.31,8.63-5.44c2.3-2.13,4.78-4.75,7.43-7.86c4.03-5.06,8.78-10.94,14.25-17.61c5.47-6.68,11.14-13.64,17.01-20.9   c-4.03-5.75-7.92-11.42-11.66-17.01c-3.74-5.58-7.11-10.56-10.1-14.94c-3.45-5.18-6.73-10.07-9.84-14.68   c-0.12-0.11-0.63-0.86-1.55-2.25c-0.92-1.38-2.16-2.96-3.71-4.75c-1.55-1.78-3.4-3.54-5.53-5.27c-2.13-1.73-4.46-3.05-6.99-3.97   L451.91,75.19z M497.15,77.09c-2.07,0.23-3.54,0.89-4.4,1.99c-0.86,1.1-1.18,2.39-0.95,3.89c0.23,1.27,0.69,2.65,1.38,4.14   c0.69,1.5,1.67,3.17,2.94,5.01c0.35,0.58,1.49,2.3,3.45,5.18c1.96,2.88,4.08,5.99,6.39,9.33c2.3,3.34,4.43,6.45,6.39,9.33   c1.96,2.88,3.11,4.61,3.45,5.18c2.3-2.88,4.58-5.64,6.82-8.29c2.25-2.65,4.4-5.29,6.48-7.94c-1.96,0.46-3.74,0.06-5.35-1.21   c-1.38-0.92-2.62-2.3-3.71-4.14c-1.1-1.84-2.16-3.74-3.19-5.7c-1.5-2.99-3.14-5.87-4.92-8.63c-1.79-2.76-4-4.89-6.65-6.39   C503.08,77.55,500.37,76.98,497.15,77.09z"/>
	<path d="M572.44,158.43c0-5.41,1.15-10.1,3.45-14.07c2.3-3.97,5.41-7.34,9.33-10.1c3.91-2.76,8.46-4.98,13.64-6.65   c5.18-1.67,10.65-3.02,16.41-4.06c-5.3-1.04-9.64-2.94-13.04-5.7c-3.4-2.76-5.79-5.96-7.17-9.58c-1.38-3.63-1.81-7.37-1.3-11.22   c0.52-3.86,1.99-7.43,4.4-10.71c2.42-3.28,5.73-5.96,9.93-8.03c4.2-2.07,9.3-3.11,15.28-3.11c7.14,0,13.84,0.66,20.12,1.99   c6.27,1.33,11.83,3.48,16.66,6.48c4.84,3,8.78,6.94,11.83,11.83c3.05,4.89,4.86,10.91,5.44,18.05c0.23,1.96,0.35,3.95,0.35,5.96   c0,2.02,0,4.06,0,6.13v32.64c0,4.14,0.03,8.15,0.09,12c0.06,3.86,0.43,7.28,1.12,10.28c0.69,3,1.84,5.41,3.45,7.25   c1.61,1.84,4.03,2.76,7.25,2.76v1.9c-5.99,0-11.11-0.46-15.37-1.38c-4.26-0.92-7.77-2.44-10.53-4.58   c-2.76-2.13-4.81-5.03-6.13-8.72c-1.32-3.68-1.99-8.29-1.99-13.81c-3.22,9.1-8.29,16.12-15.2,21.07   c-6.91,4.95-15.66,7.48-26.25,7.6c-13.7,0.23-24.09-2.76-31.17-8.98S572.44,169.02,572.44,158.43z M594.55,160.16   c0,8.75,1.96,15.63,5.89,20.64c3.92,5.01,10.27,7.51,19.05,7.51c4.96,0,9.67-0.78,14.11-2.33c4.44-1.55,8.28-4.06,11.52-7.51   c3.23-3.45,5.8-7.94,7.71-13.47c1.91-5.53,2.86-12.32,2.86-20.38V123.2c-3.58,0-7.56,0.03-11.95,0.09   c-4.39,0.06-8.86,0.43-13.42,1.12c-4.56,0.69-8.98,1.79-13.25,3.28c-4.27,1.5-8.08,3.63-11.43,6.39s-6.03,6.28-8.05,10.53   C595.55,148.87,594.55,154.05,594.55,160.16z M595.24,100.92c0.11,2.53,0.75,5.18,1.91,7.94c2.42,4.95,5.97,8.46,10.65,10.53   c4.68,2.07,9.67,3.11,14.98,3.11c4.85-0.57,9.58-0.95,14.2-1.12c4.62-0.17,9.12-0.26,13.51-0.26h5.2   c-0.12-6.33-0.72-12.17-1.82-17.53c-1.1-5.35-2.92-9.96-5.46-13.81c-2.54-3.86-5.86-6.91-9.96-9.15s-9.27-3.42-15.5-3.54   c-3.58,0-7.04,0.49-10.39,1.47c-3.35,0.98-6.29,2.48-8.83,4.49c-2.54,2.02-4.59,4.52-6.15,7.51   C596.01,93.56,595.24,97.01,595.24,100.92z"/>
</g>
        </svg>
    </Link>
</div>
        
                <a
                    href="tel:+971563901109"
                    className="bg-[#35cbee] text-white px-2 py-1 mr-4 rounded-lg font-semibold flex items-center ml-2 no-underline"
                >
                    Call us
                </a>

                <ul className="nav-menu flex flex-wrap gap-x-4 gap-y-1 lg:flex lg:items-center lg:gap-2 hidden lg:flex">
                    {navItems.map((item, index) => (
                        <li key={index} className="nav-item relative">
                            <Link
                                href={item.href}
                                className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2 text-lg font-bold h-6 no-underline"
                                onClick={(event) => toggleSubMenu(index, event)} // Toggle submenu on click if exists
                            >
                                {item.linkText}
                            </Link>

                            {/* Render submenu */}
                            {item.subItems && showSubMenu === index && (
                                <div className="submenu absolute left-0 top-full bg-black text-white rounded-[8px] shadow-lg p-4">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <Link
                                            key={subIndex}
                                            href={subItem.href}
                                            className="block px-2 py-1 rounded-[15px] border border-white no-underline"
                                            style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}
                                            onClick={() => setMenuOpen(false)} // Close menu after clicking on submenu
                                        >
                                            {subItem.linkText}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            <div ref={overlayRef} className={`overlay bg-grid-pattern dark:bg-white  ${menuOpen ? 'open' : ''}`}>
                {showSubMenu ? (
                    <>
                        <button
                            onClick={() => setShowSubMenu(false)}
                            className="absolute left-4 top-4 text-white text-lg font-bold"
                        >
                            <FiArrowLeft /> Back
                        </button>

                        <ul className="flex flex-col items-start mt-16">
                            {navItems.find((item) => item.linkText === 'Case Studies ->').subItems.map(
                                (subItem, index) => (
                                    <li key={index}>
                                        <Link
                                            href={subItem.href}
                                            className="inline-block px-1.5 py-1 transition hover:opacity-80 text-lg font-bold h-6 dark:text-black"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {subItem.linkText}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </>
                ) : (
                    <>
                        <button
                            onClick={toggleMenu}
                            className="absolute left-8 top-8 text-white text-lg font-bold"
                        >
                            <FiX />
                        </button>

                        <ul className="flex flex-col items-start mt-16">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="inline-block px-1.5 py-1 transition hover:opacity-80 text-lg font-bold h-6"
                                        onClick={() => (item.subItems ? setShowSubMenu(true) : setMenuOpen(false))}
                                    >
                                        {item.linkText}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                <div className="absolute bottom-4 right-4 flex space-x-3 text-white">
                    <a
                        href="https://www.facebook.com/vexauae"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF className="text-xl" />
                    </a>
                    <a
                        href="https://www.snapchat.com/add/vexa.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaSnapchatGhost className="text-xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/vexa-ae/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn className="text-xl" />
                    </a>
                    <a
                        href="https://www.tiktok.com/@vexa.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTiktok className="text-xl" />
                    </a>
                    <a
                        href="https://www.instagram.com/vexa.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className="text-xl" />
                    </a>
                </div>
            </div>

            <div className={`${menuOpen ? 'fixed inset-0 backdrop-blur-sm z-40' : ''}`}></div>
        </>
    );
}