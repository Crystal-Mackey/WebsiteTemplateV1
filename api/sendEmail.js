import nodemailer from "nodemailer";

export default async function handler(req, res) {
  console.log("Incoming request method:", req.method); // ✅ Log request method

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    console.log("Received request body:", req.body); // ✅ Log request body for debugging
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@maxartistrydesigns.com",
        pass: "Mate1437,!",  // ⚠️ Use env variables in production
      },
    });

    const mailOptions = {
      from: '"MaxArtistry Designs" <info@maxartistrydesigns.com>',
      to: "info@maxartistrydesigns.com",
      replyTo: email,
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
    console.log("✅ Email Sent Successfully!");
    return res.status(200).json({ message: "✅ Message Sent Successfully!" });
  } catch (error) {
    console.error("❌ Email sending error:", error);
    return res.status(500).json({ error: "❌ Failed to send message. Please try again later." });
  }
}
