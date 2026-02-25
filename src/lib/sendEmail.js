import nodemailer from "nodemailer";

export const sendBookingEmail = async ({
  to,
  serviceTitle,
  durationType,
  durationValue,
  totalCost,
  location,
}) => {

  const transporter = nodemailer.createTransport({

    service: "gmail",

    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },

  });

  const mailOptions = {

    from: `"Care.xyz" <${process.env.EMAIL_USER}>`,

    to,

    subject: "Booking Confirmation - Care.xyz",

    html: `
      <h2>Your booking is confirmed (Pending Approval)</h2>

      <p><b>Service:</b> ${serviceTitle}</p>

      <p><b>Duration:</b> ${durationValue} ${durationType}(s)</p>

      <p><b>Total Cost:</b> ৳${totalCost}</p>

      <p><b>Location:</b> 
        ${location.division}, 
        ${location.district}, 
        ${location.city}, 
        ${location.area}
      </p>

      <p>Status: <b>Pending</b></p>

      <br/>

      <p>Thank you for using Care.xyz</p>
    `,

  };

  await transporter.sendMail(mailOptions);

};