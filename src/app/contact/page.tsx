import Banner from "@/components/Banner/Banner";
import ContactForm from "@/components/ContactForm/ContactForm";
import { IMAGE_PASH } from "@/consts/common/imagePass";

export default function ContactPage() {
  return (
    <main>
      <Banner title="お問い合わせ" backgroundImageUrl={IMAGE_PASH.HOME.HERO} />
      <ContactForm />
    </main>
  );
}
