"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { practiceAreas } from "@/data/practice-areas";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .min(7, "Please enter a phone number we can reach you at.")
    .max(30, "That phone number is too long."),
  caseType: z.string().min(1, "Please choose a case type."),
  message: z
    .string()
    .min(20, "A few more details will help us route your matter (20+ chars).")
    .max(2000, "Please keep your message under 2,000 characters."),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      caseType: "",
      message: "",
    },
  });

  const onSubmit = async (_values: ContactValues) => {
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-10 text-center">
        <div className="mx-auto inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30">
          <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
        </div>
        <h3 className="mt-5 text-2xl font-black text-slate-900">
          Thank you — we&apos;ve received your message.
        </h3>
        <p className="mt-3 text-slate-600 max-w-md mx-auto">
          A partner will review your matter and reach out within one business
          day. Your information is kept strictly confidential.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label="Full name"
          htmlFor="name"
          error={errors.name?.message}
          required
        >
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
            className={inputClass(!!errors.name)}
            placeholder="Jane Doe"
          />
        </Field>

        <Field
          label="Email"
          htmlFor="email"
          error={errors.email?.message}
          required
        >
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
            className={inputClass(!!errors.email)}
            placeholder="jane@company.com"
          />
        </Field>

        <Field
          label="Phone"
          htmlFor="phone"
          error={errors.phone?.message}
          required
        >
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            {...register("phone")}
            className={inputClass(!!errors.phone)}
            placeholder="(213) 555-0123"
          />
        </Field>

        <Field
          label="Case type"
          htmlFor="caseType"
          error={errors.caseType?.message}
          required
        >
          <select
            id="caseType"
            aria-invalid={!!errors.caseType}
            {...register("caseType")}
            className={`${inputClass(!!errors.caseType)} appearance-none bg-white`}
          >
            <option value="">Select a practice area…</option>
            {practiceAreas.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Other">Other / Not sure</option>
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field
          label="How can we help?"
          htmlFor="message"
          error={errors.message?.message}
          required
        >
          <textarea
            id="message"
            rows={6}
            aria-invalid={!!errors.message}
            {...register("message")}
            className={`${inputClass(!!errors.message)} resize-y min-h-[140px]`}
            placeholder="Briefly describe your matter. Please don't include privileged information you wouldn't share with someone before retaining counsel."
          />
        </Field>
      </div>

      <p className="mt-5 text-xs text-slate-500 leading-relaxed">
        Submitting this form does not create an attorney-client relationship.
        Information shared is treated confidentially.
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-7 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="w-5 h-5" aria-hidden="true" />
            Send message
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-bold text-slate-800"
      >
        {label}
        {required && <span className="text-purple-600"> *</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p
          role="alert"
          className="mt-1.5 text-xs font-semibold text-rose-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border ${
    hasError ? "border-rose-400" : "border-slate-300"
  } bg-white px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-purple-500 focus:border-purple-500 transition`;
}
