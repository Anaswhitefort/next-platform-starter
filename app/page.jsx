import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';
const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];


const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;
const titleExplainer = `Unlock the process with benefits you wouldn’t want to lose:`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

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
    <RuntimeContextCard /> 
    <div className="mt-8"> 
            <Markdown content={titleExplainer} />
        </div>
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2"> {/* Grid layout starts here */}
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



            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
            </section>
            {/* !!cards?.length && <CardsGrid cards={cards} /> */}
        </main>
    );
}

function RuntimeContextCard() {
    const title = `Creative team of ads specialists, content creators, and web/app developers, based in Abu Dhabi`;
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
