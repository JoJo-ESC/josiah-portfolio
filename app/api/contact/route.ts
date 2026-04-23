import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function escape(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const rateLimit = new Map<string, number>();
const RATE_WINDOW_MS = 60_000; // one submission per IP per minute

export async function POST(req: NextRequest) {
  try {
    const { name, org, purpose, _trap } = await req.json();

    // Honeypot — bots fill this, humans don't
    if (_trap) return NextResponse.json({ success: true });

    // Rate limit by IP
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
    const last = rateLimit.get(ip);
    if (last && Date.now() - last < RATE_WINDOW_MS) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }
    rateLimit.set(ip, Date.now());

    if (!name?.trim() || !org?.trim() || !purpose?.trim()) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "josiah.riggins1@icloud.com",
      subject: `[Portfolio] ${name} — ${org}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; background: #0a0a0a; color: #d6d3d1; padding: 32px; border-radius: 8px;">
          <h2 style="color: #991b1b; margin: 0 0 24px;">New contact from your portfolio</h2>
          <p style="margin: 0 0 8px;"><span style="color: #78716c;">Name</span><br/>${escape(name)}</p>
          <p style="margin: 16px 0 8px;"><span style="color: #78716c;">Organization</span><br/>${escape(org)}</p>
          <p style="margin: 16px 0 8px;"><span style="color: #78716c;">Purpose</span><br/><span style="white-space: pre-wrap;">${escape(purpose)}</span></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
