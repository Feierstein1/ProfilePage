import * as functions from "firebase-functions";
import cors from "cors";
import { MailService } from "@sendgrid/mail";

const sgMail = new MailService();
console.log("SendGrid Mail Object:", sgMail);

const allowedOrigins = [
  "https://kfeier.com",
  "https://www.kfeier.com",
  "http://kfeier.com",
  "http://www.kfeier.com",
  "https://portfolio-c207f.firebaseapp.com"
];

const corsMiddleware = cors({
  origin: allowedOrigins,
  methods: "POST",
  allowedHeaders: ["Content-Type"],
});

// Get SendGrid API credentials from Firebase environment variables
const sendGridApiKey = functions.config().sendgrid?.apikey;
const senderEmail = functions.config().sendgrid?.sender;
const receiverEmail = functions.config().sendgrid?.receiver;

if (!sendGridApiKey || !senderEmail || !receiverEmail) {
  throw new Error("SendGrid API key or email configurations are missing.");
}

sgMail.setApiKey(sendGridApiKey);

// Firebase Function (No Express Required)
export const contactForm = functions.https.onRequest((req, res) => {
  corsMiddleware(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send({ error: "Method Not Allowed" });
    }

    try {
      const { name, email, subject, message } = req.body as {
        name: string;
        email: string;
        subject: string;
        message: string;
      };

      if (!name || !email || !subject || !message) {
        return res.status(400).send({ error: "All fields are required." });
      }

      const msg = {
        to: receiverEmail,
        from: senderEmail,
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
});
