import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const inputCls =
  "w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive transition-colors";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Admin Login | Prime Projects";
    supabase.auth.getSession().then(async ({ data }) => {
      if (data.session) {
        const { data: roleRow } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", data.session.user.id)
          .eq("role", "admin")
          .maybeSingle();
        if (roleRow) navigate("/leads", { replace: true });
      }
    });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse({ email, password });
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { data, error: signErr } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    if (signErr || !data.session) {
      setLoading(false);
      setError(signErr?.message || "Sign-in failed");
      return;
    }
    const { data: roleRow, error: roleErr } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", data.session.user.id)
      .eq("role", "admin")
      .maybeSingle();
    setLoading(false);
    if (roleErr || !roleRow) {
      await supabase.auth.signOut();
      setError("This account does not have admin access.");
      return;
    }
    navigate("/leads", { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Admin Login | Prime Projects" description="Admin login" path="/admin/login" />
      <Header />
      <section className="pt-32 pb-24 px-4 md:px-6">
        <div className="max-w-md mx-auto bg-card border border-border rounded-2xl p-8">
          <p className="text-xs uppercase tracking-widest text-brass mb-3">Admin</p>
          <h1 className="font-serif text-3xl text-charcoal mb-6">Sign in</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputCls}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-charcoal mb-2">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputCls}
                required
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full rounded-full bg-olive hover:bg-olive-dark text-primary-foreground"
            >
              {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Signing in…</> : "Sign in"}
            </Button>
            <p className="text-xs text-muted-foreground text-center pt-2">
              Need an admin account? Create one in Cloud → Users, then add an "admin" role for that user in the user_roles table.{" "}
              <Link to="/" className="text-olive hover:underline">Back home</Link>
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AdminLogin;
