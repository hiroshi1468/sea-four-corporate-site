import CEOMessage from "@/components/CEOMessage/CEOMessage";
import CompanyProfile from "@/components/CompanyProfile/CompanyProfile";
import Hero from "@/components/Hero/Hero";
import { IMAGE_PASH } from "@/consts/common/imagePass";
import { SEA_COMMON } from "@/consts/common/text";

export default function Stub() {
  return (
    <>
      <main>
        <Hero
          companyName={SEA_COMMON.COMPANY_NAME}
          backgroundImageUrl={IMAGE_PASH.HOME.HERO}
        />
        <CEOMessage />
        <CompanyProfile />
      </main>
    </>
  );
}
