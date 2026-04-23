import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import SubPageLayout from "@/components/SubPageLayout";
import Seo, { breadcrumbJsonLd } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { CommunityRow } from "@/lib/community";

const initials = (name: string) =>
  name.split(/\s+/).filter(Boolean).slice(0, 2).map((n) => n[0]?.toUpperCase()).join("");

const CommunityPost = () => {
  const { slug } = useParams();
  const [row, setRow] = useState<CommunityRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("blog_submissions")
        .select("*")
        .eq("slug", slug)
        .eq("status", "approved")
        .eq("published", true)
        .maybeSingle();
      setLoading(false);
      if (error || !data) { setNotFound(true); return; }
      setRow(data as CommunityRow);
    })();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-40 flex justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-olive" />
      </div>
    );
  }
  if (notFound || !row) return <Navigate to="/blog" replace />;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: row.title, path: `/blog/${row.slug}` },
  ]);

  const publishedDate = row.published_at ? new Date(row.published_at).toLocaleDateString(undefined, {
    year: "numeric", month: "long", day: "numeric",
  }) : "";

  return (
    <>
      <Seo
        title={`${row.title} | The Homeowner's Guide`}
        description={row.title}
        path={`/blog/${row.slug}`}
        image={row.cover_image_url}
        ogType="article"
        jsonLd={breadcrumb}
      />
      <SubPageLayout
        eyebrow={row.category}
        title={row.title}
        heroImg={row.cover_image_url}
        heroAlt={row.title}
      >
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
          <span className="inline-flex items-center text-xs px-2.5 py-1 rounded-full bg-stone-alt text-charcoal border border-border">
            Community
          </span>
          <span>By {row.author_name}</span>
          <span className="text-border">•</span>
          <span>{row.author_city}</span>
          {publishedDate && (<><span className="text-border">•</span><span>{publishedDate}</span></>)}
          <span className="text-border">•</span>
          <span>{row.read_time}</span>
        </div>

        <div className="border-b border-border mb-10" />

        <div
          className="prose-content text-lg text-muted-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: row.body_html }}
        />

        {/* Author card */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
          <div className="w-16 h-16 rounded-full bg-olive text-primary-foreground flex items-center justify-center font-serif text-xl flex-shrink-0">
            {initials(row.author_name) || "•"}
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-brass mb-1">Community Contributor</p>
            <p className="font-serif text-xl text-charcoal">{row.author_name}</p>
            <p className="text-sm text-muted-foreground">{row.author_city}</p>
            {row.author_bio && <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{row.author_bio}</p>}
          </div>
        </div>

        {/* Submit your own CTA */}
        <div className="mt-10 bg-stone-alt rounded-2xl p-8 md:p-10 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-3">
            Have your own story to tell?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Submit it to The Homeowner's Guide.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 bg-olive hover:bg-olive-dark text-primary-foreground">
            <Link to="/blog/submit">Share Your Story</Link>
          </Button>
        </div>
      </SubPageLayout>
    </>
  );
};

export default CommunityPost;
