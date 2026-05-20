
import { PageHero } from "@/components/PageHero";
import { Contact } from "@/components/Contact";
import hero from "@/assets/hero-airport.jpg";



export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Concierge"
        title={<>Let's <span className="italic text-gradient-gold">Talk</span></>}
        subtitle="A senior advisor will respond within one business day."
        image={hero}
      />
      <Contact />
    </main>
  );
}
