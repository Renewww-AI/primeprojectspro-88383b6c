import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { Loader2, Upload, CheckCircle2, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import RichTextEditor from "@/components/RichTextEditor";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { SUBMISSION_CATEGORIES, calcReadTime, htmlToText, slugify } from "@/lib/community";
import { useToast } from "@/hooks/use-toast";

const TITLE_MAX = 80;
const BIO_MAX = 160;
const MAX_FILE = 5 * 1024 * 1024;

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  city: z.string().trim().min(2, "City is required").max(80),
  title: z.string().trim().min(4, "Title must be at least 4 characters").max(TITLE_MAX, `Max ${TITLE_MAX} characters`),
  category: z.string().min(1, "Choose a category"),
  body: z.string().refine((v) => htmlToText(v).length >= 60, "Please write at least a short paragraph"),
  bio: z.string().max(BIO_MAX, `Max ${BIO_MAX} characters`).optional().or(z.literal("")),
  agreed: z.literal(true, { errorMap: () => ({ message: "You must agree to continue" }) }),
});

type FormState = {
  fullName: string;
  email: string;
  city: string;
  title: string;
  category: string;
  body: string;
  bio: string;
  agreed: boolean;
};

const initial: FormState = {
  fullName: "",
  email: "",
  city: "",
  title: "",
  category: "",
  body: "",
  bio: "",
  agreed: false,
};

const labelCls = "block text-sm font-medium text-charcoal mb-2";
const inputCls =
  "w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive transition-colors";
const errCls = "mt-1.5 text-xs text-destructive";

