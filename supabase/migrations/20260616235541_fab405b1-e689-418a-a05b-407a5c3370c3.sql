-- Use security_invoker view (linter-preferred) and enforce column-level privileges instead.
ALTER VIEW public.public_blog_posts SET (security_invoker = true);

-- Re-add public SELECT policy on the table; column privileges (below) prevent email exposure.
CREATE POLICY "Public can read published posts"
ON public.blog_submissions
FOR SELECT
TO anon, authenticated
USING (status = 'approved'::submission_status AND published = true);

-- Revoke all SELECT, then grant only non-sensitive columns to anon.
REVOKE SELECT ON public.blog_submissions FROM anon;
GRANT SELECT (
  id, slug, title, category, cover_image_url, body_html, read_time,
  author_name, author_city, author_bio, status, published,
  submitted_at, reviewed_at, published_at
) ON public.blog_submissions TO anon;

-- Authenticated role: same column restriction for non-admins; admins use has_role() via existing admin policy
-- which is enforced by RLS, but column privileges apply to the role itself. Grant full column access to authenticated
-- so admin reads still work; non-admin authenticated users are limited by RLS to published rows only.
GRANT SELECT ON public.blog_submissions TO authenticated;