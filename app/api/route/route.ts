"use server"

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Configure the transporter with environment credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Karan's portfolio Contact Form" <${process.env.EMAIL_USER}>`, // Display Name
      replyTo: email, // So you can reply directly to the sender
      to: process.env.EMAIL_USER,
      subject: `📩 New Inquiry from ${name} - Personal Portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}