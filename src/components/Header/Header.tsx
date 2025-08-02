"use client";

import styles from "@/components/Header/header.module.css";
import { SEA_COMMON } from "@/consts/common/text";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBg, setShowBg] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ドロップダウン制御
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
  };

  // スクロール時の背景制御
  useEffect(() => {
    const handleScroll = () => {
      setShowBg(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${showBg ? styles.active : ""}`}>
      <div className={styles.container}>
        {/* ロゴ + 社名 */}
        <Link href="/" className={styles.navLink}>
          <div className={styles.logoArea}>
            <Image
              src="/SEAlogo.png"
              alt="会社ロゴ"
              width={40}
              height={40}
              className={styles.logo}
            />
            <span className={styles.companyName}>
              {SEA_COMMON.COMPANY_NAME}
            </span>
          </div>
        </Link>

        {/* PC用ナビゲーション */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            トップ
          </Link>

          <div
            className={styles.dropdownWrapper}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className={styles.navLink}>企業情報</span>
            {isOpen && (
              <div className={styles.dropdown}>
                <Link href="/company/profile" className={styles.dropdownItem}>
                  会社概要
                </Link>
                <Link
                  href="/company/PrivacyPolicy"
                  className={styles.dropdownItem}
                >
                  プライバシーポリシー
                </Link>
              </div>
            )}
          </div>

          <Link href="/message" className={styles.navLink}>
            代表者メッセージ
          </Link>
          <Link href="/contact" className={styles.navLink}>
            お問い合わせ
          </Link>
        </nav>

        {/* モバイルメニューアイコン */}
        <div
          className={styles.menuIcon}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <HiMenu size={24} />
        </div>
      </div>

      {/* モバイル用メニュー展開 */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileItem}>
            トップ
          </Link>
          <Link href="/company/profile" className={styles.mobileItem}>
            会社概要
          </Link>
          <Link href="/company/PrivacyPolicy" className={styles.mobileItem}>
            プライバシーポリシー
          </Link>
          <Link href="/message" className={styles.mobileItem}>
            代表者メッセージ
          </Link>
          <Link href="/contact" className={styles.mobileItem}>
            お問い合わせ
          </Link>
        </div>
      )}
    </header>
  );
}
