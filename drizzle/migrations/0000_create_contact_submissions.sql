CREATE TABLE public.contact_submissions (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL,
 organisation text NOT NULL DEFAULT '',
 email text NOT NULL,
 phone text NOT NULL DEFAULT '',
 country text NOT NULL,
 area_of_interest text NOT NULL,
 message text NOT NULL,
 consent boolean NOT NULL,
 enquiry_type text NOT NULL DEFAULT 'general'
);
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.contact_submissions IS 'Private enquiries. Owner reviews through Lovable Cloud Database; visitors have no read access.';