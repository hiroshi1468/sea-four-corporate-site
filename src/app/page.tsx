"use client";

import BusinessSection from "@/components/BusinessSection/BusinessSection";
import FounderMessage from "@/components/FounderMessage/FounderMessage";
import Hero from "@/components/Hero/Hero";
import { IMAGE_PASH } from "@/consts/common/imagePass";
import { SEA_COMMON } from "@/consts/common/text";
import { useScrollY } from "@/hooks/useScrollY";
import React from "react";

export default function Home() {
  const scrollY = useScrollY();
  const heroFade = Math.max(0, 1 - scrollY / 700); // 600pxで完全に消える
  const founderAppear = Math.min(1, scrollY / 400); // 400pxで完全に現れる

  return (
    <main>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 100,
          pointerEvents: heroFade === 0 ? "none" : "auto",
          opacity: heroFade,
          transition: "opacity 0.4s",
        }}
      >
        <Hero
          companyName={SEA_COMMON.COMPANY_NAME}
          backgroundImageUrl={IMAGE_PASH.HOME.HERO}
        />
      </div>
      <div style={{ paddingTop: "100vh" }}>
        <div
          style={{
            position: "relative",
            zIndex: 101,
            opacity: founderAppear,
            transform: `translateY(${50 * (1 - founderAppear)}px)`,
            transition: "opacity 0.6s, transform 0.6s",
          }}
        >
          <FounderMessage />
        </div>
        <BusinessSection />
      </div>
    </main>
  );
}
