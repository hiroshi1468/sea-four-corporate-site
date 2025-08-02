// components/common/SectionTitle.tsx
import React from "react";
import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h1 className={styles.category}>
      <span className={styles.decorations}>
        <span className={styles.line}></span>
        <span className={styles.diamondSolid}></span>
        <span className={styles.diamondHollow}></span>
      </span>
      {children}
    </h1>
  );
}
