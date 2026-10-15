import {createFileRoute} from '@tanstack/react-router';
import {MapPin,Phone,Mail,Linkedin,ArrowUpRight} from 'lucide-react';
import {SectionLabel} from '@/components/site/editorial';
import {EnquiryForm} from '@/components/site/enquiry-form';
import {brand} from '@/content/site';
import {pageHead} from '@/lib/seo';
export const Route=createFileRoute('/contact')({component:Contact,head:()=>pageHead('Start a conversation','Contact Lead Insights Africa Consulting in Nairobi to discuss growth, market entry, leadership, coaching or a strategic partnership.','/contact')});
function Contact(){return <><section className="contact-heading content-width"><SectionLabel>LET’S CONNECT</SectionLabel><h1>Start a conversation.</h1><p>Tell us what you are working on. We will respond to explore how Lead Insights Africa Consulting can support your next step.</p></section><section className="content-width form-section contact-form-section"><aside className="contact-details"><div><MapPin/><h3>Based in Nairobi.<br/>Connected across Africa.</h3><p>Nairobi, Kenya</p></div><div><Phone/><h4>Call us</h4><a href="tel:+254721228498">+254 721 228498</a><a href="tel:+254796011014">+254 796 011014</a></div><div><Mail/><h4>Email us</h4><a href="mailto:jmburia@leadinsightsafrica.com">jmburia@leadinsightsafrica.com</a><a href="mailto:leadinsightsafrica@gmail.com">leadinsightsafrica@gmail.com</a></div><a className="text-link" href={brand.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> Jane Mburia on LinkedIn <ArrowUpRight size={16}/></a></aside><EnquiryForm/></section></>;}
