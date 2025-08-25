"use client";

import styles from "./FounderMessage.module.css";

export default function FounderMessage() {
  return (
    <section className={styles.founderMessageBg}>
      <div className={styles.overlay}></div>
      <div className={styles.textBox}>
        <h2 className={styles.title}>創業者の想い</h2>
        <p className={styles.subtitle}>
          意志あるところに、道は開ける。
          <br />
          <span className={styles.en}>
            Where there is a will, there is a way.
          </span>
        </p>
        <div className={styles.text}>
          <p>
            私たち株式会社SEAは、広大な海と空のように、限りない可能性を信じ、強い意志と挑戦の心で、未来への航路を切り開いていきます。
          </p>
          <p>
            社名「SEA」には、
            <strong>
              Strength（強さ）・ Evolution（進化）・ Action（行動）
            </strong>
            という意味を込めました。過去を敬い、現在に挑み、そして未来を創る。この3つの力を、私たちの企業の原動力としています。
          </p>
          <p>
            そしてもう一つ、私にとって特別な数字「4」。それは、若い頃ずっと背中を追いかけていた存在の象徴でした。挑戦し続けること、努力を積み重ねること、超えるべき目標があることの尊さを、その背中から学びました。
          </p>
          <p>この精神が、今のSEAの土台です。</p>
          <p>
            SEAは、風任せではなく自ら舵を取り進むヨットのように、仲間とともに力強く進みながら、人と人をつなぎ、新しい価値を生み出す企業でありたいと願っています。
          </p>
          <p>
            誰もが自分らしく輝ける社会へ
            <br />
            その一歩を、SEAから。
          </p>
        </div>
      </div>
    </section>
  );
}
