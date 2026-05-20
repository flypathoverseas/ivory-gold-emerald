import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Contact } from "@/components/Contact";
import hero from "@/assets/hero-airport.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Fly Path Overseas" },
      { name: "description", content: "Book a private consultation with a senior immigration advisor." },
      { property: "og:title", content: "Contact Fly Path Overseas" },
    ],
  }),
});

function ContactPage() {
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
