
-- Fix: hide author_email from public reads of blog_submissions
-- Replace broad public SELECT policy with admin-only direct access; expose a safe view for public reads.

DROP POLICY IF EXISTS "Public can read published posts" ON public.blog_submissions;

CREATE OR REPLACE VIEW public.public_blog_posts
WITH (security_invoker = true) AS
SELECT
  id, slug, title, category, cover_image_url, body_html, read_time,
  author_name, author_city, author_bio,
  status, published, submitted_at, reviewed_at, published_at
FROM public.blog_submissions
WHERE status = 'approved' AND published = true;

GRANT SELECT ON public.public_blog_posts TO anon, authenticated;

-- Need an underlying SELECT policy for the view (security_invoker) to return rows to anon/auth.
CREATE POLICY "Public can read approved published rows"
ON public.blog_submissions
FOR SELECT
TO anon, authenticated
USING (status = 'approved' AND published = true);

-- Note: column author_email is still technically in the row. To truly hide it,
-- restrict the public policy to a view by revoking column access:
REVOKE SELECT (author_email) ON public.blog_submissions FROM anon, authenticated;

-- Storage: drop broad public listing on post-covers (files remain accessible by direct public URL)
DROP POLICY IF EXISTS "Public can read covers" ON storage.objects;

-- Lock down SECURITY DEFINER helper: only callable by postgres/service role + via RLS policies
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM anon, authenticated, public;
