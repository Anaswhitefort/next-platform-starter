import Link from 'next/link';
import { Card } from 'components/card';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';
import { OfficialShopifyPartner } from 'components/official-shopify-partner';
import { StoreBuildForConversion } from 'components/store-build-for-conversion';
import  BrandList  from 'components/brand-list';
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
    color: 'transparent'
  }}
>
Vexa, a creative team of Ad Specialists, Content Creators, and Web/app Developers based in Abu Dhabi</h2>
<p
  className="text-white text-s"
  style={{
    backgroundImage: 'linear-gradient(to bottom, #fff, #fff, rgba(255, 255, 255, 0.6))',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',  // Fallback for non-webkit browsers
    color: 'transparent'
  }}
>
With years of experience supplying visuals for companies & marketing platforms.
Unlock the process with benefits you wouldn’t want to lose:
</p>
                    
               
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-20"> {/* Grid layout starts here */}
                        <div className="mt-2"> 
                            <RuntimeDigitalMarketing />
                        </div>
                        <div className="mt-2"> 
                            <WebappDesigningDevelopment />
                        </div>
                        <div className="mt-2"> 
                            <EcommerceOnboarding />
                        </div>
                        <div className="mt-2"> 
                            <ContentCreationGraphicDesigning />
                        </div>
                    </div>
            </section>


            <section className="my-6 mt-20">
                <OfficialShopifyPartner />
            </section>

            <section className="my-6">
                <StoreBuildForConversion />
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

function RuntimeContextCard() {
    const title = `Creative team of Ad Specialists, Content Creators, and Web/app Developers, based in Abu Dhabi`;
    return <Card title={title} text="With years of experience supplying visuals for companies & marketing platforms." />;
}
function RuntimeDigitalMarketing() {
    const title = `Digital Marketing`;
    return <Card title={title} text="Specialized in Lead and Sales oriented digital marketing strategies. Tailored to your business expansion goals, we offer services that seamlessly integrate with your objectives. Through a strategy-first methodology, our experts discern the optimal approach that harmonizes with your business aspirations." />;
}

function WebappDesigningDevelopment() {
    const title = `Web/app Designing & Development`;
    return <Card title={title} text="Our crafted websites fuel conversions, meticulously enhancing user experience to cater to your customers' utmost satisfaction. Serving as a pivotal initial interaction for potential leads, the ease of navigation and engagement on your website could spell the distinction between success and setback." />;
}

function EcommerceOnboarding() {
    const title = `GCC E-commerce Onboarding`;
    return <Card title={title} text="Expand your business into the GCC market with our expert support. Based in Abu Dhabi, we assist European and UK manufacturers in establishing a strong presence through e-commerce development, marketplace onboarding, inventory management, and targeted marketing for sustainable growth." />;
}

function ContentCreationGraphicDesigning() {
    const title = `Content Creation & Graphic Designing`;
    return <Card title={title} text="Specialized in Lead and Sales oriented digital marketing strategies. Tailored to your business expansion goals, we offer services that seamlessly integrate with your objectives. Through a strategy-first methodology, our experts discern the optimal approach that harmonizes with your business aspirations." />;
}
