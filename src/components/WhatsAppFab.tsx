import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919701947979"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-onyx shadow-gold transition-transform hover:scale-110"
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-gold/40 animate-ping" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}
