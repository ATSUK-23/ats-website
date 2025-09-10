-- Create assessment-results table to store AI assessment data and form submissions
CREATE TABLE public.assessment_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL,
  company_name TEXT,
  phone TEXT,
  additional_info TEXT,
  assessment_answers JSONB NOT NULL,
  overall_score NUMERIC NOT NULL,
  domain_scores JSONB NOT NULL,
  maturity_level TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.assessment_results ENABLE ROW LEVEL SECURITY;

-- Create policies for assessment results access
CREATE POLICY "Admins can view all assessment results" 
ON public.assessment_results 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can submit assessment results" 
ON public.assessment_results 
FOR INSERT 
WITH CHECK (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_assessment_results_updated_at
BEFORE UPDATE ON public.assessment_results
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();