'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

export function AboutUs() {
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <>
        
            {/* About Us section */}
            <div className="font-sans">
                <div
                    ref={ref1}
                    className={`items-center lg:gap-y-6 bg-transparent transform transition-all duration-700 ${
                        inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="sm:p-12 p-4">
                        <h2
                            className="bg-blend-lighten md:bg-blend-darken text-white dark:text-black lg:text-5xl text-3xl font-bold lg:!leading-[56px]"
                        >
                            About us
                        </h2>
                        <p className="text-white dark:text-black mt-6 text-base leading-relaxed">
                            Vexa Marketing Agency, born and raised in Abu Dhabi, is all about creative, purpose-driven, and results-focused digital marketing. We tailor unique social media strategies, turn customers into brand advocates, create immersive websites, craft effective paid ad campaigns, and boost your search engine presence.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
