import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CountryGrid } from "@/components/CountryGrid";
import { Contact } from "@/components/Contact";
import hero from "@/assets/hero-airport.jpg";

export const Route = createFileRoute("/countries")({
  component: CountriesPage,
  head: () => ({
    meta: [
      { title: "Countries — Fly Path Overseas" },
      { name: "description", content: "Active visa programs across Canada, UK, Australia, Germany, UAE & New Zealand." },
      { property: "og:title", content: "Destinations · Fly Path Overseas" },
    ],
  }),
});

function CountriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Destinations"
        title={<>A World <span className="italic text-gradient-gold">Within Reach</span></>}
        subtitle="Six flagship destinations, dozens of active programs, one trusted advisor."
        image={hero}
      />
      <CountryGrid heading={false} />
      <Contact />
    </main>
  );
}
