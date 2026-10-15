import { createFileRoute } from '@tanstack/react-router';
import { contactSchema } from '@/lib/contact-schema';
export const Route=createFileRoute('/api/public/contact')({server:{handlers:{POST:async({request})=>{
 const origin=request.headers.get('origin');
 if(!origin || origin!==new URL(request.url).origin)return Response.json({error:'Request not permitted.'},{status:403});
 if(!request.headers.get('content-type')?.includes('application/json'))return Response.json({error:'Expected JSON.'},{status:415});
 if(Number(request.headers.get('content-length')??0)>16000)return Response.json({error:'Request too large.'},{status:413});
 try{
  const body=await request.text();if(body.length>16000)return Response.json({error:'Request too large.'},{status:413});
  const parsed=contactSchema.safeParse(JSON.parse(body));if(!parsed.success)return Response.json({error:'Please check your enquiry details.'},{status:400});
  const {website,...submission}=parsed.data;
  const {supabaseAdmin}=await import('@/integrations/supabase/client.server');
  const {error}=await supabaseAdmin.from('contact_submissions').insert(submission);
  if(error)return Response.json({error:'Unable to save enquiry. Please try again.'},{status:503});
  return Response.json({success:true},{status:201});
 }catch{return Response.json({error:'Unable to process enquiry. Please try again.'},{status:400});}
}}}});
