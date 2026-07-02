import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, AtSign, Phone, MapPin } from "lucide-react";

const visaOptions = ["Work Visa", "Student Visa", "Tourist Visa"] as const;

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  visaType: typeof visaOptions[number];
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export function Contact() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    visaType: "Work Visa",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    }

    if (!form.visaType.trim()) {
      nextErrors.visaType = "Select a visa type.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Message is required.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    setStatusMessage("");

    if (!validate()) {
      setStatus("error");
      setStatusMessage("Please complete all required fields before submitting.");
      return;
    }

    setStatus("loading");
    setStatusMessage("Submitting your request...");

    window.setTimeout(() => {
      console.log("Consultation request submitted:", form);
      setStatus("success");
      setStatusMessage("Thank you! Your request has been submitted successfully.");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        visaType: "Work Visa",
        message: "",
      });
      setErrors({});
    }, 900);
  };

  const handleChange = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  return (
    <section className="relative overflow-hidden bg-onyx/95 py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange/30 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-orange">
              Get In Touch
            </span>
            <h2 className="mt-5 font-display text-4xl text-white sm:text-5xl">
              Begin Your <span className="italic text-gradient-gold">Private Consultation</span>
            </h2>
            <p className="mt-5 max-w-md text-white/70">
              Share a few details and a senior advisor will reach out within one business day.
            </p>

            <ul className="mt-10 space-y-5 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-orange/30 text-orange">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="flex flex-col gap-1">
                  <span>+91 97019 47979</span>
                  <span>+91 9010006714</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-orange/30 text-orange">
                  <MessageCircle className="h-4 w-4" />
                </span>
                WhatsApp 24×7
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-orange/30 text-orange">
                  <AtSign className="h-4 w-4" />
                </span>
                <a href="mailto:info@flypathoverseas.com" className="hover:text-orange transition-colors">info@flypathoverseas.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-orange/30 text-orange">
                  <MapPin className="h-4 w-4" />
                </span>
                Acendia Ark 4th floor kondapur, hyderabad
              </li>
            </ul>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-gold rounded-3xl p-8 shadow-luxury"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Full Name"
                placeholder="John Doe"
                value={form.fullName}
                error={errors.fullName}
                onChange={(value) => handleChange("fullName", value)}
              />
              <Field
                label="Email"
                type="email"
                placeholder="you@email.com"
                value={form.email}
                error={errors.email}
                onChange={(value) => handleChange("email", value)}
              />
              <Field
                label="Phone"
                type="tel"
                placeholder="+91 ..."
                value={form.phone}
                error={errors.phone}
                onChange={(value) => handleChange("phone", value)}
              />
              <div>
                <label className="mb-1.5 block text-[10px] uppercase tracking-[0.25em] text-white/60">Visa Type</label>
                <select
                  value={form.visaType}
                  onChange={(event) => handleChange("visaType", event.target.value)}
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-white focus:border-orange focus:outline-none bg-onyx/40 ${errors.visaType ? "border-rose-500/60" : "border-white/15"}`}
                >
                  {visaOptions.map((option) => (
                    <option key={option} value={option} className="bg-onyx text-white">
                      {option}
                    </option>
                  ))}
                </select>
                {errors.visaType ? (
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-rose-300">{errors.visaType}</p>
                ) : null}
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-[10px] uppercase tracking-[0.25em] text-white/60">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your goals..."
                value={form.message}
                onChange={(event) => handleChange("message", event.target.value)}
                className={`w-full rounded-xl border px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-orange focus:outline-none bg-onyx/40 ${errors.message ? "border-rose-500/60" : "border-white/15"}`}
              />
              {errors.message ? (
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-rose-300">{errors.message}</p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full btn-emerald px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] transition duration-200 hover:scale-[1.01] hover:bg-gold-soft disabled:pointer-events-none disabled:opacity-70"
            >
              {status === "loading" ? "Submitting..." : "Request Consultation"}
            </button>

            {statusMessage ? (
              <p className={`mt-4 text-sm ${status === "success" ? "text-gold" : "text-rose-300"}`} aria-live="polite">
                {statusMessage}
              </p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[10px] uppercase tracking-[0.25em] text-white/60">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`w-full rounded-xl border px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none bg-onyx/40 ${error ? "border-rose-500/60" : "border-white/15"}`}
      />
      {error ? <p className="mt-2 text-xs uppercase tracking-[0.2em] text-rose-300">{error}</p> : null}
    </div>
  );
}
