-- Create ai-agents table
CREATE TABLE public."ai-agents" (
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
ALTER TABLE public."ai-agents" ENABLE ROW LEVEL SECURITY;

-- Create policies for the ai-agents table
CREATE POLICY "Anyone can submit ai agent leads" 
ON public."ai-agents" 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view all ai agent leads" 
ON public."ai-agents" 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_ai_agents_updated_at
BEFORE UPDATE ON public."ai-agents"
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();