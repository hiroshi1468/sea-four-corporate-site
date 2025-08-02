import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail", // 他のサービスを使う場合は変更
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `【お問い合わせ】${subject}（${name}様より）`,
    html: `
      <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
        <h2 style="color: #0077b6;">新しいお問い合わせを受信しました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>題名:</strong> ${subject}</p>
        <p><strong>メッセージ:</strong></p>
        <div style="padding: 0.5rem 1rem; background: #f4f4f4; border-left: 4px solid #0077b6; white-space: pre-wrap;">
          ${message || "(未記入)"}
        </div>
        <hr style="margin-top: 2rem;" />
        <p style="font-size: 12px; color: #999;">
          ※このメールはお問い合わせフォームから自動送信されています。
        </p>
      </div>
    `,
  };

  try {
    console.log("送信開始", mailOptions);
    await transporter.sendMail(mailOptions);
    console.log("送信成功");
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("送信エラー:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
