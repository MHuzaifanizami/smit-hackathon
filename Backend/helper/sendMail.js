import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL, // generated ethereal user
    pass: process.env.PASSWORD, // generated ethereal password
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function otpMail({email, otp}) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.EMAIL, // sender address
    to: email, // list of receivers
    text: "Verify your OTP", // plain text body
    html: `<p>Your OTP is ${otp} , Please Verify This OTP`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

