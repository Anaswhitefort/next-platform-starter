'use client';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import CustomizedAccordions from 'components/collapsible-rows-ihealth';
import CollapsibleRows from 'components/collapsible-rows-ihealth-target-achieved';

export function EcommMarketing() {
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <>

            <div className="font-sans">
                <div
                    ref={ref1}
                    className={`items-center lg:gap-y-6 bg-transparent transform transition-all duration-700 ${
                        inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
            <section>
                <div
                    className="bg-transparent p-6 rounded-[15px] border border-white dark:border-black transform transition-all duration-700"
                    style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}
                >
                    <h1 className="text-3xl font-bold mb-2 text-white dark:text-black">Ecommerce Marketing - iHealth UAE</h1>
                    <p className="text-sm text-white dark:text-black">
                        In 2022-2023, Vexa Advertising created the brand-new eCommerce platform into the GCC marketing bringing in 1 million AED in sales within a couple of months. Our team put together a smart strategy, ran targeted campaigns, and made sure the content hit the mark. We&apos;re all about getting real results and driving growth for our clients.
                    </p>
                </div>

                <div
                    className="mt-20 overflow-hidden border-2 border-white rounded-lg relative max-w-screen-lg"
                    style={{ aspectRatio: '3/1.6' }}
                >
                    <Image
                        src="/images/i-health-uae-by-vexa.png"
                        priority
                        fill={true}
                        style={{ objectFit: 'fill' }}
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        alt="Creative 01 from vexa digital marketing agency abu dhabi"
                    />
                </div>
            </section>

            <section className="my-12">
                <CustomizedAccordions />
            </section>
<div className="flex flex-col sm:flex gap-6 sm:gap-12">
    {/* iHealth Results */}
    <div
        className="bg-transparent p-6 rounded-[15px] border border-white dark:border-black transform transition-all duration-700"
        style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}
    >
        <h3 className="text-lg font-bold mb-2 text-white dark:text-black">
            Ecommerce Marketing - iHealth Results
        </h3>
        <div
            className="mt-10 overflow-hidden border-2 border-white rounded-lg relative max-w-screen-lg"
            style={{ aspectRatio: '3 / 2.15' }}
        >
            <Image
                src="/images/ihealth-sales-by-vexa.png"
                priority
                fill={true}
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 1024px) 100vw, 1024px"
                alt="Creative 01 from vexa digital marketing agency abu dhabi"
            />
        </div>
    </div>

    {/* Google Ads Results */}
    <div
        className="bg-transparent p-6 rounded-[15px] border border-white dark:border-black transform transition-all duration-700"
        style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}
    >
        <h3 className="text-lg font-bold mb-2 text-white dark:text-black">
            Google Ads Results - iHealth
        </h3>
        <div
            className="mt-10 overflow-hidden border-2 border-white rounded-lg relative max-w-screen-xl "
            style={{ aspectRatio: '4.32 / 1.6' }}
        >
            <Image
                src="/images/google-ads-ihealth-results.png"
                priority
                fill={true}
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 1024px) 100vw, 60vw"
                alt="Google Ads results for iHealth by vexa digital marketing agency"
            />
        </div>
    </div>
</div>
            <section className="my-12">
                <CollapsibleRows />
            </section>

            <div
                    className="mt-20 overflow-hidden border-2 border-white rounded-lg relative max-w-screen-lg"
                    style={{ aspectRatio: '3/1.6' }}
                >
                    <Image
                        src="/images/how-achieved-the-target-ihealth.png"
                        priority
                        fill={true}
                        style={{ objectFit: 'fill' }}
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        alt="Creative 01 from vexa digital marketing agency abu dhabi"
                    />
                </div>



                </div>
            </div>
        </>
    );
}
