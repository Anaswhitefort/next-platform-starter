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
    { linkText: 'Revalidation', href: '/revalidation' },
    { linkText: 'Creatives', href: '/creative-content-creation' },
    { 
        linkText: 'Case Studies ->', 
        href: '/case-studies',
        subItems: [
            { linkText: 'Ecommerce Marketing', href: '/case-studies/ecommerce-marketing' }
        ]
    },
    { linkText: 'Edge Function', href: '/edge' },
    { linkText: 'Blobs', href: '/blobs' },
    { linkText: 'Classics', href: '/classics' }
];

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);  // New state for sub-navigation
    const overlayRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (event) => {
        if (overlayRef.current && !overlayRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
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
  
            <nav className="flex items-center justify-between pt-6 pb-12 sm:pt-12 md:pb-24 relative">
                <button onClick={toggleMenu} className="hamburger-button text-2xl absolute left-0 top-1/2" style={{ transform: 'translateY(-100%)' }}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                <div className="flex-grow flex justify-center items-center">
                    <Link href="/">
                        <Image src={vexaLogo} alt="Vexa Marketing Agency Abu Dhabi logo" />
                    </Link>
                </div>

                <a href="tel:+971563901109" className="bg-[#35cbee] text-white px-4 py-2 rounded-lg font-semibold flex items-center ml-4 no-underline">
                    Call us
                </a>

                <ul className="nav-menu flex flex-wrap gap-x-4 gap-y-1 lg:flex lg:items-center lg:gap-4 hidden lg:flex">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2 text-lg font-bold h-6"
                                onClick={() => item.subItems ? setShowSubMenu(true) : null}  // Show sub-menu if available
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div ref={overlayRef} className={`overlay bg-grid-pattern ${menuOpen ? 'open' : ''}`}>
                {showSubMenu ? (
                    <>
                        {/* Back to Main Navigation Button */}
                        <button onClick={() => setShowSubMenu(false)} className="absolute left-4 top-4 text-white text-lg font-bold">
                            <FiArrowLeft /> Back
                        </button>

                        {/* Sub Navigation for Case Studies */}
                        <ul className="flex flex-col items-start mt-16">
                            {navItems.find(item => item.linkText === 'Case Studies ->').subItems.map((subItem, index) => (
                                <li key={index}>
                                    <Link
                                        href={subItem.href}
                                        className="inline-block px-1.5 py-1 transition hover:opacity-80 text-lg font-bold h-6"
                                        onClick={() => setMenuOpen(false)}  // Close the menu when a sub-item is clicked
                                    >
                                        {subItem.linkText}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <>
                        {/* Hamburger Button inside Overlay */}
                        <button onClick={toggleMenu} className="absolute left-4 top-4 text-white text-lg font-bold">
                            <FiX />
                        </button>

                        {/* Main Navigation Menu in Overlay */}
                        <ul className="flex flex-col items-start mt-16">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="inline-block px-1.5 py-1 transition hover:opacity-80 text-lg font-bold h-6"
                                        onClick={() => item.subItems ? setShowSubMenu(true) : setMenuOpen(false)}  // Handle sub-menu toggle
                                    >
                                        {item.linkText}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                <div className="absolute bottom-4 right-4 flex space-x-3 text-white">
                    <a href="https://www.facebook.com/vexauae" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-xl" />
                    </a>
                    <a href="https://www.snapchat.com/add/vexa.ae" target="_blank" rel="noopener noreferrer">
                        <FaSnapchatGhost className="text-xl" />
                    </a>
                    <a href="https://www.linkedin.com/company/vexa-ae/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="text-xl" />
                    </a>
                    <a href="https://www.tiktok.com/@vexa.ae" target="_blank" rel="noopener noreferrer">
                        <FaTiktok className="text-xl" />
                    </a>
                    <a href="https://www.instagram.com/vexa.ae" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-xl" />
                    </a>
                </div>
            </div>

            <div className={`${menuOpen ? 'fixed inset-0 backdrop-blur-sm z-40' : ''}`}></div>
        </>
    );
}