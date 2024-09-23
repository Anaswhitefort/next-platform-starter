'use client';  

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { dark } from 'daisyui/src/theming/themes';

export function OurTeam() {
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className="font-sans">
           <div
                ref={ref1}
                className={`grid lg:grid-cols-1 items-center lg:gap-y-6 bg-transparent transform transition-all duration-700 ${
                    inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <div className="max-lg:order-1 max-lg:text-left sm:p-12 p-4">
                    <h2
                        className="bg-blend-lighten md:bg-blend-darken text-white dark:text-black lg:text-5xl text-3xl font-bold lg:!leading-[56px]">
                        Our Team
                    </h2>
                    <p className="text-white dark:text-black mt-6 text-base leading-relaxed">
                        As an official Shopify Partner in Abu Dhabi, we specialize in comprehensive store development and digital marketing support. Since 2020, we have been dedicated to helping businesses succeed online with expert Shopify solutions.
                    </p>
                </div>

            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-4 my-12">
            <div
                    ref={ref2}
                    className={`bg-transparent p-6 rounded-[15px] border border-white dark:border-black transform transition-all duration-700 ${
                        inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}
                >

                    <h3 className="text-lg font-bold mb-2 text-white dark:text-black">Anas Abdul Azeez</h3>
                    <h6 className="text-sm font-bold mb-2 text-white dark:text-black">Team Lead</h6>
                    <p className="text-sm text-white dark:text-black">
                    7+ years of experience, Specialised in Paid Campaigns and Ecommerce Consulting for GCC Market.</p>
                </div>

                <div
                    ref={ref3}
                    className={`bg-transparent p-6 rounded-[15px] border border-white dark:border-black transform transition-all duration-700 ${
                        inView3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}
                >
            
                    <h3 className="text-lg font-bold mb-2 text-white dark:text-black">Jobert Salaya</h3>
                    <h6 className="text-sm font-bold mb-2 text-white dark:text-black">Senior Graphic Consultant</h6>
                    <p className="text-sm text-white dark:text-black">
                    8+years of experience, Specialized in Visual Graphics and Branding Design.</p>
                </div>

                <div
                    ref={ref4}
                    className={`bg-transparent p-6 rounded-[15px] border border-white dark:border-black transform transition-all duration-700 ${
                        inView4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}
                >
                    
                    <h3 className="text-lg font-bold mb-2 text-white dark:text-black">Ghaith Al Masouti</h3>
                    <h6 className="text-sm font-bold mb-2 text-white dark:text-black">Social Media Manager</h6>
                    <p className="text-sm text-white dark:text-black">
                    Specialised in GCC Account Management, 5+ Years of experience</p>
                </div>

                <div
                    ref={ref5}
                    className={`bg-transparent p-6 rounded-[15px] border border-white dark:border-black transform transition-all duration-700 ${
                        inView5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}
                >
                
                    <h3 className="text-lg font-bold mb-2 text-white dark:text-black">Hussain Bin Mohamed</h3>
                    <h6 className="text-sm font-bold mb-2 text-white dark:text-black">Videographer | Content Creator </h6>
                    <p className="text-sm text-white dark:text-black">
                    Videographer and editor 5+ years of experience</p>
                </div>
            </div>
        </div>
    );
}
