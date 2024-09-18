import { OfficialShopifyPartner } from 'components/official-shopify-partner';
import CustomizedAccordions from 'components/collapsible-rows-shopify-services';
export default function Page() {
    return (
        <div className="flex flex-col gap-6 sm:gap-12">
            <section className="flex flex-col items-start gap-6 sm:gap-8">
                <div className="design flex justify-center">
                        We do shopify &nbsp;
                        <div className="droppingTexts">
                        <div>Custom UI/ UX</div> 
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
        </div>
    );
}

