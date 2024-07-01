const nodemailer = require("nodemailer");

const origin = "http://localhost:3000";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "kailyn51@ethereal.email",
    pass: "AqaUHrFrtWhjZDFfuE",
  },
});

const sendMail = async ({ to, subject, html }) => {
  const response = await transporter.sendMail({
    from: '"Ecom Express" <ecomexpress@ethereal.email>',
    to,
    subject,
    html,
  });

  console.log("Message sent: ", response.messageId);
};

const sendVerificationEmail = async (email, token) => {
  try {
    const html = `
        <p>Click this link to verify your email: </p>
        <a href=${origin}/verify-email?token=${token}&email=${email}>Verify Email</a>
    `;

    await sendMail({ to: email, subject: "Verify Email", html });
  } catch (error) {
    console.log("Failed to send verification email. Error: ", error.message);
  }
};

module.exports = { sendMail, sendVerificationEmail };
