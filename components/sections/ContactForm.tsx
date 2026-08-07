"use client";

import { useState, type FormEvent } from "react";
import { TbCheck, TbAlertCircle } from "react-icons/tb";
import { services } from "@/content/services";
import { company } from "@/content/company";
import { FormField } from "@/components/ui/FormField";
import { useMagnetic } from "@/hooks/useMagnetic";

const initialState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  interest: "",
  message: "",
};

type FormState = typeof initialState;
type Status = "idle" | "submitting" | "success" | "error";

/**
 * Posts to app/api/contact/route.ts, which sends the message via
 * Resend. That route needs RESEND_API_KEY set (and, before real
 * launch, a verified sending domain) — see the setup comment at the
 * top of that file. Until then this will show the error state below,
 * not silently pretend to succeed.
 */
export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const magnetic = useMagnetic<HTMLButtonElement>(0.2);

  function update<K extends keyof FormState>(key: K) {
    return (value: string) => setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage("Something went wrong. Please try again, or email us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-card border border-gold/40 bg-sand p-10 text-center">
        <TbCheck className="text-3xl text-gold-text" aria-hidden="true" />
        <p className="mt-4 font-display text-display-m text-ink">Message received.</p>
        <p className="mx-auto mt-2 max-w-prose text-body-s text-ink-soft">
          We reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          label="Name"
          name="name"
          required
          value={form.name}
          onChange={update("name")}
          placeholder="Jane Whitfield"
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={update("email")}
          placeholder="jane@company.com"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          label="Company"
          name="company"
          value={form.company}
          onChange={update("company")}
          placeholder="Company name"
        />
        <FormField
          label="Phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={update("phone")}
          placeholder="Optional"
        />
      </div>

      <FormField
        as="select"
        label="What are you interested in?"
        name="interest"
        value={form.interest}
        onChange={update("interest")}
        placeholder="Select one"
        options={["General inquiry", ...services.map((s) => s.title)]}
      />

      <FormField
        as="textarea"
        rows={5}
        label="Message"
        name="message"
        required
        value={form.message}
        onChange={update("message")}
        placeholder="What's going on in your pipeline right now?"
      />

      {status === "error" && errorMessage && (
        <p role="alert" className="flex items-start gap-2 text-body-s text-red-700">
          <TbAlertCircle className="mt-0.5 shrink-0" aria-hidden="true" />
          <span>
            {errorMessage} You can also reach us directly at{" "}
            <a href={`mailto:${company.email}`} className="underline hover:text-red-800">
              {company.email}
            </a>
            .
          </span>
        </p>
      )}

      <div className="flex flex-col items-start gap-3">
        <button
          ref={magnetic.ref}
          onPointerMove={magnetic.onPointerMove}
          onPointerLeave={magnetic.onPointerLeave}
          onPointerDown={magnetic.onPointerDown}
          onPointerUp={magnetic.onPointerUp}
          type="submit"
          disabled={status === "submitting"}
          className="rounded bg-ink px-8 py-4 font-mono text-eyebrow uppercase tracking-[0.1em] text-ivory transition-colors duration-300 ease-signature hover:bg-gold disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
        <p className="text-caption text-ink-faint">
          We reply within one business day.
        </p>
      </div>
    </form>
  );
}
