-- Create training leads table
CREATE TABLE public.training (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  job_title TEXT,
  company_name TEXT,
  comments TEXT,
  additional_info TEXT,
  form_tag TEXT NOT NULL DEFAULT 'training',
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.training ENABLE ROW LEVEL SECURITY;

-- Create policies for training leads
CREATE POLICY "Anyone can submit training leads" 
ON public.training 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view all training leads" 
ON public.training 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_training_updated_at
BEFORE UPDATE ON public.training
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();