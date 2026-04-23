import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import Seo, { breadcrumbJsonLd } from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCta from "@/components/FinalCta";
import CommunityCta from "@/components/CommunityCta";
import { Button } from "@/components/ui/button";
import { BLOG_CATEGORIES, BlogCategory, blogPosts, BlogPost } from "@/data/blog";
import { supabase } from "@/integrations/supabase/client";
import { CommunityBlogPost, CommunityRow, rowToBlogPost } from "@/lib/community";

type AnyPost = BlogPost | CommunityBlogPost;
const isCommunity = (p: AnyPost): p is CommunityBlogPost =>
  (p as CommunityBlogPost).isCommunity === true;

const Blog = () => {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<BlogCategory>("All Posts");
  const [community, setCommunity] = useState<CommunityBlogPost[]>([]);
  const onlyCommunity = params.get("filter") === "community";

  useEffect(() => {
    document.title = "The Homeowner's Guide | Prime Projects Blog";
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute(
      "content",
      "The Homeowner's Guide — clear, honest articles on planning, hiring, budgeting, and home improvement across San Diego County."
    );
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("blog_submissions")
        .select("*")
        .eq("status", "approved")
        .eq("published", true)
        .order("published_at", { ascending: false });
      if (data) setCommunity((data as CommunityRow[]).map(rowToBlogPost));
    })();
  }, []);

  const allPosts: AnyPost[] = useMemo(() => {
    const merged: AnyPost[] = [...community, ...blogPosts];
    if (onlyCommunity) return merged.filter(isCommunity);
    return merged;
  }, [community, onlyCommunity]);

  const filtered = useMemo(() => {
    return allPosts.filter((p) => {
      const matchesCat = activeCat === "All Posts" || p.category === activeCat;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.preview.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, activeCat, allPosts]);

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  const clearCommunityFilter = () => {
    const next = new URLSearchParams(params);
    next.delete("filter");
    setParams(next, { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="The Homeowner's Guide — San Diego Remodeling Blog | Prime Projects"
        description="Honest, practical articles on planning, hiring, and budgeting home improvement projects across San Diego County."
        path="/blog"
        jsonLd={breadcrumb}
      />
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
            alt="Sunlit modern home interior with warm wood tones and considered detailing"
            className="w-full h-full object-cover"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-near-black/65" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-brass mb-4">Blog</p>
          <h1 className="font-serif text-4xl md:text-6xl text-primary-foreground mb-5 leading-tight">
            The Homeowner's Guide
          </h1>
          <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto mb-8">
            Built for homeowners who value clarity, quality, and accountability.
          </p>

          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              aria-label="Search blog articles"
              className="w-full bg-card border border-border rounded-full pl-11 pr-5 py-3 text-sm text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-olive/30"
            />
          </div>

          <div className="mt-5 flex justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-7 w-full sm:w-auto border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-near-black"
            >
              <Link to="/blog/submit">Share Your Story</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-8 border-b border-border">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
          {BLOG_CATEGORIES.map((cat) => {
            const active = cat === activeCat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`text-sm rounded-full px-4 py-2 border transition-all ${
                  active
                    ? "bg-olive text-primary-foreground border-olive"
                    : "bg-card text-charcoal border-border hover:border-olive"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
        {onlyCommunity && (
          <div className="max-w-6xl mx-auto mt-4 flex items-center justify-center gap-3 text-sm text-charcoal">
            <span className="inline-flex items-center gap-2 bg-stone-alt rounded-full px-3 py-1.5">
              Showing community posts only
              <button onClick={clearCommunityFilter} className="text-olive hover:underline">Clear</button>
            </span>
          </div>
        )}
      </section>

      <section className="py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-16">
              {onlyCommunity ? "No community posts yet — be the first to share!" : "No articles match your search."}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  aria-label={`Read article: ${post.title}`}
                  className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-md hover:-translate-y-1 transition-all group flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={post.heroImg}
                      alt={post.heroAlt}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                      width={800}
                      height={450}
                    />
                    {isCommunity(post) && (
                      <span className="absolute top-3 left-3 inline-flex items-center text-xs px-2.5 py-1 rounded-full bg-near-black/85 text-primary-foreground backdrop-blur-sm">
                        Community
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-block text-xs uppercase tracking-widest text-brass mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-lg font-medium text-charcoal mb-2 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {post.preview}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      <span className="text-sm font-medium text-olive group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CommunityCta />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Blog;
