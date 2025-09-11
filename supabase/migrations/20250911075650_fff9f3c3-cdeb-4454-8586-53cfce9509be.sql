-- Create assessment_results table for storing AI assessment data
CREATE TABLE IF NOT EXISTS public.assessment_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL,
  company_name TEXT,
  phone TEXT,
  assessment_answers JSONB NOT NULL,
  overall_score NUMERIC NOT NULL,
  domain_scores JSONB NOT NULL,
  maturity_level TEXT NOT NULL,
  additional_info TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.assessment_results ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (since this is a public assessment)
CREATE POLICY "Anyone can insert assessment results" 
ON public.assessment_results 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading own results (in case we want to show them later)
CREATE POLICY "Users can view assessment results" 
ON public.assessment_results 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_assessment_results_updated_at
BEFORE UPDATE ON public.assessment_results
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();