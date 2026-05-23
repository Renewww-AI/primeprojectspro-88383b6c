import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const inputClass =
  "w-full border border-border rounded-xl px-4 py-3 text-base sm:text-sm focus:outline-none focus:border-olive focus:ring-2 focus:ring-olive/20 bg-stone-bg min-h-[48px]";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(30),
  email: z.string().trim().email("Please enter a valid email").max(255),
  project_type: z.string().min(1, "Please select a project type"),
  city: z.string().min(1, "Please select a city"),
  target_timeline: z.string().min(1, "Please select a timeline"),
  budget_range: z.string().min(1, "Please select a budget range"),
});

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

const IntakeForm = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    project_type: "", city: "", target_timeline: "", budget_range: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({ title: "Please complete the form", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const leadRes = await fetch(`${SUPABASE_URL}/functions/v1/submit-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const leadJson = await leadRes.json().catch(() => ({}));
      if (!leadRes.ok || !leadJson.success) throw new Error(leadJson.error || "Submission failed");

      const emailRes = await fetch(`${SUPABASE_URL}/functions/v1/send-consultation-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lead_id: leadJson.id }),
      });
      const emailJson = await emailRes.json().catch(() => ({}));
      if (!emailRes.ok || !emailJson.success) {
        console.error("Email send failed:", emailJson);
      }
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", project_type: "", city: "", target_timeline: "", budget_range: "" });
      toast({ title: "Request received", description: "We'll be in touch within 1 business day." });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please call us at (760) 525-5058.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="intake" className="relative z-10 -mt-8 mb-0 px-4 scroll-mt-24">
      <div className="bg-card rounded-3xl shadow-xl border border-border p-5 sm:p-6 md:p-8 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          <div className="lg:w-[40%]">
            <p className="text-xs uppercase tracking-widest text-brass mb-3">Start your project plan</p>
            <h2 className="text-xl sm:text-2xl font-medium text-charcoal mb-3 sm:mb-4">
              Tell us what you're considering.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tell us about your property, project goals, and ideal timing. We'll help you understand
              the next steps, likely scope, and the right path forward.
            </p>
          </div>
          {submitted ? (
            <div className="lg:w-[60%] flex flex-col items-start justify-center bg-stone-bg rounded-2xl p-6 sm:p-8">
              <p className="text-xs uppercase tracking-widest text-olive mb-3">Thank you</p>
              <h3 className="text-xl text-charcoal font-medium mb-2">Your request is in.</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We'll review and reach out within 1 business day.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-sm text-olive hover:underline"
              >
                Submit another
              </button>
            </div>
          ) : (
            <form className="lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4" onSubmit={onSubmit}>
              <select className={inputClass} aria-label="Project Type" value={form.project_type} onChange={update("project_type")} required>
                <option value="">Project Type</option>
                <option>Kitchen Remodel</option>
                <option>Bathroom Remodel</option>
                <option>ADU / Guest House</option>
                <option>Roofing</option>
                <option>Outdoor Living / Pool</option>
                <option>Whole Home Upgrade</option>
                <option>Other</option>
              </select>
              <select className={inputClass} aria-label="City" value={form.city} onChange={update("city")} required>
                <option value="">City</option>
                <option>San Diego</option>
                <option>Oceanside</option>
                <option>Carlsbad</option>
                <option>Encinitas</option>
                <option>San Marcos</option>
                <option>Vista</option>
                <option>Del Mar</option>
                <option>Rancho Santa Fe</option>
                <option>Other</option>
              </select>
              <select className={inputClass} aria-label="Target Timeline" value={form.target_timeline} onChange={update("target_timeline")} required>
                <option value="">Target Timeline</option>
                <option>ASAP</option>
                <option>1–3 months</option>
                <option>3–6 months</option>
                <option>6–12 months</option>
                <option>Just exploring</option>
              </select>
              <select className={inputClass} aria-label="Budget Range" value={form.budget_range} onChange={update("budget_range")} required>
                <option value="">Budget Range</option>
                <option>Under $25K</option>
                <option>$25K–$75K</option>
                <option>$75K–$150K</option>
                <option>$150K–$300K</option>
                <option>$300K+</option>
                <option>Not sure yet</option>
              </select>
              <input
                type="text" autoComplete="name" placeholder="Your Name" aria-label="Your Name"
                value={form.name} onChange={update("name")} required maxLength={100}
                className={`${inputClass} md:col-span-2`}
              />
              <input
                type="tel" autoComplete="tel" inputMode="tel" placeholder="Phone Number" aria-label="Phone Number"
                value={form.phone} onChange={update("phone")} required maxLength={30}
                className={inputClass}
              />
              <input
                type="email" autoComplete="email" inputMode="email" placeholder="Email Address" aria-label="Email Address"
                value={form.email} onChange={update("email")} required maxLength={255}
                className={inputClass}
              />
              <button
                type="submit"
                disabled={submitting}
                className="md:col-span-2 w-full bg-olive text-primary-foreground rounded-full px-8 py-3.5 text-sm font-medium hover:bg-olive-dark transition-all min-h-[48px] disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Request My Consultation"}
              </button>
              <p className="md:col-span-2 text-xs text-muted-foreground text-center">
                No commitment required. We'll follow up within 1 business day.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default IntakeForm;
