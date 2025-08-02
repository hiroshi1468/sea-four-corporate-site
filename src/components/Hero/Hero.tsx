// components/Hero.tsx
import React from "react";
import styles from "./Hero.module.css";

interface HeroProps {
  companyName: string;
  backgroundImageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ companyName, backgroundImageUrl }) => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className={styles.overlay} />
      <h1 className={styles.title}>{companyName}</h1>
    </section>
  );
};

export default Hero;
