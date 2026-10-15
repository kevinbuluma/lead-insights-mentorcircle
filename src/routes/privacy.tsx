import {createFileRoute} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
import {ClosingCTA} from '@/components/site/editorial';
export const Route=createFileRoute('/privacy')({component:Privacy,head:()=>pageHead('Privacy Policy','Privacy information for enquiries to Lead Insights Africa Consulting. Full policy awaiting approval.','/privacy')});
function Privacy(){return <><section className="content-width legal-page"><h1>Privacy Policy</h1><p className="intro-lead">Full policy awaiting approval.</p><p>Information submitted through this website is stored securely and used to manage and respond to your enquiry. It is not used for unsolicited marketing.</p><p>For questions about your personal information, contact <a href="mailto:jmburia@leadinsightsafrica.com">jmburia@leadinsightsafrica.com</a>.</p></section><ClosingCTA/></>;}
