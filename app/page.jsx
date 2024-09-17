import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';
import { OfficialShopifyPartner } from 'components/official-shopify-partner';
import { StoreBuildForConversion } from 'components/store-build-for-conversion';
import { MarketingMainCards } from 'components/marketing-main-cards';
import BrandList from 'components/brand-list';
import CustomizedAccordions from 'components/collapsible-rows';

const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];

const titleExplainer = `Unlock the process with benefits you wouldn’t want to lose:`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-col gap-6 sm:gap-12">
            <section className="flex flex-col items-start gap-6 sm:gap-8">
                <ContextAlert />
               
                <div className="design flex justify-center">
                    We are &nbsp;
                    <div className="droppingTexts">
                        <div>Official Shopify Partner</div>
                        <div>from Abu Dhabi</div>
                        <div>Ads Specialist</div>
                        <div>E-commerce Consultant</div>
                        <div>Content Creators</div>
                        <div>Coders</div>
                    </div>
                </div>
            </section>
  
            <section className="flex flex-col gap-4">
                <h2
                    className="text-white lg:text-5xl text-3xl font-bold lg:!leading-[56px]"
                    style={{
                        backgroundImage: 'linear-gradient(to bottom, #fff, #fff, rgba(255, 255, 255, 0.6))',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',  // Fallback for non-webkit browsers
                        color: 'transparent',
                    }}
                >
                    Vexa, a creative team of Ad Specialists, Content Creators, and Web/app Developers based in Abu Dhabi
                </h2>
                <p
                    className="text-white text-s"
                    style={{
                        backgroundImage: 'linear-gradient(to bottom, #fff, #fff, rgba(255, 255, 255, 0.6))',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',  // Fallback for non-webkit browsers
                        color: 'transparent',
                    }}
                >
                    With years of experience supplying visuals for companies & marketing platforms.
                    Unlock the process with benefits you wouldn’t want to lose:
                </p>

                <section className="my-6 mt-4">
                    <MarketingMainCards />
                </section>

                <section className="my-6 mt-20">
                    <OfficialShopifyPartner />
                </section>

                <section className="my-6">
                    <StoreBuildForConversion />
                </section>

                <div className="container mx-auto py-2 lg:pt-24">
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="/images/Vexa-Marketing-agency-Abu-Dhabi-20.jpg"
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="/images/Vexa-Marketing-agency-Abu-Dhabi-21.jpg"
                                />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="/images/Vexa-Marketing-agency-Abu-Dhabi-03.jpg"
                                />
                            </div>
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="/images/Vexa-Marketing-agency-Abu-Dhabi-04.jpg"
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="/images/Vexa-Marketing-agency-Abu-Dhabi-11.jpg"
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="/images/Vexa-Marketing-agency-Abu-Dhabi-12.jpg"
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="/images/Vexa-Marketing-agency-Abu-Dhabi-13.jpg"
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="/images/Vexa-Marketing-agency-Abu-Dhabi-14.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <section className="my-12">
                    <CustomizedAccordions />
                </section>

                <section className="my-12">
                    <BrandList />
                </section>
            </section>
        </main>
    );
}
