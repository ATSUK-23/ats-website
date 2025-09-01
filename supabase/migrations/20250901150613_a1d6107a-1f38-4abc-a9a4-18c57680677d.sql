-- Create SFA-list table for Sales Funnel Automation leads
CREATE TABLE public."SFA-list" (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  job_title TEXT,
  company_name TEXT,
  comments TEXT,
  form_tag TEXT NOT NULL DEFAULT 'sales-funnel-automation',
  additional_info TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public."SFA-list" ENABLE ROW LEVEL SECURITY;

-- Create policies for SFA leads
CREATE POLICY "Anyone can submit SFA leads" 
ON public."SFA-list" 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view all SFA leads" 
ON public."SFA-list" 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_sfa_list_updated_at
BEFORE UPDATE ON public."SFA-list"
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();