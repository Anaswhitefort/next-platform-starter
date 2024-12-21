'use client';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import CustomizedAccordions from 'components/collapsible-rows-ihealth';
import CollapsibleRows from 'components/collapsible-rows-ihealth-target-achieved';


export function EcommMarketing() {
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className="font-sans space-y-12">
            {/* Section 1 */}
            <div
                ref={ref1}
                className={`transform transition-all duration-700 ${
                    inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <section className="p-6 bg-transparent rounded-[15px] border border-white dark:border-black" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
                    <h1 className="text-3xl font-bold mb-2 text-white dark:text-black">
                        Ecommerce Marketing - iHealth UAE
                    </h1>
                    <p className="text-sm text-white dark:text-black">
                        In 2022-2023, Vexa Advertising created the brand-new eCommerce platform into the GCC marketing bringing in 1 million AED in sales within a couple of months. Our team put together a smart strategy, ran targeted campaigns, and made sure the content hit the mark. We&apos;re all about getting real results and driving growth for our clients.
                    </p>
                </section>
            </div>

            {/* Section 2: Image */}
            <div
                ref={ref2}
                className={`transform transition-all duration-700 ${
                    inView2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
            >
                <div className="overflow-hidden border-2 border-white rounded-lg relative max-w-screen-lg" style={{ aspectRatio: '3/1.6' }}>
                    <Image
                        src="/images/i-health-uae-by-vexa.png"
                        priority
                        fill={true}
                        style={{ objectFit: 'fill' }}
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        alt="Creative 01 from vexa digital marketing agency abu dhabi"
                    />
                </div>
            </div>

            {/* Section 3: Accordion */}
            <div
                ref={ref3}
                className={`transform transition-all duration-700 ${
                    inView3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <section className="my-12">
                    <h2 className="text-xl font-bold mb-4 text-white dark:text-black">
                        Explore Our Services
                    </h2>
                    <CustomizedAccordions />
                </section>
            </div>

            {/* Section 4: iHealth Results */}
            <div
                ref={ref4}
                className={`transform transition-all duration-700 ${
                    inView4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                    {/* iHealth Sales */}
                    <div className="bg-transparent p-6 rounded-[15px] border border-white dark:border-black" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
                        <h3 className="text-lg font-bold mb-2 text-white dark:text-black">
                            Ecommerce Marketing - iHealth Results
                        </h3>
                        <div className="mt-10 overflow-hidden border-2 border-white rounded-lg relative max-w-screen-lg" style={{ aspectRatio: '3 / 2.15' }}>
                            <Image
                                src="/images/ihealth-sales-by-vexa.png"
                                priority
                                fill={true}
                                style={{ objectFit: 'contain' }}
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                alt="iHealth sales results by Vexa"
                            />
                        </div>
                    </div>

                    {/* Google Ads Results */}
                    <div className="bg-transparent p-6 rounded-[15px] border border-white dark:border-black" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
                        <h3 className="text-lg font-bold mb-2 text-white dark:text-black">
                            Google Ads Results - iHealth
                        </h3>
                        <div className="mt-10 overflow-hidden border-2 border-white rounded-lg relative max-w-screen-lg" style={{ aspectRatio: '4.32 / 1.6' }}>
                            <Image
                                src="/images/google-ads-ihealth-results.png"
                                priority
                                fill={true}
                                style={{ objectFit: 'contain' }}
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                alt="Google Ads results for iHealth"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 5: Final Collapsible Rows */}
            <div
                ref={ref5}
                className={`transform transition-all duration-700 ${
                    inView5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <section className="my-12">
                    <CollapsibleRows />
                </section>

                <div className="mt-20 overflow-hidden border-2 border-white rounded-lg relative max-w-screen-lg" style={{ aspectRatio: '3/1.6' }}>
                    <Image
                        src="/images/how-achieved-the-target-ihealth.png"
                        priority
                        fill={true}
                        style={{ objectFit: 'fill' }}
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        alt="Target achieved by iHealth"
                    />
                </div>
            </div>
        </div>
    );
}
