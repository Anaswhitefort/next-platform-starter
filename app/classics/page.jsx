'use client';

import { useInView } from 'react-intersection-observer';
import React from 'react';

export default function Page() {
    const [refLeft, inViewLeft] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refRight, inViewRight] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <>
            <h1 className="text-center text-4xl font-bold my-8">Netlify Classics</h1>
            <div className="flex w-full justify-center gap-6 pt-12">
                {/* Left Image */}
                <div
                    ref={refLeft}
                    className={`transform transition-all duration-700 ${
                        inViewLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}
                >
                    <img
                        src="/images/Official_shopify_partner_abu_dhabi.png"
                        alt="Official Shopify Partner Abu Dhabi - Left"
                        className="w-64 h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Image */}
                <div
                    ref={refRight}
                    className={`transform transition-all duration-700 ${
                        inViewRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                    }`}
                >
                    <img
                        src="/images/Official_shopify_partner_abu_dhabi.png"
                        alt="Official Shopify Partner Abu Dhabi - Right"
                        className="w-64 h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </>
    );
}
