'use client';  // Ensures the component runs on the client side

import Image from 'next/image';

export function CardImgText() {
    return (
        <div className="relative w-full max-w-6xl mx-auto mb-[2rem] flex flex-col lg:flex-row lg:items-center lg:gap-4">
            {/* Image Section */}
            <div className="relative w-full h-64 lg:w-[50%] lg:min-h-[300px] lg:h-auto overflow-hidden flex-shrink-0 mb-[5%]">
                <Image
                    src="/images/vexa-shopify-partner.jpg"  // Ensure this path is correct
                    alt="Official Shopify Partner Abu Dhabi"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 h-full w-full object-cover rounded-[15px]"
                />
            </div>

            {/* Card Section positioned to the right of the image */}
            <div className="relative flex flex-col lg:w-1/2 lg:items-start lg:pl-8 lg:pt-4 lg:bottom-0 lg:relative lg:mb-0">
                <div
                    className="bg-black border border-white rounded-[15px] p-8 w-full text-center lg:text-left"
                    style={{
                        boxShadow: '4px 6px 0px 4px #35cbee'  // Updated shadow
                    }}
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                        Official Shopify Partner in Abu Dhabi
                    </h2>
                    <p className="mt-2 sm:text-lg text-white text-left">
                        We provide comprehensive store development and digital marketing support since 2020.<br /><br />
                        - Custom Storefront
                        <br />
                        - Optimizing Store Speed
                        <br />
                        - Marketing Support
                        <br />
                        - Arabic Store Setup
                        <br />
                        - Store Management and more
                    </p>
                    <a
                        href="https://partners.shopify.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-[#35cbee] text-white px-4 py-2 rounded-lg font-semibold no-underline"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
}
