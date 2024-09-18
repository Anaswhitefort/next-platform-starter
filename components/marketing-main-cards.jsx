'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

export function MarketingMainCards() {
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className="font-sans">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6 px-4 my-6">
                
                {/* Card 1 */}
                <div
                    ref={ref1}
                    className={`bg-black p-6 rounded-[15px] border border-white transform transition-all duration-700 ${
                        inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}
                >
                    <h3 className="text-lg font-bold mb-2 text-white">Digital Marketing</h3>
                    <p className="text-sm text-white">
                        Specialized in Lead and Sales oriented digital marketing strategies. Tailored to your business expansion goals, we offer services that seamlessly integrate with your objectives. Through a strategy-first methodology, our experts discern the optimal approach that harmonizes with your business aspirations.
                    </p>
                </div>

                {/* Card 2 */}
                <div
                    ref={ref2}
                    className={`bg-black p-6 rounded-[15px] border border-white transform transition-all duration-700 ${
                        inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}
                >
                    <h3 className="text-lg font-bold mb-2 text-white">Web/app Designing & Development</h3>
                    <p className="text-sm text-white">
                        Our crafted websites fuel conversions, meticulously enhancing user experience to cater to the clients satisfaction. Serving as a pivotal initial interaction for potential leads, the ease of navigation and engagement on your website could spell the distinction between success and setback.
                    </p>
                </div>

                {/* Card 3 */}
                <div
                    ref={ref3}
                    className={`bg-black p-6 rounded-[15px] border border-white transform transition-all duration-700 ${
                        inView3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}
                >
                    <h3 className="text-lg font-bold mb-2 text-white">GCC E-commerce Onboarding</h3>
                    <p className="text-sm text-white">
                        Expand your business into the GCC market with our expert support. Based in Abu Dhabi, we assist European and UK manufacturers in establishing a strong presence through e-commerce development, marketplace onboarding, inventory management, and targeted marketing for sustainable growth.
                    </p>
                </div>

                {/* Card 4 */}
                <div
                    ref={ref4}
                    className={`bg-black p-6 rounded-[15px] border border-white transform transition-all duration-700 ${
                        inView4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}
                >
                    <h3 className="text-lg font-bold mb-2 text-white">Content Creation & Graphic Designing</h3>
                    <p className="text-sm text-white">
                        Specialized in Lead and Sales oriented digital marketing strategies. Tailored to your business expansion goals, we offer services that seamlessly integrate with your objectives. Through a strategy-first methodology, our experts discern the optimal approach that harmonizes with your business aspirations.
                    </p>
                </div>
            </div>
        </div>
    );
}
