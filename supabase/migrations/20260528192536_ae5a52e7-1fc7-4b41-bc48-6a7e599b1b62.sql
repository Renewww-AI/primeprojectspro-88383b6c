-- Make the public view bypass RLS so anon can read approved posts without direct table access
ALTER VIEW public.public_blog_posts SET (security_invoker = off);

-- Remove the public direct-read policy that exposed all columns (including author_email)
DROP POLICY IF EXISTS "Public can read approved published rows" ON public.blog_submissions;

-- Ensure no direct column-level SELECT for public roles on the base table
REVOKE SELECT ON public.blog_submissions FROM anon, authenticated;

-- Allow public read access through the safe view only
GRANT SELECT ON public.public_blog_posts TO anon, authenticated;