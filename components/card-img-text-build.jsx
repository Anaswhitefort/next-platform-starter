'use client';  // Ensures the component runs on the client side

import Image from 'next/image';

export function CardImgTextBuild() {
    return (
        <div className="relative w-full max-w-6xl mx-auto mb-[2rem] flex flex-col-reverse lg:flex-row lg:items-center lg:gap-4">
            {/* Card Section (Text) positioned to be first on desktop */}
            <div className="relative flex flex-col lg:w-1/2 lg:items-start lg:pl-2 lg:pt-4 lg:bottom-0 lg:relative lg:mb-0">
                <div
                    className="bg-black border border-white rounded-[15px] p-8 w-full text-center lg:text-left"
                    style={{
                        boxShadow: '4px 6px 0px 4px #35cbee'  // Updated shadow
                    }}
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Lightning Fast Website Build for Conversion
                    </h2>
                    <p className="mt-2 sm:text-lg text-white text-left">
                    We build fastest company marketing websites and e-commerce stores with latest technology.

                        <br></br>    <br></br>
                        Our websites are always upper Lighthouse threshold to outperform competitors. And designed focusing the pixel performance and conversion.
                    </p>
                
                </div>
            </div>

            {/* Image Section positioned to be first on mobile */}
            <div className="relative w-full h-64 lg:w-[50%] lg:min-h-[300px] lg:h-auto overflow-hidden flex-shrink-0 mb-[5%] lg:pt-4">
                <Image
                    src="/images/tech-used.png"  // Ensure this path is correct
                    alt="Official Shopify Partner Abu Dhabi"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 h-full w-full object-cover rounded-[15px]"
                />
            </div>
        </div>
    );
}
