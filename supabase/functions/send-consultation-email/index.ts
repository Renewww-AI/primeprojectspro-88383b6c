import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface Body {
  name?: string;
  phone?: string;
  email?: string;
  project_type?: string;
  city?: string;
  target_timeline?: string;
  budget_range?: string;
}

const isStr = (v: unknown, max = 255) =>
  typeof v === "string" && v.trim().length > 0 && v.length <= max;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
  );

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = (await req.json()) as Body;
    const fields = ["name", "phone", "email", "project_type", "city", "target_timeline", "budget_range"] as const;
    for (const f of fields) {
      if (!isStr(body[f], f === "email" ? 320 : 255)) {
        return new Response(JSON.stringify({ error: `Invalid or missing field: ${f}` }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email!)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const apiKey = Deno.env.get("RESEND_API_KEY") || Deno.env.get("RESEND");
    if (!apiKey) {
      console.error("Missing Resend API key");
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const resend = new Resend(apiKey);

    const rows: Array<[string, string]> = [
      ["Name", body.name!],
      ["Email", body.email!],
      ["Phone", body.phone!],
      ["Project Type", body.project_type!],
      ["City", body.city!],
      ["Target Timeline", body.target_timeline!],
      ["Budget Range", body.budget_range!],
    ];

    const html = `
      <div style="font-family:Arial,sans-serif;color:#222;max-width:600px;margin:0 auto;padding:24px;">
        <h2 style="margin:0 0 16px;color:#3a3a2e;">New Consultation Request</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;width:160px;">${esc(k)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${esc(v)}</td></tr>`,
            )
            .join("")}
        </table>
        <p style="margin-top:24px;font-size:12px;color:#888;">Submitted via PrimeProjects.Pro</p>
      </div>
    `;

    const fromAddress =
      Deno.env.get("RESEND_FROM") || "Prime Projects <notifications@primeprojects.pro>";

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: ["consult@primeprojects.pro", "ben.markowitz24@gmail.com"],
      reply_to: body.email!,
      subject: `New Consultation Request – ${body.name!}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      // Fallback to Resend's default sender if domain not verified
      const isDomainErr =
        JSON.stringify(error).toLowerCase().includes("domain") ||
        JSON.stringify(error).toLowerCase().includes("from");
      if (isDomainErr) {
        const retry = await resend.emails.send({
          from: "Prime Projects <onboarding@resend.dev>",
          to: ["consult@primeprojects.pro", "ben.markowitz24@gmail.com"],
          reply_to: body.email!,
          subject: `New Consultation Request – ${body.name!}`,
          html,
        });
        if (retry.error) {
          console.error("Resend retry error:", retry.error);
          return new Response(JSON.stringify({ error: "Failed to send email" }), {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        return new Response(JSON.stringify({ success: true, id: retry.data?.id }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, id: data?.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("send-consultation-email error:", e);
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
