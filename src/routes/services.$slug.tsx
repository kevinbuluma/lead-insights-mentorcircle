import {createFileRoute,notFound} from '@tanstack/react-router';
import {services} from '@/content/site';
import {PageHero,SectionLabel,ClosingCTA} from '@/components/site/editorial';
import {ConversationButton} from '@/components/site/site-shell';
import {pageHead} from '@/lib/seo';
export const Route=createFileRoute('/services/$slug')({loader:({params})=>{const service=services.find(s=>s.slug===params.slug);if(!service)throw notFound();return service;},component:Service,head:({loaderData,params})=>pageHead(loaderData?.title??'Service unavailable',loaderData?.description??'Explore Lead Insights Africa advisory services.',`/services/${params.slug}`)});
function Service(){const s=Route.useLoaderData();return <><PageHero eyebrow="OUR EXPERTISE" title={s.title} description={s.short}/><section className="content-width intro-section"><div><SectionLabel>A PRACTICAL PARTNERSHIP</SectionLabel><h2>Support shaped<br/>around your priorities.</h2></div><div><p className="intro-lead">{s.description}</p><ul className="editorial-list">{s.details.map(d=><li key={d}>{d}</li>)}</ul><ConversationButton interest={s.title}>Discuss this service</ConversationButton></div></section><ClosingCTA/></>;}
