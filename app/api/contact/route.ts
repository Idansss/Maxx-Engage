import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().max(100).optional(),
  budget: z.string().min(1),
  message: z.string().min(20).max(5000),
});

// Simple in-memory rate limiter: 1 submission per IP per minute
const rateLimitMap = new Map<string, number>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const last = rateLimitMap.get(ip) ?? 0;
  if (now - last < 60_000) return true;
  rateLimitMap.set(ip, now);
  // Clean old entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, ts] of rateLimitMap) {
      if (now - ts > 60_000) rateLimitMap.delete(key);
    }
  }
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute before sending another message." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { name, email, company, budget, message } = parsed.data;

  // Send via Resend when RESEND_API_KEY is set
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Maxx Engage Contact <no-reply@maxxengage.vercel.app>",
        to: "abassibrahim591@gmail.com",
        replyTo: email,
        subject: `New enquiry from ${name} — ${budget}`,
        html: `
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          <p><strong>Budget:</strong> ${budget}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      });
    } catch (err) {
      console.error("Resend error:", err);
      return NextResponse.json(
        { error: "Failed to send message. Please email us directly." },
        { status: 500 }
      );
    }
  } else {
    // Log in dev when no API key is set
    console.log("[Contact form]", { name, email, company, budget, message });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
