"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

const fieldClasses =
  "w-full rounded border border-hairline bg-sand px-4 py-3 text-body-s text-ink placeholder:text-ink-faint transition-colors duration-300 focus:border-gold focus:outline-none";

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  as?: "input" | "textarea" | "select";
  type?: "text" | "email" | "tel";
  required?: boolean;
  rows?: number;
  placeholder?: string;
  options?: string[];
  className?: string;
}

/**
 * The single form-control primitive for the site — label styling,
 * focus states, and spacing stay identical whether it renders as an
 * input, a textarea, or a select.
 */
export function FormField({
  label,
  name,
  value,
  onChange,
  as = "input",
  type = "text",
  required = false,
  rows = 5,
  placeholder,
  options = [],
  className,
}: FormFieldProps) {
  const id = useId();

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={id}
        className="font-mono text-caption uppercase tracking-[0.1em] text-ink-faint"
      >
        {label}
        {required && <span className="text-gold-text"> *</span>}
      </label>

      {as === "textarea" && (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(fieldClasses, "resize-none")}
        />
      )}

      {as === "select" && (
        <select
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(fieldClasses, !value && "text-ink-faint")}
        >
          <option value="" disabled>
            {placeholder ?? "Select one"}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="text-ink">
              {option}
            </option>
          ))}
        </select>
      )}

      {as === "input" && (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={fieldClasses}
        />
      )}
    </div>
  );
}
