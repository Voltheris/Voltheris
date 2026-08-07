"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error ?? "Invalid username or password.");
        setSubmitting(false);
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-ivory px-gutter">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center">
          <Image src="/logo.png" alt="Voltheris" width={48} height={48} className="h-12 w-12 rounded-full" />
          <p className="mt-4 font-mono text-caption uppercase tracking-[0.1em] text-ink-faint">
            Admin
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5 rounded-card border border-hairline bg-sand p-8"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="font-mono text-caption uppercase tracking-[0.1em] text-ink-faint">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded border border-hairline bg-ivory px-4 py-3 text-body-s text-ink focus:border-gold focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-mono text-caption uppercase tracking-[0.1em] text-ink-faint">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border border-hairline bg-ivory px-4 py-3 text-body-s text-ink focus:border-gold focus:outline-none"
            />
          </div>

          {error && (
            <p role="alert" className="text-body-s text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded bg-ink px-6 py-3.5 font-mono text-eyebrow uppercase tracking-[0.1em] text-ivory transition-colors duration-300 hover:bg-gold disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
