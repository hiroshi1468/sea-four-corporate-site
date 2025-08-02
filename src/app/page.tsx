import BusinessSection from "@/components/BusinessSection/BusinessSection";
import FounderMessage from "@/components/FounderMessage/FounderMessage";
import Hero from "@/components/Hero/Hero";
import { IMAGE_PASH } from "@/consts/common/imagePass";
import { SEA_COMMON } from "@/consts/common/text";

export default function Home() {
  return (
    <main>
      <Hero
        companyName={SEA_COMMON.COMPANY_NAME}
        backgroundImageUrl={IMAGE_PASH.HOME.HERO}
      />
      <FounderMessage />
      <BusinessSection />
    </main>
  );
}
