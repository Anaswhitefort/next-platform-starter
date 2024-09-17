'use client';

import React from 'react';

export function MarketingMainCards() {
    return (
        <div className="font-sans">

            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6 px-4 my-6">
                <div
                    className="bg-black p-6 rounded-[15px] border border-white"
                    style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}
                >
                    <h3 className="text-lg font-bold mb-2 text-white">Digital Marketing</h3>
                    <p className="text-sm text-white">
                    Specialized in Lead and Sales oriented digital marketing strategies. Tailored to your business expansion goals, we offer services that seamlessly integrate with your objectives. Through a strategy-first methodology, our experts discern the optimal approach that harmonizes with your business aspirations.
                    </p>
                </div>
                <div
                    className="bg-black p-6 rounded-[15px] border border-white"
                    style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}
                >
                    <h3 className="text-lg font-bold mb-2 text-white">Web/app Designing & Development</h3>
                    <p className="text-sm text-white">
                    Our crafted websites fuel conversions, meticulously enhancing user experience to cater to your customers' utmost satisfaction. Serving as a pivotal initial interaction for potential leads, the ease of navigation and engagement on your website could spell the distinction between success and setback.</p>
                </div>

                <div
                    className="bg-black p-6 rounded-[15px] border border-white"
                    style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}
                >
                    <h3 className="text-lg font-bold mb-2 text-white">GCC E-commerce Onboarding</h3>
                    <p className="text-sm text-white">
                    Expand your business into the GCC market with our expert support. Based in Abu Dhabi, we assist European and UK manufacturers in establishing a strong presence through e-commerce development, marketplace onboarding, inventory management, and targeted marketing for sustainable growth.</p>
                </div>

                <div
                    className="bg-black p-6 rounded-[15px] border border-white"
                    style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}
                >
                    <h3 className="text-lg font-bold mb-2 text-white">Content Creation & Graphic Designing</h3>
                    <p className="text-sm text-white">
                    Specialized in Lead and Sales oriented digital marketing strategies. Tailored to your business expansion goals, we offer services that seamlessly integrate with your objectives. Through a strategy-first methodology, our experts discern the optimal approach that harmonizes with your business aspirations.</p>
                </div>
            </div>
        </div>
    );
}
