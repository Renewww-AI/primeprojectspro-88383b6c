import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SubPageLayout from "@/components/SubPageLayout";
import { getBlogPost, getRelatedPosts } from "@/data/blog";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug);
  const related = post ? getRelatedPosts(post.slug, 2) : [];

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Prime Projects`;
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", post.preview);
    }
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  // Split body so we can insert pull quote roughly in the middle
  const mid = Math.ceil(post.body.length / 2);
  const firstHalf = post.body.slice(0, mid);
  const secondHalf = post.body.slice(mid);

  return (
    <SubPageLayout
      eyebrow={post.category}
      title={post.title}
      heroImg={post.heroImg}
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
          <p key={i} className="text-lg text-muted-foreground leading-relaxed">
            {p}
          </p>
        ))}

        <blockquote className="border-l-4 border-olive bg-secondary rounded-r-2xl p-6 md:p-8 my-10">
          <p className="font-serif text-xl md:text-2xl text-charcoal leading-snug italic">
            "{post.pullQuote}"
          </p>
        </blockquote>

        {secondHalf.map((p, i) => (
          <p key={i} className="text-lg text-muted-foreground leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 bg-near-black text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
        <h3 className="font-serif text-2xl md:text-3xl mb-3">
          Need help with your project?
        </h3>
        <p className="text-primary-foreground/75 mb-6 max-w-xl mx-auto">
          Get a free consultation — we'll talk through goals, scope, and realistic next steps.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/#intake"
            className="bg-primary-foreground text-near-black rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition-all"
          >
            Get a Free Consultation
          </Link>
          <a
            href="tel:6190000000"
            className="border border-primary-foreground/40 text-primary-foreground rounded-full px-6 py-3 text-sm font-medium hover:bg-primary-foreground hover:text-near-black transition-all"
          >
            Call (619) 000-0000
          </a>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Related Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/blog/${r.slug}`}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-md hover:-translate-y-1 transition-all group"
              >
                <img
                  src={r.heroImg}
                  alt={r.heroAlt}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <span className="text-xs uppercase tracking-widest text-brass">
                    {r.category}
                  </span>
                  <h3 className="text-lg font-medium text-charcoal mt-2 mb-2">
                    {r.title}
                  </h3>
                  <span className="text-sm font-medium text-olive group-hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </SubPageLayout>
  );
};

export default BlogPost;
