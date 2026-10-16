import { Link } from '@tanstack/react-router';
import { ArrowUpRight, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ConversationButton } from './site-shell';
import { services, team, marketSteps } from '@/content/site';
import city from '@/assets/nairobi-editorial.jpg';
import dialogue from '@/assets/leadership-dialogue.jpg';
import janePhoto from '@/assets/jane-mburia.png.asset.json';
import mentorLogo from '@/assets/mentorcircle-logo.png.asset.json';
export {city,dialogue,mentorLogo};
export function SectionLabel({children}:{children:React.ReactNode}) {return <div className="eyebrow"><span/>{children}</div>;}
export function PageHero({eyebrow,title,description,image,mentor=false}:{eyebrow:string;title:string;description:string;image?:string;mentor?:boolean}) {return <section className={`page-hero ${image?'image-page-hero':''} ${mentor?'mentor-theme':''}`}>{image&&<><img src={image} alt={image===city?'Editorial view of Nairobi’s business district':'An editorial illustration of executive dialogue in a Nairobi workspace'} width={1920} height={1024}/><div className="image-shade"/></>}<div className="content-width"><SectionLabel>{eyebrow}</SectionLabel><h1>{title}</h1><p>{description}</p><ConversationButton interest={mentor?'MentorCircle Conversations':''}/></div></section>;}
export function ClosingCTA(){return <section className="closing-cta"><div className="content-width"><SectionLabel>YOUR NEXT CHAPTER</SectionLabel><h2>Let’s turn the right conversations<br className="desktop-break"/> into meaningful progress.</h2><p>Whether you are expanding into the region, strengthening your organisation, developing leaders or exploring a strategic partnership, start with a conversation.</p><Button asChild className="action-button"><Link to="/contact">Contact Lead Insights Africa <ArrowUpRight/></Link></Button></div></section>;}
export function ServiceGrid(){return <div className="service-grid">{services.map((s,i)=><Link to="/services/$slug" params={{slug:s.slug}} className="service-tile" key={s.slug}><div className="tile-top"><span>0{i+1}</span><ArrowUpRight size={24}/></div><h3>{s.title}</h3><p>{s.description}</p><span className="tile-link">Explore service <ArrowUpRight size={14}/></span></Link>)}</div>;}
export function MarketSteps(){return <div className="market-steps">{marketSteps.map((s,i)=><div key={s}><span>0{i+1}</span><h3>{s}</h3></div>)}</div>;}
export function PortraitPlaceholder(){return janePhoto.url?<img src={janePhoto.url} alt="Portrait of Jane Mburia, CEO and Principal Consultant of Lead Insights Africa Consulting" className="jane-portrait" width={640} height={640} loading="lazy"/>:<div className="portrait-placeholder" role="img" aria-label="Jane Mburia portrait awaiting an approved professional photograph"><UserRound size={76} strokeWidth={0.8}/><span>JANE MBURIA</span><p>Professional portrait forthcoming</p></div>;}
export function JaneFeature(){return <section className="section-band"><div className="content-width split-section"><PortraitPlaceholder/><div><SectionLabel>THE PERSPECTIVE BEHIND THE PRACTICE</SectionLabel><h2>Jane Mburia</h2><span className="role-label">CEO & PRINCIPAL CONSULTANT</span><p>{team[0]?.biography}</p><Button asChild variant="outline" className="action-button"><Link to="/jane-mburia">Meet Jane <ArrowUpRight/></Link></Button></div></div></section>;}
