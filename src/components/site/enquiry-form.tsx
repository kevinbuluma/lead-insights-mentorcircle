import { useId, useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactSchema } from '@/lib/contact-schema';
import { services } from '@/content/site';
export function EnquiryForm({interest='',type='general'}:{interest?:string;type?:'general'|'individual'|'corporate'}) {
 const id=useId(); const [errors,setErrors]=useState<Record<string,string>>({}); const [busy,setBusy]=useState(false); const [sent,setSent]=useState(false);
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault(); const fd=new FormData(e.currentTarget); const input={...Object.fromEntries(fd),consent:fd.get('consent')==='on'};
  const parsed=contactSchema.safeParse(input);
  if(!parsed.success){setErrors(Object.fromEntries(parsed.error.issues.map(i=>[String(i.path[0]),i.message])));return;}
  setErrors({});setBusy(true);
  try{const response=await fetch('/api/public/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(parsed.data)});if(!response.ok)throw new Error('Unable to send');setSent(true);}catch{setErrors({form:'Your enquiry could not be saved. Please try again, or contact us by phone or email.'});}finally{setBusy(false);}
 }
 if(sent)return <div className="form-success" role="status"><CheckCircle2 size={40}/><h3>Thank you for starting a conversation.</h3><p>Your enquiry has been received by Lead Insights Africa Consulting.</p><Button variant="outline" onClick={()=>setSent(false)}>Send another enquiry <ArrowUpRight/></Button></div>;
 const field=(name:string,label:string,required=false,inputType='text')=><div className="form-field"><label htmlFor={`${id}-${name}`}>{label}{required?' *':''}</label><input id={`${id}-${name}`} name={name} type={inputType} required={required} maxLength={name==='email'?255:name==='phone'?40:150} autoComplete={name==='name'?'name':name==='email'?'email':name==='phone'?'tel':name==='organisation'?'organization':'country-name'} aria-invalid={!!errors[name]} aria-describedby={errors[name]?`${id}-${name}-error`:undefined}/>{errors[name]&&<span id={`${id}-${name}-error`} className="field-error">{errors[name]}</span>}</div>;
 return <form onSubmit={submit} className="enquiry-form" noValidate>
 <div className="form-grid">{field('name','Full name',true)}{field('organisation','Organisation')}{field('email','Email address',true,'email')}{field('phone','Phone number',false,'tel')}{field('country','Country',true)}
 <div className="form-field"><label htmlFor={`${id}-interest`}>Area of interest *</label><select id={`${id}-interest`} name="area_of_interest" defaultValue={interest} aria-invalid={!!errors.area_of_interest}><option value="">Please select</option>{services.map(s=><option key={s.slug}>{s.title}</option>)}{['Market entry support','MentorCircle Conversations','Speaking and advisory','General enquiry'].map(v=><option key={v}>{v}</option>)}</select>{errors.area_of_interest&&<span className="field-error">{errors.area_of_interest}</span>}</div></div>
 {interest==='MentorCircle Conversations'?<fieldset className="enquiry-type"><legend>I am enquiring as</legend><label><input type="radio" name="enquiry_type" value="individual" defaultChecked={type!=='corporate'}/> An individual</label><label><input type="radio" name="enquiry_type" value="corporate" defaultChecked={type==='corporate'}/> An organisation</label></fieldset>:<input type="hidden" name="enquiry_type" value={type}/>}
 <div className="form-field"><label htmlFor={`${id}-message`}>How can we support you? *</label><textarea id={`${id}-message`} name="message" rows={4} maxLength={4000} aria-invalid={!!errors.message}/>{errors.message&&<span className="field-error">{errors.message}</span>}</div>
 <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
 <label className="consent"><input type="checkbox" name="consent"/> <span>I agree to Lead Insights Africa Consulting using my details to respond to this enquiry. *</span></label>{errors.consent&&<p className="field-error">{errors.consent}</p>}
 <p className="privacy-note">Your details are used to manage your enquiry, not for unsolicited marketing.</p>
 {errors.form&&<p role="alert" className="field-error">{errors.form}</p>}
 <Button type="submit" disabled={busy} className="action-button">{busy?<><LoaderCircle className="animate-spin"/> Sending enquiry…</>:<>Send enquiry <ArrowUpRight/></>}</Button>
 </form>;
}
