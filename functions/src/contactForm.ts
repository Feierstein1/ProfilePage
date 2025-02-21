import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import { MailService } from "@sendgrid/mail";

const sgMail = new MailService();

const sendGridApiKey = defineSecret("SENDGRID_API_KEY");
const senderEmail = defineSecret("SENDER_EMAIL");
const receiverEmail = defineSecret("RECEIVER_EMAIL");

const allowedOrigins = ["https://kfeier.com", "https://www.kfeier.com"];

export const contactForm = onRequest(async (req: any, res:any) => {
  const origin = req.get("Origin");
  if (allowedOrigins.includes(origin)) {
    res.set("Access-Control-Allow-Origin", origin);
  }

  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).send("");
  }

  try {
     const { name, email, subject, message } = req.body;

      if (!name || !email || !subject || !message) {
        return res.status(400).send({ error: "All fields are required." });
      }

      // Retrieve secrets inside the function
      const apiKey = sendGridApiKey.value();
      const sender = senderEmail.value();
      const receiver = receiverEmail.value();

      if (!apiKey || !sender || !receiver) {
        console.error("Missing SendGrid API Key or email values.");
        return res.status(500).send({ error: "Email configuration error." });
      }

      sgMail.setApiKey(apiKey);

      const msg = {
        to: receiver,
        from: sender,
        subject: `New Contact Form Submission: ${subject}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      };

      await sgMail.send(msg);

      return res.status(200).send({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).send({ error: "Failed to send email." });
  }
});