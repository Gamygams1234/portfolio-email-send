// controllers/submissionController.js

const Submission = require("../models/submission");
const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');





var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.EMAIL, // your Gmail email address
        pass: process.env.PASSWORD, // your Gmail password or App Password
    }
  }));

const submitForm = (req, res) => {
  const { name, email, comment } = req.body;
  const submission = new Submission(name, email, comment);

  // Email options
  const mailOptions = {
    from: "gamaliel@gamalielburgos.com", // sender email address
    to: process.env.EMAIL, // recipient email address
    subject: "Portfolio Submission",
    text: `
      
      Name: ${name}
      Email: ${email}
      Comment: ${comment}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
};

module.exports = {
  submitForm,
};
