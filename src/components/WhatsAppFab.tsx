import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <motion.a
      href="https://wa.me/919701947979"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.6, type: "spring", stiffness: 160, damping: 14 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-charcoal shadow-gold gold-glow"
    >
      <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
      <MessageCircle className="relative h-6 w-6" />
    </motion.a>
  );
}
