import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, limit) {
  return String(value ?? "").trim().slice(0, limit);
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = clean(body.name, 80);
    const email = clean(body.email, 160);
    const message = clean(body.message, 4000);

    if (!name || !emailPattern.test(email) || message.length < 10) {
      return NextResponse.json(
        {
          message:
            "Please enter your name, a valid email and a short message.",
        },
        { status: 400 },
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      SMTP_FROM,
      CONTACT_TO,
    } = process.env;

    if (
      !SMTP_HOST ||
      !SMTP_USER ||
      !SMTP_PASS ||
      !SMTP_FROM ||
      !CONTACT_TO
    ) {
      console.error("Missing SMTP environment variables.");

      return NextResponse.json(
        { message: "The contact form is not configured yet." },
        { status: 503 },
      );
    }

    const port = Number(SMTP_PORT || 465);

 const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port,
  secure: port === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: process.env.SMTP_ALLOW_SELF_SIGNED !== "true",
  },
});

    await transporter.sendMail({
      from: SMTP_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        message,
      ].join("\n"),
    });

    return NextResponse.json({
      message: "Thank you — your message has been sent.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}