import Banner from "@/components/Banner/Banner";
import ContactForm from "@/components/ContactForm/ContactForm";
import { IMAGE_PASH } from "@/consts/common/imagePass";

export default function ContactPage() {
  return (
    <main>
      <Banner
        title="代表者メッセージ"
        backgroundImageUrl={IMAGE_PASH.HOME.HERO}
      />
      <ContactForm />
    </main>
  );
}
