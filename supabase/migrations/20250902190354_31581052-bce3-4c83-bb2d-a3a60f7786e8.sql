-- Create home-page-info table for homepage contact form submissions
CREATE TABLE public."home-page-info" (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  job_title TEXT,
  company_name TEXT,
  comments TEXT,
  form_tag TEXT NOT NULL DEFAULT 'home-page-info',
  additional_info TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public."home-page-info" ENABLE ROW LEVEL SECURITY;

-- Create policies for public access
CREATE POLICY "Anyone can submit home page info" 
ON public."home-page-info" 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view all home page info" 
ON public."home-page-info" 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_home_page_info_updated_at
BEFORE UPDATE ON public."home-page-info"
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();