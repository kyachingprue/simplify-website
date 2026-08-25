import Hero from "../components/Hero";
import Services from "../components/Services";
import FeatureBanner from "../components/FeatureBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import Industries from "../components/Industries";
import QuoteBanner from "../components/QuoteBanner";
import HowItWorks from "../components/HowItWorks";
import TrackShipment from "../components/TrackShipment";
import Testimonials from "../components/Testimonials";
import Insights from "../components/Insights";
import CTASection from "../components/CTASection";
import Partners from "../components/Partners";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeatureBanner />
      <WhyChooseUs />
      <Industries />
      <QuoteBanner />
      <HowItWorks />
      <TrackShipment />
      <Testimonials />
      <Insights />
      <CTASection />
      <Partners />
    </>
  );
}
