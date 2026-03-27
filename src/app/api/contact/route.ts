import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const receiverEmail = process.env.RECEIVER_EMAIL as string;

if (!receiverEmail) {
  throw new Error("Missing RECEIVER_EMAIL environment variable");
}

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [receiverEmail],
      subject: `[Portfolio] ${subject || "No Subject"} - from ${name}`,
      replyTo: email,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}