const BlogSubmit = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [coverError, setCoverError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const readTime = useMemo(() => calcReadTime(form.body), [form.body]);
  const titleCount = form.title.length;
  const bioCount = form.bio.length;

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (touched[key]) validateField(key, { ...form, [key]: value });
  };

  const validateField = (key: keyof FormState, source = form) => {
    const result = schema.safeParse(source);
    if (result.success) {
      setErrors((e) => ({ ...e, [key]: undefined }));
      return;
    }
    const issue = result.error.issues.find((i) => i.path[0] === key);
    setErrors((e) => ({ ...e, [key]: issue?.message }));
  };

  const onBlur = (key: keyof FormState) => {
    setTouched((t) => ({ ...t, [key]: true }));
    validateField(key);
  };

  const handleCover = (file: File | null) => {
    setCoverError(null);
    if (!file) {
      setCoverFile(null);
      setCoverPreview(null);
      return;
    }
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      setCoverError("Cover must be a JPG or PNG image");
      return;
    }
    if (file.size > MAX_FILE) {
      setCoverError("Cover must be 5MB or smaller");
      return;
    }
    setCoverFile(file);
    const reader = new FileReader();
    reader.onload = (e) => setCoverPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const isValid = useMemo(() => {
    const base = schema.safeParse(form).success;
    return base && !!coverFile && !coverError;
  }, [form, coverFile, coverError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const next: Partial<Record<keyof FormState, string>> = {};
      result.error.issues.forEach((i) => {
        const k = i.path[0] as keyof FormState;
        if (!next[k]) next[k] = i.message;
      });
      setErrors(next);
      setTouched({ fullName: true, email: true, city: true, title: true, category: true, body: true, bio: true, agreed: true });
      return;
    }
    if (!coverFile) {
      setCoverError("Cover image is required");
      return;
    }

    setSubmitting(true);
    try {
      // Upload cover
      const ext = coverFile.name.split(".").pop()?.toLowerCase() || "jpg";
      const path = `covers/${crypto.randomUUID()}.${ext}`;
      const { error: upErr } = await supabase.storage
        .from("post-covers")
        .upload(path, coverFile, { contentType: coverFile.type, upsert: false });
      if (upErr) throw upErr;
      const { data: pub } = supabase.storage.from("post-covers").getPublicUrl(path);

      const slugBase = slugify(form.title) || crypto.randomUUID().slice(0, 8);
      const slug = `${slugBase}-${crypto.randomUUID().slice(0, 6)}`;

      const { error: insErr } = await supabase.from("blog_submissions").insert({
        author_name: form.fullName.trim(),
        author_email: form.email.trim().toLowerCase(),
        author_city: form.city.trim(),
        author_bio: form.bio.trim() || null,
        title: form.title.trim(),
        slug,
        category: form.category,
        cover_image_url: pub.publicUrl,
        body_html: form.body,
        read_time: readTime,
      });
      if (insErr) throw insErr;
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      console.error(err);
      toast({
        title: "Submission failed",
        description: err?.message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    document.title = "Share Your Story — The Homeowner's Guide";
  }, []);

  if (done) {
    return (
      <div className="min-h-screen bg-background">
        <Seo title="Submission received | The Homeowner's Guide" description="Your story has been submitted." path="/blog/submit" />
        <Header />
        <section className="pt-40 pb-24 px-4 md:px-6 animate-in fade-in duration-500">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-olive/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8 text-olive" />
            </div>
            <p className="text-xs uppercase tracking-widest text-brass mb-4">Submission received</p>
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
              Your story has been submitted!
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              We review all posts within 1–2 business days. If approved, you'll get an email and your post will go live on The Homeowner's Guide.
            </p>
            <Button asChild size="lg" className="rounded-full px-8 bg-olive hover:bg-olive-dark text-primary-foreground">
              <Link to="/blog">Back to the Blog</Link>
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Share Your Story | The Homeowner's Guide"
        description="Submit your renovation win, contractor lesson, or neighborhood tip to The Homeowner's Guide."
        path="/blog/submit"
      />
      <Header />

      <section className="pt-32 pb-10 px-4 md:px-6 bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <Link to="/blog" className="text-sm text-olive hover:underline mb-6 inline-block">
            ← Back to the Blog
          </Link>
          <p className="text-xs uppercase tracking-widest text-brass mb-4">Community Submission</p>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-5 leading-tight">
            Share Your Story with the Community
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Got a renovation win, a contractor lesson, or a neighborhood tip? San Diego homeowners want to hear it.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-6">
        <form onSubmit={handleSubmit} noValidate className="max-w-3xl mx-auto space-y-7">
          {/* Name */}
          <div>
            <label htmlFor="fullName" className={labelCls}>Full Name <span className="text-destructive">*</span></label>
            <input
              id="fullName"
              type="text"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              onBlur={() => onBlur("fullName")}
              className={inputCls}
              required
            />
            {errors.fullName && touched.fullName && <p className={errCls}>{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelCls}>Email Address <span className="text-destructive">*</span></label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              onBlur={() => onBlur("email")}
              className={inputCls}
              required
            />
            <p className="mt-1.5 text-xs text-muted-foreground">Never displayed publicly.</p>
            {errors.email && touched.email && <p className={errCls}>{errors.email}</p>}
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className={labelCls}>City <span className="text-destructive">*</span></label>
            <input
              id="city"
              type="text"
              placeholder="e.g. Oceanside, Escondido"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              onBlur={() => onBlur("city")}
              className={inputCls}
              required
            />
            {errors.city && touched.city && <p className={errCls}>{errors.city}</p>}
          </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className={labelCls}>Post Title <span className="text-destructive">*</span></label>
            <input
              id="title"
              type="text"
              value={form.title}
              maxLength={TITLE_MAX}
              onChange={(e) => update("title", e.target.value)}
              onBlur={() => onBlur("title")}
              className={inputCls}
              required
            />
            <div className="mt-1.5 flex justify-between text-xs">
              <span className="text-destructive">
                {errors.title && touched.title ? errors.title : ""}
              </span>
              <span className={`${titleCount >= TITLE_MAX ? "text-destructive" : "text-muted-foreground"}`}>
                {titleCount}/{TITLE_MAX}
              </span>
            </div>
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className={labelCls}>Category <span className="text-destructive">*</span></label>
            <select
              id="category"
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
              onBlur={() => onBlur("category")}
              className={inputCls + " appearance-none"}
              required
            >
              <option value="">Choose a category…</option>
              {SUBMISSION_CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {errors.category && touched.category && <p className={errCls}>{errors.category}</p>}
          </div>

          {/* Cover image */}
          <div>
            <label className={labelCls}>Cover Image <span className="text-destructive">*</span></label>
            {coverPreview ? (
              <div className="relative rounded-md overflow-hidden border border-border">
                <img src={coverPreview} alt="Cover preview" className="w-full h-56 object-cover" />
                <button
                  type="button"
                  onClick={() => handleCover(null)}
                  className="absolute top-2 right-2 h-8 w-8 inline-flex items-center justify-center rounded-full bg-near-black/70 text-primary-foreground hover:bg-near-black"
                  aria-label="Remove cover"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label
                htmlFor="cover"
                className="flex flex-col items-center justify-center gap-2 h-44 bg-card border border-dashed border-border rounded-md cursor-pointer hover:border-olive transition-colors"
              >
                <Upload className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-charcoal">Click to upload a cover image</span>
                <span className="text-xs text-muted-foreground">JPG or PNG · max 5MB</span>
              </label>
            )}
            <input
              id="cover"
              type="file"
              accept="image/jpeg,image/png"
              className="sr-only"
              onChange={(e) => handleCover(e.target.files?.[0] ?? null)}
            />
            {coverError && <p className={errCls}>{coverError}</p>}
          </div>

          {/* Body */}
          <div>
            <label className={labelCls}>Post Body <span className="text-destructive">*</span></label>
            <RichTextEditor value={form.body} onChange={(html) => update("body", html)} />
            {errors.body && touched.body && <p className={errCls}>{errors.body}</p>}
          </div>

          {/* Bio */}
          <div>
            <label htmlFor="bio" className={labelCls}>Author Bio <span className="text-muted-foreground font-normal">(optional)</span></label>
            <textarea
              id="bio"
              value={form.bio}
              maxLength={BIO_MAX}
              onChange={(e) => update("bio", e.target.value)}
              onBlur={() => onBlur("bio")}
              placeholder="e.g. Homeowner in Carlsbad who survived a full kitchen remodel"
              rows={3}
              className={inputCls + " resize-none"}
            />
            <div className="mt-1.5 flex justify-end text-xs">
              <span className={`${bioCount >= BIO_MAX ? "text-destructive" : "text-muted-foreground"}`}>
                {bioCount}/{BIO_MAX}
              </span>
            </div>
          </div>

          {/* Read time */}
          <div>
            <label htmlFor="readTime" className={labelCls}>Estimated Read Time</label>
            <input
              id="readTime"
              type="text"
              value={readTime}
              readOnly
              className={inputCls + " bg-secondary cursor-default"}
            />
            <p className="mt-1.5 text-xs text-muted-foreground">Calculated from your post body.</p>
          </div>

          {/* Agreement */}
          <div className="rounded-md border border-border bg-card p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.agreed}
                onChange={(e) => update("agreed", e.target.checked)}
                onBlur={() => onBlur("agreed")}
                className="mt-1 h-4 w-4 rounded border-border accent-[hsl(var(--olive))]"
              />
              <span className="text-sm text-charcoal leading-relaxed">
                This is my original content and I agree to the PrimeProjects.Pro community guidelines.
              </span>
            </label>
            {errors.agreed && touched.agreed && <p className={errCls}>{errors.agreed}</p>}
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              size="lg"
              disabled={!isValid || submitting}
              className="w-full md:w-auto rounded-full px-8 bg-olive hover:bg-olive-dark text-primary-foreground disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting…
                </>
              ) : (
                "Submit for Review"
              )}
            </Button>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default BlogSubmit;
