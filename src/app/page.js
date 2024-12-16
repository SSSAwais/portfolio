import HeroSection from "@/components/hero-section/hero-section";
import MyServices from "./my-services/my-services";
import MyPortfolio from "./my-portfolio/my-porfolio";
import MyContact from "./my-contact/my-contact";
import HireMe from "./hire-me/hire-me";
import AboutMe from "./about-me/about-me";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MyServices />
      <MyPortfolio />
      <AboutMe />
      <MyContact />
      <HireMe />
    </>
  );
}
