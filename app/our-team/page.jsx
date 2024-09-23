import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from '../../components/markdown';
import { OurTeam } from 'components/our-team';
export const metadata = {
    title: 'Out Team'
};


export default async function Page() {
    return (
        <>
        
            <div className="flex w-full pt-12 justify-center">
               <OurTeam />
            </div>
            <div className="flex w-full pt-12 justify-center">
                <FeedbackForm />
            </div>
            
            
        </>
    );
}