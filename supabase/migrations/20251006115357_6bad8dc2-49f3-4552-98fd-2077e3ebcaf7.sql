-- Drop overly permissive SELECT policies on lead tables
DROP POLICY IF EXISTS "Admins can view all SFA leads" ON public."SFA-list";
DROP POLICY IF EXISTS "Admins can view all ai agent leads" ON public."ai-agents";
DROP POLICY IF EXISTS "Admins can view all ai leads" ON public.ai_leads;
DROP POLICY IF EXISTS "Admins can view all ai voice leads" ON public.ai_voice;
DROP POLICY IF EXISTS "Admins can view all e-commerce leads" ON public."e-commerce";
DROP POLICY IF EXISTS "Admins can view all ecommerce leads" ON public.ecommerce_leads;
DROP POLICY IF EXISTS "Admins can view all home page info" ON public."home-page-info";
DROP POLICY IF EXISTS "Admins can view all social content leads" ON public.social_content;
DROP POLICY IF EXISTS "Admins can view all training leads" ON public.training;
DROP POLICY IF EXISTS "Admins can view all vibe-coding leads" ON public."vibe-coding";

-- Create secure SELECT policies that require admin authentication
CREATE POLICY "Admins can view all SFA leads"
ON public."SFA-list"
FOR SELECT
TO authenticated
USING (is_admin());

CREATE POLICY "Admins can view all ai agent leads"
ON public."ai-agents"
FOR SELECT
TO authenticated
USING (is_admin());

CREATE POLICY "Admins can view all ai leads"
ON public.ai_leads
FOR SELECT
TO authenticated
USING (is_admin());

CREATE POLICY "Admins can view all ai voice leads"
ON public.ai_voice
FOR SELECT
TO authenticated
USING (is_admin());

CREATE POLICY "Admins can view all e-commerce leads"
ON public."e-commerce"
FOR SELECT
TO authenticated
USING (is_admin());

CREATE POLICY "Admins can view all ecommerce leads"
ON public.ecommerce_leads
FOR SELECT
TO authenticated
USING (is_admin());

CREATE POLICY "Admins can view all home page info"
ON public."home-page-info"
FOR SELECT
TO authenticated
USING (is_admin());

CREATE POLICY "Admins can view all social content leads"
ON public.social_content
FOR SELECT
TO authenticated
USING (is_admin());

CREATE POLICY "Admins can view all training leads"
ON public.training
FOR SELECT
TO authenticated
USING (is_admin());

CREATE POLICY "Admins can view all vibe-coding leads"
ON public."vibe-coding"
FOR SELECT
TO authenticated
USING (is_admin());