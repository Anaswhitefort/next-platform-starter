import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from '../../components/markdown';
import { AboutUs } from 'components/about-us';
export const metadata = {
    title: 'Out Team'
};


export default async function Page() {
    return (
        <>
        
            <div className="flex w-full pt-12 justify-center">
                <AboutUs />
            </div>
            <div className="flex w-full pt-12 justify-center">
                <FeedbackForm />
            </div>
            
            
        </>
    );
}