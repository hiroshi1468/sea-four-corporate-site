"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FounderMessage.module.css";
import SectionTitle from "../Accessory/Titte/SectionTitle";

export default function FounderMessage() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles.founderMessage} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.inner}>
        <div className={styles.left}>
          <SectionTitle>創業者の想い</SectionTitle>
        </div>
        <div className={styles.right}>
          <p className={styles.subtitle}>
            意志あるところに、道は開ける。
            <br />
            Where there is a will, there is a way.
          </p>

          <div className={styles.text}>
            <p>
              私たち株式会社SEAは、
              <br />
              広大な海と空のように、限りない可能性を信じ、
              <br />
              強い意志と挑戦の心で、未来への航路を切り開いていきます。
            </p>
            <p>
              社名「SEA」には、
              <br />
              <strong>
                Strength（強さ）・ Evolution（進化）・ Action（行動）
              </strong>
              という意味を込めました。
              <br />
              過去を敬い、現在に挑み、そして未来を創る。
              <br />
              この3つの力を、私たちの企業の原動力としています。
            </p>
            <p>
              そしてもう一つ、私にとって特別な数字「4」。
              <br />
              それは、若い頃ずっと背中を追いかけていた存在の象徴でした。
              <br />
              挑戦し続けること、努力を積み重ねること、
              <br />
              超えるべき目標があることの尊さを、その背中から学びました。
            </p>
            <p>この精神が、今のSEAの土台です。</p>
            <p>
              SEAは、風任せではなく自ら舵を取り進むヨットのように、
              <br />
              仲間とともに力強く進みながら、人と人をつなぎ、
              <br />
              新しい価値を生み出す企業でありたいと願っています。
            </p>
            <p>
              誰もが自分らしく輝ける社会へ
              <br />
              その一歩を、SEAから。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
