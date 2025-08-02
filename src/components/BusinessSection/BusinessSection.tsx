"use client";

import Image from "next/image";
import SectionTitle from "../Accessory/Titte/SectionTitle";
import styles from "./BusinessSection.module.css";

type ServiceItem = {
  title: string;
  image: string;
  description: string;
};

type BusinessBlockProps = {
  category: string;
  description: string;
  services: ServiceItem[];
};

const BusinessBlock = ({
  category,
  description,
  services,
}: BusinessBlockProps) => (
  <section className={styles.block}>
    <div className={styles.bstitle}>
      <h2 className={styles.bstitletext}>{category}</h2>
    </div>
    <p className={styles.description}>{description}</p>
    <div className={styles.services}>
      {services.map((service, index) => (
        <div key={index} className={styles.serviceCard}>
          <div className={styles.imageWrapper}>
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
          <div className={styles.serviceText}>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default function BusinessSection() {
  return (
    <div className={styles.container}>
      <SectionTitle>事業内容</SectionTitle>
      <BusinessBlock
        category="WEB開発事業"
        description="企業様のニーズに合わせたWebサイトやWebアプリケーションの設計・開発を行っています。最新の技術を活用し、ユーザーエクスペリエンス（UX）やユーザビリティを重視した高品質なWebソリューションを提供します。業種や目的に合わせて、柔軟に対応できる開発を行い、ビジネスの成長をサポートします。"
        services={[
          {
            title: "Webサイト・Webアプリケーションの設計・開発",
            image: "/sample.png",
            description: "最新技術を活用、高品質なシステムを提供",
          },
          {
            title: "UI/UX設計",
            image: "/sample.png",
            description: "ユーザー体験を重視したデザイン設計を提供",
          },
          {
            title: "技術ソリューション提供",
            image: "/sample.png",
            description: "目的に応じて最適な技術を選定し、導入支援",
          },
        ]}
      />

      <BusinessBlock
        category="イベント企画・運営事業"
        description="ビジネス交流会や各種飲み会、セミナーなど、さまざまなイベントの企画から運営までを一貫してサポートします。目的に応じた効果的なイベントの設計・実施をお手伝いし、参加者にとって価値のある時間を提供します。企業様のブランド価値向上やネットワーキングの強化を目指したイベント運営を行っています。"
        services={[
          {
            title: "イベント企画・運営",
            image: "/sample.png",
            description: "交流会やセミナー、懇親会などを一貫して支援",
          },
          {
            title: "コンテンツ設計・運営支援",
            image: "/sample.png",
            description: "イベントの目的に合った設計・実施をサポート",
          },
        ]}
      />

      <BusinessBlock
        category="人材紹介業"
        description="転職仲介およびSES紹介を通じて、企業と人材を結びます。"
        services={[
          {
            title: "正社員転職仲介",
            image: "/sample.png",
            description: "求職者と企業を適切にマッチング",
          },
          {
            title: "SES人材紹介",
            image: "/sample.png",
            description: "IT技術者をプロジェクトに応じて紹介",
          },
        ]}
      />
    </div>
  );
}
