-- Create table for vibe-coding leads
CREATE TABLE public."vibe-coding" (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  job_title TEXT,
  company_name TEXT,
  comments TEXT,
  form_tag TEXT NOT NULL,
  additional_info TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public."vibe-coding" ENABLE ROW LEVEL SECURITY;

-- Create policies for vibe-coding leads
CREATE POLICY "Admins can view all vibe-coding leads" 
ON public."vibe-coding" 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can submit vibe-coding leads" 
ON public."vibe-coding" 
FOR INSERT 
WITH CHECK (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_vibe_coding_updated_at
BEFORE UPDATE ON public."vibe-coding"
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();