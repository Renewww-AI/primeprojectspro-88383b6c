
CREATE OR REPLACE FUNCTION public.sanitize_body_html()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
  cleaned text;
BEGIN
  cleaned := COALESCE(NEW.body_html, '');
  -- Remove script/style/iframe/object/embed/form blocks (with contents).
  cleaned := regexp_replace(cleaned, '<(script|style|iframe|object|embed|form)\b[^>]*>.*?</\1\s*>', '', 'gis');
  -- Remove any stray opening/closing tags of those types.
  cleaned := regexp_replace(cleaned, '</?(script|style|iframe|object|embed|form)\b[^>]*>', '', 'gi');
  -- Strip inline event handlers: on*="..." / on*='...' / on*=value
  cleaned := regexp_replace(cleaned, '\s+on[a-z]+\s*=\s*"[^"]*"', '', 'gi');
  cleaned := regexp_replace(cleaned, '\s+on[a-z]+\s*=\s*''[^'']*''', '', 'gi');
  cleaned := regexp_replace(cleaned, '\s+on[a-z]+\s*=\s*[^\s>]+', '', 'gi');
  -- Neutralize javascript: / data:text/html / vbscript: URIs in attributes.
  cleaned := regexp_replace(cleaned, '(href|src|xlink:href)\s*=\s*"(\s*)(javascript|vbscript|data:text/html)[^"]*"', '\1="#"', 'gi');
  cleaned := regexp_replace(cleaned, '(href|src|xlink:href)\s*=\s*''(\s*)(javascript|vbscript|data:text/html)[^'']*''', '\1=''#''', 'gi');
  NEW.body_html := cleaned;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS sanitize_body_html_trg ON public.blog_submissions;
CREATE TRIGGER sanitize_body_html_trg
BEFORE INSERT OR UPDATE OF body_html ON public.blog_submissions
FOR EACH ROW
EXECUTE FUNCTION public.sanitize_body_html();
