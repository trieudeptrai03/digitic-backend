const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");
require("dotenv").config();

const sendEmail = asyncHandler(async (data,req,res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    service: "false",
    auth: {
      user: "dongtrieubl03@gmail.com",
      pass: "hjurldlghjmuxxpn",
    },
  });

  let info =await transporter.sendMail({
    from: "Hello you =]]<abc@gmail.com>",
    to: data.to, // Sử dụng giá trị của biến data.to
    subject: data.subject, // Sử dụng giá trị của biến data.subject
    text: data.text, // Sử dụng giá trị của biến data.text
    html: data.html, // Sử dụng giá trị của biến data.html
  });


  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});

module.exports = sendEmail;
