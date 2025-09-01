-- Create social-content table for social content leads
CREATE TABLE public.social_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  job_title TEXT,
  company_name TEXT,
  comments TEXT,
  form_tag TEXT NOT NULL DEFAULT 'social-content',
  additional_info TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.social_content ENABLE ROW LEVEL SECURITY;

-- Create policies for social content leads
CREATE POLICY "Anyone can submit social content leads" 
ON public.social_content 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view all social content leads" 
ON public.social_content 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_social_content_updated_at
BEFORE UPDATE ON public.social_content
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();