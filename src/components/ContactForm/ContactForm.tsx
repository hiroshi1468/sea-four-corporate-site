"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("送信失敗");
      }
    } catch (err) {
      console.error("送信エラー:", err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        氏名
        <input
          className={styles.input}
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.label}>
        メールアドレス
        <input
          className={styles.input}
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.label}>
        題名
        <input
          className={styles.input}
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.label}>
        メッセージ本文（任意）
        <textarea
          className={styles.textarea}
          name="message"
          value={form.message}
          onChange={handleChange}
        />
      </label>
      <button
        className={styles.button}
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "送信中..." : "送信"}
      </button>
      {status === "success" && (
        <p className={styles.success}>送信が完了しました。</p>
      )}
      {status === "error" && (
        <p className={styles.error}>
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      )}
    </form>
  );
}
