REVOKE SELECT (author_email) ON public.blog_submissions FROM anon, authenticated;
REVOKE SELECT (rejection_note) ON public.blog_submissions FROM anon, authenticated;