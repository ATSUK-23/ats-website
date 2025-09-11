-- Add tags column to assessment_results table
ALTER TABLE public.assessment_results 
ADD COLUMN IF NOT EXISTS tags TEXT[] DEFAULT ARRAY['ai-assessment-done'];