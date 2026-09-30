import { createTransport } from "nodemailer";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const body = await request.json();
    const { gmail, description } = body;
    const transport = createTransport({
      service: "gmail",
      auth: {
        user: "abdullah64009@gmail.com",
        pass: process.env.APP_PASSWORD,
      },
    });
    const mailOption = {
      from: "abdullah64009@gmail.com",
      to: "sibghatullah295295@gmail.com",
      subject: `Client Email is : ${gmail}`,
      text: `Client want to say that : ${description}`,
    };
    await transport.sendMail(mailOption);
    return NextResponse.json({
      success: true,
      message: "Your message is sended to Sibghatullah",
    });
  } catch (error) {
    console.log("There is an error in sending email", error);
    return NextResponse.json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
