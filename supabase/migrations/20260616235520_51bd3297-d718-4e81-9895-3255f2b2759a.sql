-- Remove public access to blog_submissions table (exposes author_email).
-- Public reads go through public_blog_posts view which omits email.
DROP POLICY IF EXISTS "Public can read published posts" ON public.blog_submissions;

-- Ensure view runs with definer rights so it can read the table while anon has no direct table SELECT.
ALTER VIEW public.public_blog_posts SET (security_invoker = false);

-- Grant read access to the view for public consumers.
GRANT SELECT ON public.public_blog_posts TO anon, authenticated;

-- Revoke any direct SELECT on the underlying table from public roles (defense in depth).
REVOKE SELECT ON public.blog_submissions FROM anon;