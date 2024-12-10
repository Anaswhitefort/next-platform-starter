import Image from 'next/image';
import { getNetlifyContext } from 'utils';
import { Card } from 'components/card';
import CustomizedAccordions from 'components/collapsible-rows-ihealth';

export const metadata = {
    title: 'Image CDN',
};

const sampleImage = '/images/corgi.jpg';

const ctx = getNetlifyContext();
const forceWebP = ctx === 'dev';
const sampleImageSrcSet = [640, 1280, 2048]
    .map((size) => {
        return `/.netlify/images?url=${sampleImage}&w=${size}${forceWebP ? '&fm=webp' : ''} ${size}w`;
    })
    .join(', ');

const nextImageSnippet = `
When running on Netlify, \`next/image\` is automatically set-up to use Netlify Image CDN for optimized images.

~~~jsx
import Image from 'next/image';

// In your component
<Image src="/images/i-health-uae-by-vexa.png" alt="Creative 01 from vexa digital marketing agency abu dhabi" /* ... additional props */ />
~~~
`;
const ecommerceMarketing01 = `Ecommerce Marketing - iHealth UAE`;

export default function Page() {
    return (
        <div className="flex flex-col gap-6 sm:gap-12">
            <section>
                <div
                    className="bg-transparent p-6 rounded-[15px] border border-white dark:border-black transform transition-all duration-700 opacity-100 translate-y-0"
                    style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}
                >
                    <h3 className="text-lg font-bold mb-2 text-white dark:text-black">{ecommerceMarketing01}</h3>
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

            <div
                className="bg-transparent p-6 rounded-[15px] border border-white dark:border-black transform transition-all duration-700 opacity-100 translate-y-0"
                style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}
            >
                <h3 className="text-lg font-bold mb-2 text-white dark:text-black">{ecommerceMarketing01}</h3>
                <div
                    className="mt-10 overflow-hidden border-2 border-white rounded-lg relative max-w-screen-lg"
                    style={{ aspectRatio: '3/1.6' }}
                >
                    <Image
                        src="/images/ihealth-sales-by-vexa.png"
                        priority
                        fill={true}
                        style={{ objectFit: 'fill' }}
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        alt="Creative 01 from vexa digital marketing agency abu dhabi"
                    />
                </div>
            </div>
        </div>
    );
}
