import nodemailer from "nodemailer";

export const sendWelcomeEmail = async (user) => {
  try {
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: process.env.SMPT_SERVICE, // Using 'gmail' from the env file
      auth: {
        user: process.env.STORFLEET_SMPT_MAIL, // Email from the env file
        pass: process.env.STORFLEET_SMPT_MAIL_PASSWORD, // Email password from the env file
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.STORFLEET_SMPT_MAIL, // Sender address
      to: user.email, // Receiver address (user's email)
      subject: "Welcome to StoreFleet!", // Subject of the email
      text: `Hi ${user.name},\n\nWelcome to StoreFleet! We're excited to have you on board. Let us know if you need any assistance.\n\nBest Regards,\nThe StoreFleet Team`,
      html: `<p>Hi ${user.name},</p><p>Welcome to <b>StoreFleet</b>! We're excited to have you on board.</p><p>Let us know if you need any assistance.</p><br><p>Best Regards,<br>The StoreFleet Team</p>`, // HTML body
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log(`Welcome email sent to ${user.email}`);
  } catch (error) {
    console.error(`Error sending welcome email to ${user.email}:`, error);
  }
};
