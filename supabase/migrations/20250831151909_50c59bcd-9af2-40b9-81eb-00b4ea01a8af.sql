-- Create table for e-commerce lead form submissions
CREATE TABLE public.ecommerce_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company_name TEXT,
  product_niche TEXT NOT NULL,
  sales_channels TEXT[] DEFAULT '{}',
  sales_volume TEXT NOT NULL,
  marketing_budget TEXT,
  biggest_challenge TEXT,
  goals TEXT,
  additional_info TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.ecommerce_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form)
CREATE POLICY "Anyone can submit ecommerce leads" 
ON public.ecommerce_leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admin access (you can modify this later based on your auth setup)
CREATE POLICY "Admins can view all ecommerce leads" 
ON public.ecommerce_leads 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_ecommerce_leads_updated_at
BEFORE UPDATE ON public.ecommerce_leads
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();