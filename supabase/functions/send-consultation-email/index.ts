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

    const subject = `Prime Projects Consultation Request – ${body.name!}`;
    const fromAddress =
      Deno.env.get("RESEND_FROM") || "Prime Projects <onboarding@resend.dev>";
    const usingFallbackSender = fromAddress.includes("onboarding@resend.dev");
    // Internal recipients: configurable via INTERNAL_RECIPIENTS (comma-separated).
    // Falls back to safe defaults. When using Resend's shared sender, only the
    // account owner address is deliverable, so we restrict to that.
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

    // Customer confirmation email
    const customerSubject = `Prime Projects Consultation Request – ${body.name!}`;
    const customerRows: Array<[string, string]> = [
      ["Project Type", body.project_type!],
      ["City", body.city!],
      ["Target Timeline", body.target_timeline!],
      ["Budget Range", body.budget_range!],
      ["Phone", body.phone!],
    ];
    const customerHtml = `
      <div style="font-family:Arial,sans-serif;color:#222;max-width:600px;margin:0 auto;padding:24px;line-height:1.6;">
        <p>Hi ${esc(body.name!)},</p>
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
    const customerFrom = usingFallbackSender
      ? "Prime Projects <onboarding@resend.dev>"
      : "Prime Projects <consult@primeprojects.pro>";

    const internalPromise = resend.emails.send({
      from: fromAddress,
      to: recipients,
      reply_to: body.email!,
      subject,
      html,
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const customerEmail = typeof body.email === "string" ? body.email.trim() : "";
    const canSendCustomer =
      customerEmail.length > 0 && customerEmail.length <= 320 && emailRegex.test(customerEmail);

    const customerPromise = canSendCustomer
      ? resend.emails
          .send({
            from: customerFrom,
            to: [customerEmail],
            reply_to: "consult@primeprojects.pro",
            subject: customerSubject,
            html: customerHtml,
          })
          .then((res) => {
            if (res.error) console.error("Customer confirmation email failed:", res.error);
            return res;
          })
          .catch((err) => {
            console.error("Customer confirmation email threw:", err);
            return null;
          })
      : Promise.resolve(null);

    const [internalResult] = await Promise.all([internalPromise, customerPromise]);
    const { data, error } = internalResult;

    if (error) {
      console.error("Resend error:", error);
      // Fallback to Resend's default sender if domain not verified
      const isDomainErr =
        JSON.stringify(error).toLowerCase().includes("domain") ||
        JSON.stringify(error).toLowerCase().includes("from");
      if (isDomainErr) {
        const retry = await resend.emails.send({
          from: "Prime Projects <onboarding@resend.dev>",
          to: ["ben.markowitz24@gmail.com"],
          reply_to: body.email!,
          subject,
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
