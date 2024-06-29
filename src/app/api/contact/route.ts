import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import dotenv from "dotenv";
import { FormData } from "@/app/(pages)/contact/page";
dotenv.config();

const user = 'leerobertdyer@gmail.com'
const pass = process.env.GMAIL_PASS

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user,
        pass
    }
})

async function sendEmail({ name, email, message }: FormData) {
    try {
      await transporter.sendMail({
        from: email,
        to: "lee.dyer.dev@gmail.com",
        subject: "New Lee Dyer Form Submission",
        html: `<p>You have received a new form submission:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p>Message: ${message}</p>`,
      });
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Error sending email:" + error);
    }
  }
  
  export async function POST(req: Request) {
    try {
      const body = await req.json();
      await sendEmail(body);
      return NextResponse.json({ message: "Email sent successfully" });
    } catch (e) {
      return NextResponse.json({ errors: e }, { status: 400 });
    }
  }
  