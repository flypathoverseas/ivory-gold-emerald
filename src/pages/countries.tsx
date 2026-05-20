
import { PageHero } from "@/components/PageHero";
import { CountryGrid } from "@/components/CountryGrid";
import { Contact } from "@/components/Contact";
import hero from "@/assets/hero-airport.jpg";



export default function CountriesPage() {
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
