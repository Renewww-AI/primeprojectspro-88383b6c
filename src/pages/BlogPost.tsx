import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import SubPageLayout from "@/components/SubPageLayout";
import Seo, { breadcrumbJsonLd } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { getBlogPost, getRelatedPosts } from "@/data/blog";
import { supabase } from "@/integrations/supabase/client";
import { CommunityRow } from "@/lib/community";
import { sanitizeHtml } from "@/lib/sanitizeHtml";

const initials = (name: string) =>
  name.split(/\s+/).filter(Boolean).slice(0, 2).map((n) => n[0]?.toUpperCase()).join("");

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug);
  const related = post ? getRelatedPosts(post.slug, 2) : [];

  const [communityRow, setCommunityRow] = useState<CommunityRow | null>(null);
  const [communityLoading, setCommunityLoading] = useState(!post);
  const [communityNotFound, setCommunityNotFound] = useState(false);

  useEffect(() => {
    if (post || !slug) return;
    (async () => {
      setCommunityLoading(true);
      const { data } = await supabase
        .from("public_blog_posts" as any)
        .select("*")
        .eq("slug", slug)
        .maybeSingle();
      setCommunityLoading(false);
      if (!data) { setCommunityNotFound(true); return; }
      setCommunityRow(data as unknown as CommunityRow);
    })();
  }, [slug, post]);

  // Static post path
  if (post) {
    const mid = Math.ceil(post.body.length / 2);
    const firstHalf = post.body.slice(0, mid);
    const secondHalf = post.body.slice(mid);

    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.preview,
      image: post.heroImg,
      author: { "@type": "Organization", name: "Prime Projects Team" },
      publisher: {
        "@type": "Organization",
        name: "Prime Projects",
        logo: { "@type": "ImageObject", url: "https://primeprojects.pro/logo.png" },
      },
      articleSection: post.category,
      mainEntityOfPage: `https://primeprojects.pro/blog/${post.slug}`,
    };
    const breadcrumb = breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]);

    return (
      <>
        <Seo
          title={`${post.title} | Prime Projects`}
          description={post.preview}
          path={`/blog/${post.slug}`}
          image={post.heroImg}
          ogType="article"
          jsonLd={[articleJsonLd, breadcrumb]}
        />
        <SubPageLayout
          eyebrow={post.category}
          title={post.title}
          heroImg={post.heroImg}
          heroAlt={post.heroAlt}
        >
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
            <span>By Prime Projects Team</span>
            <span className="text-border">•</span>
            <span>{post.readTime}</span>
            <span className="text-border">•</span>
            <span>{post.category}</span>
          </div>

          <div className="space-y-6">
            {firstHalf.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
            ))}

            <blockquote className="border-l-4 border-olive bg-secondary rounded-r-2xl p-6 md:p-8 my-10">
              <p className="font-serif text-xl md:text-2xl text-charcoal leading-snug italic">
                "{post.pullQuote}"
              </p>
            </blockquote>

            {secondHalf.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </div>

          <div className="mt-16 bg-near-black text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-serif text-2xl md:text-3xl mb-3">Need help with your project?</h2>
            <p className="text-primary-foreground/85 mb-6 max-w-xl mx-auto">
              Get a free consultation — we'll talk through goals, scope, and realistic next steps.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#intake" className="bg-primary-foreground text-near-black rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition-all">
                Get a Free Consultation
              </Link>
              <a href="tel:7605255058" className="border border-primary-foreground/40 text-primary-foreground rounded-full px-6 py-3 text-sm font-medium hover:bg-primary-foreground hover:text-near-black transition-all">
                Call (760) 525-5058
              </a>
            </div>
          </div>

          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="font-serif text-3xl text-charcoal mb-6">Related Posts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    aria-label={`Read related article: ${r.title}`}
                    className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-md hover:-translate-y-1 transition-all group"
                  >
                    <img src={r.heroImg} alt={r.heroAlt} className="w-full h-44 object-cover" loading="lazy" width={800} height={450} />
                    <div className="p-6">
                      <span className="text-xs uppercase tracking-widest text-brass">{r.category}</span>
                      <h3 className="text-lg font-medium text-charcoal mt-2 mb-2">{r.title}</h3>
                      <span className="text-sm font-medium text-olive group-hover:underline">Read More →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </SubPageLayout>
      </>
    );
  }

  // Community fallback
  if (communityLoading) {
    return (
      <div className="min-h-screen bg-background pt-40 flex justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-olive" />
      </div>
    );
  }
  if (communityNotFound || !communityRow) return <Navigate to="/blog" replace />;

  const row = communityRow;
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
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(row.body_html) }}
        />

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

export default BlogPost;
