"use client";

import styles from "@/components/Header/header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBg, setShowBg] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  // メニュー外クリックで閉じる
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  // メニュー項目クリックで閉じる
  const handleMenuItemClick = () => setMobileMenuOpen(false);

  return (
    <header className={`${styles.header} ${showBg ? styles.active : ""}`}>
      <div className={styles.container}>
        {/* ロゴ + 社名 */}
        <Link href="/" className={styles.navLink}>
          <div className={styles.logoArea}>
            <Image
              src="/sea-name-in-logo.png"
              alt="会社ロゴ"
              width={80}
              height={80}
              className={styles.logo}
            />
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

      {/* モバイル用メニュー展開（オーバーレイ＋右側スライド） */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <nav
            ref={mobileMenuRef}
            className={`${styles.mobileMenu} ${
              mobileMenuOpen ? styles.open : ""
            }`}
          >
            <Link
              href="/"
              className={styles.mobileItem}
              onClick={handleMenuItemClick}
            >
              トップ
            </Link>
            <Link
              href="/company/profile"
              className={styles.mobileItem}
              onClick={handleMenuItemClick}
            >
              会社概要
            </Link>
            <Link
              href="/company/PrivacyPolicy"
              className={styles.mobileItem}
              onClick={handleMenuItemClick}
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/message"
              className={styles.mobileItem}
              onClick={handleMenuItemClick}
            >
              代表者メッセージ
            </Link>
            <Link
              href="/contact"
              className={styles.mobileItem}
              onClick={handleMenuItemClick}
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
