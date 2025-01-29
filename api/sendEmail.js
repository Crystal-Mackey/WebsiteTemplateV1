import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  // ✅ Configure SMTP Transporter (Using Zoho Mail)
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465, // Use 587 for TLS instead of SSL
    secure: true,
    auth: {
      user: "info@maxartistrydesigns.com",
      pass: "Mate1437,!",  // ⚠️ Use environment variables in production
    },
  });

  try {
    const mailOptions = {
      from: '"MaxArtistry Designs" <info@maxartistrydesigns.com>',
      to: "info@maxartistrydesigns.com",  // Your inbox
      replyTo: email, // Allows direct replies to the user
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "✅ Message Sent Successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ error: "❌ Failed to send message. Please try again later." });
  }
}
