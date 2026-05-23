import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, X, ArrowLeft, Loader2, LogOut, Eye, EyeOff } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { CommunityRow } from "@/lib/community";
import { useToast } from "@/hooks/use-toast";

type Tab = "pending" | "all";

const StatusPill = ({ status }: { status: CommunityRow["status"] }) => {
  const map: Record<CommunityRow["status"], string> = {
    pending: "bg-star/15 text-[hsl(var(--star))] border-[hsl(var(--star))]/30",
    approved: "bg-olive/10 text-olive border-olive/30",
    rejected: "bg-destructive/10 text-destructive border-destructive/30",
  };
  return (
    <span className={`inline-flex text-xs px-2.5 py-1 rounded-full border ${map[status]} capitalize`}>
      {status}
    </span>
  );
};

const AdminSubmissions = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [authChecked, setAuthChecked] = useState(false);
  const [rows, setRows] = useState<CommunityRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<Tab>("pending");
  const [selected, setSelected] = useState<CommunityRow | null>(null);
  const [acting, setActing] = useState(false);
  const [showReject, setShowReject] = useState(false);
  const [rejectNote, setRejectNote] = useState("");

  useEffect(() => {
    document.title = "Blog Submissions | Admin";
    let unsub: (() => void) | undefined;

    const check = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate("/admin/login", { replace: true });
        return;
      }
      const { data: role } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", data.session.user.id)
        .eq("role", "admin")
        .maybeSingle();
      if (!role) {
        await supabase.auth.signOut();
        navigate("/admin/login", { replace: true });
        return;
      }
      setAuthChecked(true);
      load();
    };

    const { data: sub } = supabase.auth.onAuthStateChange((_evt, session) => {
      if (!session) navigate("/admin/login", { replace: true });
    });
    unsub = () => sub.subscription.unsubscribe();

    check();
    return () => unsub?.();
  }, [navigate]);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("blog_submissions")
      .select("*")
      .order("submitted_at", { ascending: false });
    setLoading(false);
    if (error) {
      toast({ title: "Failed to load", description: error.message, variant: "destructive" });
      return;
    }
    setRows((data ?? []) as CommunityRow[]);
  };

  const filtered = useMemo(() => {
    if (tab === "pending") return rows.filter((r) => r.status === "pending");
    return rows.filter((r) => r.status === "approved");
  }, [rows, tab]);

  const approve = async (row: CommunityRow) => {
    setActing(true);
    const { error } = await supabase
      .from("blog_submissions")
      .update({
        status: "approved",
        published: true,
        reviewed_at: new Date().toISOString(),
        published_at: new Date().toISOString(),
      })
      .eq("id", row.id);
    setActing(false);
    if (error) {
      toast({ title: "Approve failed", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Post approved & published" });
    setSelected(null);
    load();
  };

  const reject = async (row: CommunityRow, note: string) => {
    setActing(true);
    const { error } = await supabase
      .from("blog_submissions")
      .update({
        status: "rejected",
        published: false,
        rejection_note: note || null,
        reviewed_at: new Date().toISOString(),
      })
      .eq("id", row.id);
    setActing(false);
    if (error) {
      toast({ title: "Reject failed", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Submission rejected" });
    setShowReject(false);
    setRejectNote("");
    setSelected(null);
    load();
  };

  const togglePublish = async (row: CommunityRow) => {
    const { error } = await supabase
      .from("blog_submissions")
      .update({
        published: !row.published,
        published_at: !row.published ? new Date().toISOString() : row.published_at,
      })
      .eq("id", row.id);
    if (error) {
      toast({ title: "Update failed", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: !row.published ? "Post published" : "Post unpublished" });
    load();
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-40 pb-24 flex justify-center">
          <Loader2 className="w-6 h-6 animate-spin text-olive" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Blog Submissions | Admin" description="Review community blog submissions." path="/admin/blog-submissions" />
      <Header />
      <section className="pt-32 pb-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-brass mb-2">Admin</p>
              <h1 className="font-serif text-3xl md:text-4xl text-charcoal">Blog Submissions</h1>
            </div>
            <Button onClick={signOut} variant="outline" className="rounded-full">
              <LogOut className="w-4 h-4" /> Sign out
            </Button>
          </div>

          <div className="inline-flex p-1 bg-secondary rounded-full mb-6">
            {(["pending", "all"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`text-sm px-5 py-2 rounded-full transition-colors ${
                  tab === t ? "bg-olive text-primary-foreground" : "text-charcoal hover:text-olive"
                }`}
              >
                {t === "pending" ? "Pending" : "All Posts"}
              </button>
            ))}
          </div>

          {selected ? (
            <SubmissionPreview
              row={selected}
              onBack={() => { setSelected(null); setShowReject(false); }}
              onApprove={() => approve(selected)}
              onReject={() => setShowReject(true)}
              onTogglePublish={() => togglePublish(selected)}
              acting={acting}
              showReject={showReject}
              rejectNote={rejectNote}
              setRejectNote={setRejectNote}
              confirmReject={() => reject(selected, rejectNote)}
              cancelReject={() => { setShowReject(false); setRejectNote(""); }}
            />
          ) : loading ? (
            <div className="py-20 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-olive" /></div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center text-muted-foreground bg-card border border-border rounded-2xl">
              {tab === "pending" ? "No pending submissions." : "No published community posts yet."}
            </div>
          ) : (
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="hidden md:grid grid-cols-[1.5fr_2fr_1.2fr_1fr_1fr_auto] gap-4 px-5 py-3 border-b border-border text-xs uppercase tracking-widest text-muted-foreground">
                <span>Author</span>
                <span>Title</span>
                <span>Category</span>
                <span>Submitted</span>
                <span>Status</span>
                <span></span>
              </div>
              {filtered.map((row) => (
                <div
                  key={row.id}
                  className="grid md:grid-cols-[1.5fr_2fr_1.2fr_1fr_1fr_auto] gap-4 px-5 py-4 border-b border-border last:border-b-0 items-center hover:bg-secondary/40 transition-colors"
                >
                  <div className="text-sm text-charcoal">
                    <div className="font-medium">{row.author_name}</div>
                    <div className="text-xs text-muted-foreground">{row.author_city}</div>
                  </div>
                  <div className="text-sm text-charcoal font-medium">{row.title}</div>
                  <div className="text-xs text-muted-foreground">{row.category}</div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(row.submitted_at).toLocaleDateString()}
                  </div>
                  <div><StatusPill status={row.status} /></div>
                  <div className="flex gap-2 justify-end">
                    {tab === "all" && row.status === "approved" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full"
                        onClick={() => togglePublish(row)}
                      >
                        {row.published ? <><EyeOff className="w-3.5 h-3.5" />Unpublish</> : <><Eye className="w-3.5 h-3.5" />Publish</>}
                      </Button>
                    )}
                    <Button
                      size="sm"
                      className="rounded-full bg-olive hover:bg-olive-dark text-primary-foreground"
                      onClick={() => setSelected(row)}
                    >
                      Review
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

const SubmissionPreview = ({
  row, onBack, onApprove, onReject, onTogglePublish, acting,
  showReject, rejectNote, setRejectNote, confirmReject, cancelReject,
}: {
  row: CommunityRow;
  onBack: () => void;
  onApprove: () => void;
  onReject: () => void;
  onTogglePublish: () => void;
  acting: boolean;
  showReject: boolean;
  rejectNote: string;
  setRejectNote: (s: string) => void;
  confirmReject: () => void;
  cancelReject: () => void;
}) => (
  <div>
    <button onClick={onBack} className="inline-flex items-center gap-2 text-sm text-olive hover:underline mb-4">
      <ArrowLeft className="w-4 h-4" /> Back to list
    </button>

    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <img src={row.cover_image_url} alt={row.title} className="w-full h-72 md:h-96 object-cover" />
      <div className="p-6 md:p-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs uppercase tracking-widest text-brass">{row.category}</span>
          <span className="inline-flex items-center text-xs px-2.5 py-1 rounded-full bg-stone-alt text-charcoal border border-border">
            Community
          </span>
          <StatusPill status={row.status} />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4 leading-tight">{row.title}</h2>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
          <span>By {row.author_name}</span>
          <span className="text-border">•</span>
          <span>{row.author_city}</span>
          <span className="text-border">•</span>
          <span>{row.read_time}</span>
        </div>
        <div
          className="prose-content text-charcoal"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(row.body_html) }}
        />
        {row.author_bio && (
          <div className="mt-10 p-5 bg-secondary rounded-xl text-sm text-charcoal">
            <span className="font-medium">About the author: </span>{row.author_bio}
          </div>
        )}
      </div>
    </div>

    {showReject && (
      <div className="mt-6 bg-card border border-border rounded-2xl p-6">
        <h3 className="font-serif text-xl text-charcoal mb-3">Reject this submission</h3>
        <p className="text-sm text-muted-foreground mb-4">Optionally include a short note for the author.</p>
        <textarea
          rows={3}
          value={rejectNote}
          onChange={(e) => setRejectNote(e.target.value)}
          maxLength={400}
          placeholder="e.g. Looks like a great topic — could you add more concrete detail and resubmit?"
          className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-olive/30"
        />
        <div className="flex flex-wrap gap-3 mt-4 justify-end">
          <Button variant="outline" onClick={cancelReject} className="rounded-full">Cancel</Button>
          <Button
            onClick={confirmReject}
            disabled={acting}
            className="rounded-full bg-destructive hover:bg-destructive/90 text-destructive-foreground"
          >
            {acting ? <Loader2 className="w-4 h-4 animate-spin" /> : <X className="w-4 h-4" />} Reject submission
          </Button>
        </div>
      </div>
    )}

    {!showReject && (
      <div className="mt-6 flex flex-wrap gap-3 justify-end">
        {row.status === "approved" && (
          <Button onClick={onTogglePublish} variant="outline" className="rounded-full">
            {row.published ? <><EyeOff className="w-4 h-4" />Unpublish</> : <><Eye className="w-4 h-4" />Publish</>}
          </Button>
        )}
        {row.status !== "rejected" && (
          <Button
            onClick={onReject}
            variant="outline"
            className="rounded-full border-destructive/40 text-destructive hover:bg-destructive hover:text-destructive-foreground"
          >
            <X className="w-4 h-4" /> Reject
          </Button>
        )}
        {row.status !== "approved" && (
          <Button
            onClick={onApprove}
            disabled={acting}
            className="rounded-full bg-olive hover:bg-olive-dark text-primary-foreground"
          >
            {acting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />} Approve & Publish
          </Button>
        )}
      </div>
    )}
  </div>
);

export default AdminSubmissions;
