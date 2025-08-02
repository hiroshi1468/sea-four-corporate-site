import Banner from "@/components/Banner/Banner";
import CEOMessage from "@/components/CEOMessage/CEOMessage";
import { IMAGE_PASH } from "@/consts/common/imagePass";

export default function Profile() {
  return (
    <main>
      <Banner
        title="代表者メッセージ"
        backgroundImageUrl={IMAGE_PASH.HOME.HERO}
      />
      <CEOMessage />
    </main>
  );
}
