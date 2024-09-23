import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';
import { OfficialShopifyPartner } from 'components/official-shopify-partner';
import { StoreBuildForConversion } from 'components/store-build-for-conversion';
import  BrandList  from 'components/brand-list';
import { MarketingMainCards }  from 'components/marketing-main-cards';
import  CollapsibleRows   from 'components/collapsible-rows';
import { dark } from 'daisyui/src/theming/themes';

const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];




const ctx = getNetlifyContext();

export default function Page() {

    return (
        <main className="flex flex-col gap-6 sm:gap-12">
            <section className="flex flex-col items-start gap-6 sm:gap-8">               
                <div className="design flex justify-center text-white dark:text-black">
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
          className="text-white dark:text-black lg:text-5xl text-3xl font-bold"
        >
Vexa, a creative team of Ad Specialists, Content Creators, and Web/app Developers based in Abu Dhabi</h2>
<p
  className="text-white text-s dark:text-black"
>
With years of experience supplying visuals for companies & marketing platforms.
Unlock the process with benefits you wouldn’t want to lose:
</p>
                    
               
            
            </section>

            <section className="my-6 mt-20">
                <MarketingMainCards />
            </section>
            <section className="my-6 mt-20">
                <OfficialShopifyPartner />
            </section>

            <section className="my-6">
                <StoreBuildForConversion />
            </section>

            <section className="my-6">
                <CollapsibleRows />
            </section>


          
           

 <div class="container mx-auto py-2 lg:pt-24">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="/images/Vexa-Marketing-agency-Abu-Dhabi-20.jpg" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="/images/Vexa-Marketing-agency-Abu-Dhabi-21.jpg" />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="/images/Vexa-Marketing-agency-Abu-Dhabi-03.jpg" />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="/images/Vexa-Marketing-agency-Abu-Dhabi-04.jpg" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="/images/Vexa-Marketing-agency-Abu-Dhabi-11.jpg" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="/images/Vexa-Marketing-agency-Abu-Dhabi-12.jpg" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="/images/Vexa-Marketing-agency-Abu-Dhabi-13.jpg" />
      </div>
            <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="/images/Vexa-Marketing-agency-Abu-Dhabi-14.jpg" />
      </div>
    </div>
  </div>
</div>
<section className="my-12">
                <BrandList />
            </section>
        </main>
    );
}

