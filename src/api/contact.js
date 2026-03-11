// src/api/contact.js

import { Resend } from "resend";

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Parse body safely (handles string or JSON object)
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { name, business, email, service, message } = body;

    // Send email
    await resend.emails.send({
      from: "Workhorse Collective <onboarding@resend.dev>", // this can stay as is
      to: "helloworkhorseco@gmail.com", // your Gmail
      subject: "New Website Enquiry",
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Email failed" });
  }
}