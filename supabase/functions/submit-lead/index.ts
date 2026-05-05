import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface LeadBody {
  name?: string;
  phone?: string;
  email?: string;
  project_type?: string;
  city?: string;
  target_timeline?: string;
  budget_range?: string;
}

const isStr = (v: unknown, max = 255): v is string =>
  typeof v === "string" && v.trim().length > 0 && v.length <= max;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = (await req.json()) as LeadBody;

    const fields = ["name", "phone", "email", "project_type", "city", "target_timeline", "budget_range"] as const;
    for (const f of fields) {
      if (!isStr(body[f], f === "email" ? 320 : 255)) {
        return new Response(
          JSON.stringify({ error: `Invalid or missing field: ${f}` }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email!);
    if (!emailOk) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data, error } = await supabase
      .from("leads")
      .insert({
        name: body.name!.trim(),
        phone: body.phone!.trim(),
        email: body.email!.trim().toLowerCase(),
        project_type: body.project_type!.trim(),
        city: body.city!.trim(),
        target_timeline: body.target_timeline!.trim(),
        budget_range: body.budget_range!.trim(),
        status: "New",
      })
      .select("id")
      .single();

    if (error) {
      console.error("Insert error:", error);
      return new Response(JSON.stringify({ error: "Failed to save lead" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("submit-lead error:", e);
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
