
import { EcommMarketing } from 'components/ecom-marketing-ihealth';
export const metadata = {
    title: 'Ecommerce Marketing'
};


export default async function Page() {
    return (
        <>
        
            <div className="flex w-full pt-12 justify-center">
                <EcommMarketing />
            </div>
            
            
        </>
    );
}