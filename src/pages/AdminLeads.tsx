import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, LogOut, Search, Download, Trash2, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type Lead = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string;
  project_type: string;
  city: string;
  target_timeline: string;
  budget_range: string;
  status: string;
  notes: string | null;
};

const STATUSES = ["New", "Contacted", "Booked", "Closed"] as const;

const statusClass = (s: string) => {
  switch (s) {
    case "New": return "bg-star/15 text-[hsl(var(--star))] border-[hsl(var(--star))]/30";
    case "Contacted": return "bg-brass/15 text-brass border-brass/30";
    case "Booked": return "bg-olive/15 text-olive border-olive/30";
    case "Closed": return "bg-muted text-muted-foreground border-border";
    default: return "bg-muted text-muted-foreground border-border";
  }
};

const AdminLeads = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [authChecked, setAuthChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sortDesc, setSortDesc] = useState(true);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [bulkStatus, setBulkStatus] = useState<string>("");
  const [openLead, setOpenLead] = useState<Lead | null>(null);
  const [editNotes, setEditNotes] = useState("");
  const [savingNotes, setSavingNotes] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<Lead | null>(null);

  useEffect(() => {
    document.title = "Leads | Admin";
    let unsub: (() => void) | undefined;

    const check = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) { navigate("/login", { replace: true }); return; }
      const { data: role } = await supabase
        .from("user_roles").select("role")
        .eq("user_id", data.session.user.id).eq("role", "admin").maybeSingle();
      if (!role) { await supabase.auth.signOut(); navigate("/login", { replace: true }); return; }
      setAuthChecked(true);
      load();
    };

    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate("/login", { replace: true });
    });
    unsub = () => sub.subscription.unsubscribe();
    check();
    return () => unsub?.();
  }, [navigate]);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads").select("*").order("created_at", { ascending: false });
    setLoading(false);
    if (error) { toast({ title: "Failed to load leads", description: error.message, variant: "destructive" }); return; }
    setRows((data ?? []) as Lead[]);
  };

  const filtered = useMemo(() => {
    let out = [...rows];
    if (statusFilter !== "all") out = out.filter((r) => r.status === statusFilter);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      out = out.filter((r) =>
        [r.name, r.email, r.phone, r.city, r.project_type, r.budget_range, r.target_timeline]
          .some((v) => v?.toLowerCase().includes(q))
      );
    }
    out.sort((a, b) => {
      const da = new Date(a.created_at).getTime();
      const db = new Date(b.created_at).getTime();
      return sortDesc ? db - da : da - db;
    });
    return out;
  }, [rows, search, statusFilter, sortDesc]);

  const allSelected = filtered.length > 0 && filtered.every((r) => selectedIds.has(r.id));
  const toggleAll = () => {
    if (allSelected) setSelectedIds(new Set());
    else setSelectedIds(new Set(filtered.map((r) => r.id)));
  };
  const toggleOne = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id); else next.add(id);
    setSelectedIds(next);
  };

  const updateStatus = async (id: string, status: string) => {
    const prev = rows;
    setRows((r) => r.map((x) => (x.id === id ? { ...x, status } : x)));
    const { error } = await supabase.from("leads").update({ status }).eq("id", id);
    if (error) {
      setRows(prev);
      toast({ title: "Update failed", description: error.message, variant: "destructive" });
    }
  };

  const applyBulkStatus = async () => {
    if (!bulkStatus || selectedIds.size === 0) return;
    const ids = Array.from(selectedIds);
    const { error } = await supabase.from("leads").update({ status: bulkStatus }).in("id", ids);
    if (error) { toast({ title: "Bulk update failed", description: error.message, variant: "destructive" }); return; }
    toast({ title: `Updated ${ids.length} lead${ids.length === 1 ? "" : "s"}` });
    setSelectedIds(new Set());
    setBulkStatus("");
    load();
  };

  const deleteLead = async (lead: Lead) => {
    const { error } = await supabase.from("leads").delete().eq("id", lead.id);
    if (error) { toast({ title: "Delete failed", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Lead deleted" });
    setConfirmDelete(null);
    if (openLead?.id === lead.id) setOpenLead(null);
    load();
  };

  const exportCsv = () => {
    const headers = ["Date","Name","Phone","Email","Project Type","City","Timeline","Budget","Status","Notes"];
    const escape = (v: unknown) => {
      const s = v == null ? "" : String(v);
      return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const lines = [headers.join(",")];
    for (const r of rows) {
      lines.push([
        new Date(r.created_at).toISOString(),
        r.name, r.phone, r.email, r.project_type, r.city,
        r.target_timeline, r.budget_range, r.status, r.notes ?? "",
      ].map(escape).join(","));
    }
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const openPanel = (lead: Lead) => {
    setOpenLead(lead);
    setEditNotes(lead.notes ?? "");
  };

  const saveNotes = async () => {
    if (!openLead) return;
    setSavingNotes(true);
    const { error } = await supabase.from("leads").update({ notes: editNotes }).eq("id", openLead.id);
    setSavingNotes(false);
    if (error) { toast({ title: "Save failed", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Notes saved" });
    setRows((r) => r.map((x) => x.id === openLead.id ? { ...x, notes: editNotes } : x));
    setOpenLead({ ...openLead, notes: editNotes });
  };

  const signOut = async () => { await supabase.auth.signOut(); navigate("/login", { replace: true }); };

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
      <Seo title="Leads | Admin" description="Manage consultation leads." path="/leads" />
      <Header />
      <section className="pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-brass mb-2">Admin</p>
              <h1 className="font-serif text-3xl md:text-4xl text-charcoal">Leads</h1>
              <p className="text-sm text-muted-foreground mt-1">{rows.length} total · {filtered.length} shown</p>
            </div>
            <div className="flex items-center gap-2">
              <Button onClick={exportCsv} variant="outline" className="rounded-full">
                <Download className="w-4 h-4" /> Export CSV
              </Button>
              <Button onClick={signOut} variant="outline" className="rounded-full">
                <LogOut className="w-4 h-4" /> Sign out
              </Button>
            </div>
          </div>

          {/* Filter bar */}
          <div className="bg-card border border-border rounded-2xl p-4 mb-4 flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[220px]">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, email, phone, city…"
                className="w-full bg-background border border-border rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-olive/30"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-olive/30"
            >
              <option value="all">All statuses</option>
              {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <select
              value={sortDesc ? "desc" : "asc"}
              onChange={(e) => setSortDesc(e.target.value === "desc")}
              className="bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-olive/30"
            >
              <option value="desc">Newest first</option>
              <option value="asc">Oldest first</option>
            </select>
          </div>

          {/* Bulk bar */}
          {selectedIds.size > 0 && (
            <div className="bg-olive/10 border border-olive/30 rounded-xl px-4 py-3 mb-4 flex flex-wrap items-center gap-3">
              <span className="text-sm text-charcoal font-medium">{selectedIds.size} selected</span>
              <select
                value={bulkStatus}
                onChange={(e) => setBulkStatus(e.target.value)}
                className="bg-background border border-border rounded-md px-3 py-2 text-sm"
              >
                <option value="">Set status…</option>
                {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <Button
                size="sm"
                disabled={!bulkStatus}
                onClick={applyBulkStatus}
                className="rounded-full bg-olive hover:bg-olive-dark text-primary-foreground"
              >
                Apply
              </Button>
              <Button size="sm" variant="outline" onClick={() => setSelectedIds(new Set())} className="rounded-full">
                Clear
              </Button>
            </div>
          )}

          {/* Table */}
          {loading ? (
            <div className="py-20 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-olive" /></div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center text-muted-foreground bg-card border border-border rounded-2xl">
              No leads match your filters.
            </div>
          ) : (
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-secondary/40 text-xs uppercase tracking-widest text-muted-foreground">
                      <th className="px-4 py-3 text-left w-10">
                        <input type="checkbox" checked={allSelected} onChange={toggleAll}
                          className="accent-olive w-4 h-4" aria-label="Select all" />
                      </th>
                      <th className="px-4 py-3 text-left">Date</th>
                      <th className="px-4 py-3 text-left">Name</th>
                      <th className="px-4 py-3 text-left">Phone</th>
                      <th className="px-4 py-3 text-left">Email</th>
                      <th className="px-4 py-3 text-left">Service</th>
                      <th className="px-4 py-3 text-left">City</th>
                      <th className="px-4 py-3 text-left">Budget</th>
                      <th className="px-4 py-3 text-left">Status</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((r) => (
                      <tr key={r.id}
                        className="border-b border-border last:border-0 hover:bg-secondary/40 cursor-pointer transition-colors"
                        onClick={() => openPanel(r)}
                      >
                        <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                          <input type="checkbox" checked={selectedIds.has(r.id)} onChange={() => toggleOne(r.id)}
                            className="accent-olive w-4 h-4" aria-label={`Select ${r.name}`} />
                        </td>
                        <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                          {new Date(r.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3 text-charcoal font-medium whitespace-nowrap">{r.name}</td>
                        <td className="px-4 py-3 text-charcoal whitespace-nowrap">
                          <a href={`tel:${r.phone}`} onClick={(e) => e.stopPropagation()} className="hover:text-olive">{r.phone}</a>
                        </td>
                        <td className="px-4 py-3 text-charcoal">
                          <a href={`mailto:${r.email}`} onClick={(e) => e.stopPropagation()} className="hover:text-olive">{r.email}</a>
                        </td>
                        <td className="px-4 py-3 text-charcoal whitespace-nowrap">{r.project_type}</td>
                        <td className="px-4 py-3 text-charcoal whitespace-nowrap">{r.city}</td>
                        <td className="px-4 py-3 text-charcoal whitespace-nowrap">{r.budget_range}</td>
                        <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                          <select
                            value={r.status}
                            onChange={(e) => updateStatus(r.id, e.target.value)}
                            className={`text-xs px-2 py-1 rounded-full border focus:outline-none focus:ring-2 focus:ring-olive/30 ${statusClass(r.status)}`}
                          >
                            {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </td>
                        <td className="px-4 py-3 text-right" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => setConfirmDelete(r)}
                            className="text-muted-foreground hover:text-destructive p-1.5 rounded-md transition-colors"
                            aria-label="Delete lead"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Side panel */}
      {openLead && (
        <div className="fixed inset-0 z-[90] flex">
          <div className="flex-1 bg-near-black/40" onClick={() => setOpenLead(null)} />
          <aside className="w-full max-w-md bg-card border-l border-border h-full overflow-y-auto p-6 shadow-2xl">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-brass mb-1">Lead detail</p>
                <h2 className="font-serif text-2xl text-charcoal">{openLead.name}</h2>
              </div>
              <button onClick={() => setOpenLead(null)} className="p-2 -mr-2 text-charcoal hover:text-olive" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <Field label="Submitted" value={new Date(openLead.created_at).toLocaleString()} />
              <Field label="Phone" value={<a href={`tel:${openLead.phone}`} className="text-olive hover:underline">{openLead.phone}</a>} />
              <Field label="Email" value={<a href={`mailto:${openLead.email}`} className="text-olive hover:underline">{openLead.email}</a>} />
              <Field label="Project Type" value={openLead.project_type} />
              <Field label="City" value={openLead.city} />
              <Field label="Timeline" value={openLead.target_timeline} />
              <Field label="Budget" value={openLead.budget_range} />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Status</p>
                <select
                  value={openLead.status}
                  onChange={(e) => { updateStatus(openLead.id, e.target.value); setOpenLead({ ...openLead, status: e.target.value }); }}
                  className={`text-xs px-3 py-1.5 rounded-full border ${statusClass(openLead.status)}`}
                >
                  {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Notes</p>
                <textarea
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  rows={5}
                  className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-olive/30"
                  placeholder="Add internal notes…"
                />
                <div className="flex justify-end mt-2">
                  <Button size="sm" onClick={saveNotes} disabled={savingNotes}
                    className="rounded-full bg-olive hover:bg-olive-dark text-primary-foreground">
                    {savingNotes ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save notes"}
                  </Button>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <Button onClick={() => setConfirmDelete(openLead)} variant="outline"
                  className="rounded-full border-destructive/40 text-destructive hover:bg-destructive hover:text-destructive-foreground">
                  <Trash2 className="w-4 h-4" /> Delete lead
                </Button>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Confirm delete */}
      {confirmDelete && (
        <div className="fixed inset-0 z-[110] bg-near-black/60 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl max-w-sm w-full p-6">
            <h3 className="font-serif text-xl text-charcoal mb-2">Delete this lead?</h3>
            <p className="text-sm text-muted-foreground mb-5">
              This will permanently remove <span className="text-charcoal font-medium">{confirmDelete.name}</span> from your leads.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setConfirmDelete(null)} className="rounded-full">Cancel</Button>
              <Button onClick={() => deleteLead(confirmDelete)}
                className="rounded-full bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

const Field = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div>
    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-0.5">{label}</p>
    <p className="text-charcoal">{value}</p>
  </div>
);

export default AdminLeads;
