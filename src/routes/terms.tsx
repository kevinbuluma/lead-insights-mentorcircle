import {createFileRoute} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
import {ClosingCTA} from '@/components/site/editorial';
export const Route=createFileRoute('/terms')({component:Terms,head:()=>pageHead('Terms','Website terms for Lead Insights Africa Consulting. Full terms awaiting approval.','/terms')});
function Terms(){return <><section className="content-width legal-page"><h1>Terms</h1><p className="intro-lead">Full terms awaiting approval.</p><p>For questions about an advisory engagement or programme, please contact Lead Insights Africa Consulting directly.</p><a className="text-link" href="mailto:jmburia@leadinsightsafrica.com">jmburia@leadinsightsafrica.com</a></section><ClosingCTA/></>;}
