import * as functions from 'firebase-functions';
import { MailService } from '@sendgrid/mail';
const sgMail = new MailService();

console.log('SendGrid Mail Object:', sgMail);

// Get SendGrid API credentials from Firebase environment variables
const sendGridApiKey = functions.config().sendgrid?.apikey;
const senderEmail = functions.config().sendgrid?.sender;
const receiverEmail = functions.config().sendgrid?.receiver;

if (!sendGridApiKey || !senderEmail || !receiverEmail) {
  throw new Error("SendGrid API key or email configurations are missing.");
}

sgMail.setApiKey(sendGridApiKey);

export const contactForm = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { name, email, subject, message } = req.body as {
      name: string;
      email: string;
      subject: string;
      message: string;
    };

    if (!name || !email || !subject || !message) {
      res.status(400).send({ error: 'All fields are required.' });
      return;
    }

    const msg = {
      to: receiverEmail,
      from: senderEmail,
      subject: `New Contact Form Submission: ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    };

    await sgMail.send(msg);

    res.status(200).send({ message: 'Email sent successfully!' });
    return;
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    res.status(500).send({ error: 'Failed to send email.' });
    return;
  }
});
