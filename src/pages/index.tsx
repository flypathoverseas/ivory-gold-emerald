
import { Hero } from "@/components/Hero";
import { VisaCards } from "@/components/VisaCards";
import { CountryGrid } from "@/components/CountryGrid";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";



export default function Index() {
  return (
    <main>
      <Hero />
      <VisaCards />
      <CountryGrid />
      <WhyUs />
      <Testimonials />
      <Contact />
    </main>
  );
}
