import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WorkVisa } from "@/components/WorkVisa";
import { StudentVisa, TouristVisa } from "@/components/SecondaryVisas";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fly Path Overseas — Luxury Global Mobility & Visa Experts" },
      { name: "description", content: "Premium work, student & tourist visa concierge. Bespoke immigration strategy for Canada, UK, Australia, Germany, UAE & more." },
      { property: "og:title", content: "Fly Path Overseas — Luxury Global Mobility" },
      { property: "og:description", content: "Premium work, student & tourist visa concierge for global professionals." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-ivory">
      <Navbar />
      <Hero />
      <WorkVisa />
      <StudentVisa />
      <TouristVisa />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
