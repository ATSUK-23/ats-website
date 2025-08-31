-- Create a general leads table for AI Solutions forms
CREATE TABLE public.ai_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  job_title TEXT,
  company_name TEXT,
  comments TEXT,
  form_tag TEXT NOT NULL, -- 'Ai-Audit', 'Agents', 'Voice-AI'
  additional_info TEXT
);

-- Enable Row Level Security
ALTER TABLE public.ai_leads ENABLE ROW LEVEL SECURITY;

-- Create policies for ai_leads
CREATE POLICY "Anyone can submit ai leads" 
ON public.ai_leads 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view all ai leads" 
ON public.ai_leads 
FOR SELECT 
USING (true);

-- Add trigger for automatic timestamp updates
CREATE TRIGGER update_ai_leads_updated_at
BEFORE UPDATE ON public.ai_leads
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();