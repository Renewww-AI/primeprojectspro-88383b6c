import { Resend } from "npm:resend@4.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
  );

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const { lead_id } = (await req.json().catch(() => ({}))) as { lead_id?: string };
    if (!lead_id || typeof lead_id !== "string" || !UUID_RE.test(lead_id)) {
      return new Response(JSON.stringify({ error: "Invalid or missing lead_id" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Load the authoritative lead record server-side. The caller cannot
    // specify recipient addresses or any other content — we send only what
    // was actually saved by submit-lead.
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
    const { data: lead, error: loadErr } = await supabase
      .from("leads")
      .select("id,name,phone,email,project_type,city,target_timeline,budget_range,created_at")
      .eq("id", lead_id)
      .maybeSingle();

    if (loadErr) {
      console.error("Lead load error:", loadErr);
      return new Response(JSON.stringify({ error: "Failed to load lead" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!lead) {
      return new Response(JSON.stringify({ error: "Lead not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Only send once per lead: if the lead was created more than 10 minutes
    // ago, refuse — confirmation emails belong to the original submission
    // moment, not to replay attempts.
    const ageMs = Date.now() - new Date(lead.created_at as string).getTime();
    if (ageMs > 10 * 60 * 1000) {
      return new Response(JSON.stringify({ error: "Lead too old for confirmation" }), {
        status: 410,
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

    const internalRows: Array<[string, string]> = [
      ["Name", lead.name],
      ["Email", lead.email],
      ["Phone", lead.phone],
      ["Project Type", lead.project_type],
      ["City", lead.city],
      ["Target Timeline", lead.target_timeline],
      ["Budget Range", lead.budget_range],
    ];

    const internalHtml = `
      <div style="font-family:Arial,sans-serif;color:#222;max-width:600px;margin:0 auto;padding:24px;">
        <h2 style="margin:0 0 16px;color:#3a3a2e;">New Consultation Request</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${internalRows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;width:160px;">${esc(k)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${esc(v)}</td></tr>`,
            )
            .join("")}
        </table>
        <p style="margin-top:24px;font-size:12px;color:#888;">Submitted via PrimeProjects.Pro</p>
      </div>
    `;

    const subject = `Prime Projects Consultation Request – ${lead.name}`;
    const fromAddress =
      Deno.env.get("RESEND_FROM") || "Prime Projects <onboarding@resend.dev>";
    const usingFallbackSender = fromAddress.includes("onboarding@resend.dev");
    const configuredRecipients = (Deno.env.get("INTERNAL_RECIPIENTS") || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const recipients = usingFallbackSender
      ? ["ben.markowitz24@gmail.com"]
      : configuredRecipients.length > 0
        ? configuredRecipients
        : ["consult@primeprojects.pro", "ben.markowitz24@gmail.com"];
    const customerReplyTo =
      Deno.env.get("CUSTOMER_REPLY_TO") || "consult@primeprojects.pro";

    const customerRows: Array<[string, string]> = [
      ["Project Type", lead.project_type],
      ["City", lead.city],
      ["Target Timeline", lead.target_timeline],
      ["Budget Range", lead.budget_range],
      ["Phone", lead.phone],
    ];
    const customerHtml = `
      <div style="font-family:Arial,sans-serif;color:#222;max-width:600px;margin:0 auto;padding:24px;line-height:1.6;">
        <p>Hi ${esc(lead.name)},</p>
        <p>Thank you for reaching out to Prime Projects. We've received your consultation request and will follow up within 1 business day.</p>
        <p>Here's a summary of what you submitted:</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;margin:12px 0;">
          ${customerRows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;width:160px;">${esc(k)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${esc(v)}</td></tr>`,
            )
            .join("")}
        </table>
        <p>If you have any questions in the meantime, feel free to call us directly at (760) 525-5058.</p>
        <p>We look forward to helping you plan your project.</p>
        <p style="margin-top:24px;">— The Prime Projects Team<br/><a href="https://primeprojects.pro" style="color:#3a3a2e;">PrimeProjects.Pro</a></p>
      </div>
    `;

    const internalPromise = resend.emails.send({
      from: fromAddress,
      to: recipients,
      reply_to: lead.email,
      subject,
      html: internalHtml,
    });

    const customerPromise = resend.emails
      .send({
        from: fromAddress,
        to: [lead.email],
        reply_to: customerReplyTo,
        subject,
        html: customerHtml,
      })
      .then((res) => {
        if (res.error) console.error("Customer confirmation email failed:", res.error);
        return res;
      })
      .catch((err) => {
        console.error("Customer confirmation email threw:", err);
        return null;
      });

    const [internalResult] = await Promise.all([internalPromise, customerPromise]);
    const { data, error } = internalResult;

    if (error) {
      console.error("Resend error:", error);
      const isDomainErr =
        JSON.stringify(error).toLowerCase().includes("domain") ||
        JSON.stringify(error).toLowerCase().includes("from");
      if (isDomainErr) {
        const retry = await resend.emails.send({
          from: "Prime Projects <onboarding@resend.dev>",
          to: ["ben.markowitz24@gmail.com"],
          reply_to: lead.email,
          subject,
          html: internalHtml,
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
