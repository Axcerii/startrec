import CircleGallery from "../../components/landing/CircleGallery";
import Faq from "../../components/landing/Faq";
import Footer from "../../components/landing/Footer";
import HeaderHero from "../../components/landing/HeaderHero";
import JoinCta from "../../components/landing/JoinCta";
import NavBar from "../../components/landing/NavBar";
import Newsletter from "../../components/landing/Newsletter";
import Problems from "../../components/landing/Problems";
import Reasons from "../../components/landing/Reasons";
import Steps from "../../components/landing/Steps";
import Team from "../../components/landing/Team";
import Testimonials from "../../components/landing/Testimonials";

export default function LandingPage() {
  return (
    <main className="relative w-full overflow-x-clip bg-page text-foreground">
      <NavBar />
      <HeaderHero />

      <div className="flex flex-col gap-36 pt-36 pb-36 lg:gap-[350px] lg:pt-[186px] lg:pb-[297px]">
        <Problems />
        <Steps />
        <Reasons />
        <CircleGallery />
        <Testimonials />
        <Team />
        <JoinCta />
        <Faq />
        <Newsletter />
      </div>

      <Footer />
    </main>
  );
}
