import Banner from "@/components/Banner/Banner";
import CompanyProfile from "@/components/CompanyProfile/CompanyProfile";
import { IMAGE_PASH } from "@/consts/common/imagePass";

export default function Profile() {
  return (
    <main>
      <Banner title="会社概要" backgroundImageUrl={IMAGE_PASH.HOME.HERO} />
      <CompanyProfile />
    </main>
  );
}
