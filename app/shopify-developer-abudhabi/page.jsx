import { OfficialShopifyPartner } from 'components/official-shopify-partner';
import CustomizedAccordions from 'components/collapsible-rows-shopify-services';
import { FeedbackForm } from 'components/feedback-form';
export default function Page() {
    return (
        <div className="flex flex-col gap-6 sm:gap-12">
            <section className="lex flex-col items-start gap-6 sm:gap-8">
                <div className="design flex justify-center text-white dark:text-black">
                        We do &nbsp;
                        <div className="droppingTexts">
                        <div>Shopify UI/ UX</div> 
                        <div>Development</div>   
                        <div>Store Setup</div>  
                        <div>Store Management</div> 
                        <div>Paid Campaigns</div>
                        <div>Dropshipping</div>
                        </div>
                 </div>
            </section>
            <section className="my-6 mt-20">
                    <OfficialShopifyPartner />
                </section>
                <section className="my-12">
                    <CustomizedAccordions />
                </section>
                <section className="my-12">
                    <FeedbackForm />
                </section>
        </div>
    );
}

