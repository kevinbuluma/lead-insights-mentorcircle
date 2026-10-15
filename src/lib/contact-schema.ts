import { z } from 'zod';
export const contactSchema = z.object({
 name:z.string().trim().min(2,'Please enter your full name.').max(100),
 organisation:z.string().trim().max(150).default(''),
 email:z.string().trim().email('Please enter a valid email address.').max(255),
 phone:z.string().trim().max(40).default(''),
 country:z.string().trim().min(2,'Please enter your country.').max(100),
 area_of_interest:z.string().trim().min(1,'Please choose an area of interest.').max(150),
 message:z.string().trim().min(10,'Please tell us a little more (at least 10 characters).').max(4000),
 consent:z.boolean().refine(v=>v,'Please agree so we can respond to your enquiry.'),
 enquiry_type:z.enum(['general','individual','corporate']).default('general'),
 website:z.string().max(0).optional(),
});
