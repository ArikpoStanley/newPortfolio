// app/api/send-email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, message, email } = await req.json();

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // e.g., 'Gmail', 'Yahoo', etc.
      auth: {
        user: "arikpostanley123@gmail.com",
        pass: "vard cveo yuly hgzf",
      },
    });

    // Set up email data
    const mailOptions = {
      from: email,
      to: "arikpostanley123@gmail.com",
      subject: `Feedback From My Get-In-Touch by ${name}`,
      text: message,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 202 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}
