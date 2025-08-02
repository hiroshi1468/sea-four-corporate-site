import Banner from "@/components/Banner/Banner";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import { IMAGE_PASH } from "@/consts/common/imagePass";

export default function PrivacyPage() {
  return (
    <main>
      <Banner
        title="プライバシーポリシー"
        backgroundImageUrl={IMAGE_PASH.HOME.HERO}
      />
      <PrivacyPolicy />
    </main>
  );
}
