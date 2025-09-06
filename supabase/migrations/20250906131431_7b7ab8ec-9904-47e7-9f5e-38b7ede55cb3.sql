-- Create e-commerce table for lead capture
CREATE TABLE public."e-commerce" (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  mobile TEXT,
  product_niche TEXT NOT NULL,
  patent_status TEXT,
  unique_features TEXT,
  sales_channels TEXT[] DEFAULT '{}',
  sku_count TEXT,
  monthly_sales TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public."e-commerce" ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (anyone can submit leads)
CREATE POLICY "Anyone can submit e-commerce leads" 
ON public."e-commerce" 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view all e-commerce leads" 
ON public."e-commerce" 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_ecommerce_updated_at
BEFORE UPDATE ON public."e-commerce"
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();