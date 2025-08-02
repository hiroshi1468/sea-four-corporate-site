// components/Footer/Footer.tsx
"use client";

import styles from "./Footer.module.css";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} 株式会社SEA. All rights reserved.
        </div>
        <div className={styles.icons}>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className={styles.iconLink}
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles.iconLink}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
