-- 1) Fix Security Definer View: make it security invoker and protect author_email via column grants
ALTER VIEW public.public_blog_posts SET (security_invoker = on);

-- Allow public read of approved + published rows (RLS row filter)
DROP POLICY IF EXISTS "Public can read published posts" ON public.blog_submissions;
CREATE POLICY "Public can read published posts"
ON public.blog_submissions
FOR SELECT
TO anon, authenticated
USING (status = 'approved'::submission_status AND published = true);

-- Grant SELECT only on non-sensitive columns (author_email intentionally excluded)
GRANT SELECT (
  id, slug, title, category, cover_image_url, body_html, read_time,
  author_name, author_city, author_bio, status, published,
  submitted_at, reviewed_at, published_at
) ON public.blog_submissions TO anon, authenticated;

-- 2) Tighten storage upload policy on the public post-covers bucket
DROP POLICY IF EXISTS "Anyone can upload a cover" ON storage.objects;
CREATE POLICY "Anyone can upload a cover"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (
  bucket_id = 'post-covers'
  AND (storage.foldername(name))[1] = 'covers'
);