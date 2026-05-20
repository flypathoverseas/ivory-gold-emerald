import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { VisaCards } from "@/components/VisaCards";
import { CountryGrid } from "@/components/CountryGrid";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fly Path Overseas — Luxury Global Mobility & Visa Experts" },
      { name: "description", content: "Premium work, student & tourist visa concierge. Bespoke immigration strategy for Canada, UK, Australia, Germany, UAE & more." },
    ],
  }),
});

function Index() {
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
