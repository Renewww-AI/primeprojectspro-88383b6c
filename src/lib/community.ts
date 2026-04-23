import { BlogPost, BlogCategory } from "@/data/blog";

export type CommunityRow = {
  id: string;
  slug: string | null;
  title: string;
  category: string;
  cover_image_url: string;
  body_html: string;
  read_time: string;
  author_name: string;
  author_city: string;
  author_bio: string | null;
  author_email: string;
  status: "pending" | "approved" | "rejected";
  rejection_note: string | null;
  published: boolean;
  submitted_at: string;
  reviewed_at: string | null;
  published_at: string | null;
};

export type CommunityBlogPost = BlogPost & {
  isCommunity: true;
  authorName: string;
  authorCity: string;
  authorBio: string | null;
  publishedAt: string | null;
  bodyHtml: string;
};

export const SUBMISSION_CATEGORIES: Exclude<BlogCategory, "All Posts">[] = [
  "Planning Your Project",
  "Finding the Right Contractor",
  "Budgeting & Costs",
  "North County Spotlight",
  "DIY vs Hire a Pro",
  "Seasonal Home Tips",
];

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

// Plain-text excerpt from HTML for previews
export function htmlToText(html: string): string {
  if (typeof window === "undefined") return html.replace(/<[^>]+>/g, " ");
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent?.replace(/\s+/g, " ").trim() ?? "";
}

export function calcReadTime(html: string): string {
  const text = htmlToText(html);
  const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

export function rowToBlogPost(row: CommunityRow): CommunityBlogPost {
  const text = htmlToText(row.body_html);
  const preview = text.length > 160 ? text.slice(0, 157).trimEnd() + "…" : text;
  return {
    slug: row.slug || row.id,
    title: row.title,
    category: row.category as Exclude<BlogCategory, "All Posts">,
    preview: preview || "Community-submitted story.",
    readTime: row.read_time,
    heroImg: row.cover_image_url,
    heroAlt: row.title,
    body: [],
    pullQuote: "",
    isCommunity: true,
    authorName: row.author_name,
    authorCity: row.author_city,
    authorBio: row.author_bio,
    publishedAt: row.published_at,
    bodyHtml: row.body_html,
  };
}
