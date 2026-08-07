import Image from "next/image";
import { redis, isRedisConfigured } from "@/lib/redis";
import { LogoutButton } from "@/components/admin/LogoutButton";

// Always fetch fresh — this is a live dashboard, never cache it.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

interface Submission {
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  interest: string | null;
  message: string;
  receivedAt: string;
}

const TRACKED_PATHS = ["/", "/services", "/solutions", "/portfolio", "/about", "/insights", "/contact"];

async function getSubmissions(): Promise<Submission[]> {
  if (!redis) return [];
  const raw = await redis.lrange<string | Submission>("contact:submissions", 0, 99);
  return raw.map((item) => (typeof item === "string" ? JSON.parse(item) : item));
}

async function getMetrics() {
  if (!redis) return { totalViews: 0, totalClicks: 0, topClicks: [], pageViews: [] };

  const [totalViews, totalClicks] = await Promise.all([
    redis.get<number>("views:total"),
    redis.get<number>("clicks:total"),
  ]);

  const pageViewCounts = await Promise.all(
    TRACKED_PATHS.map((path) => redis!.get<number>(`views:${path}`))
  );
  const pageViews = TRACKED_PATHS.map((path, i) => ({
    path,
    views: pageViewCounts[i] ?? 0,
  })).sort((a, b) => b.views - a.views);

  return {
    totalViews: totalViews ?? 0,
    totalClicks: totalClicks ?? 0,
    pageViews,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default async function AdminDashboardPage() {
  if (!isRedisConfigured) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-ivory px-gutter text-center">
        <div className="max-w-md">
          <p className="font-display text-display-m text-ink">Storage isn&rsquo;t configured yet.</p>
          <p className="mt-3 text-body-s text-ink-soft">
            Set <code className="font-mono">UPSTASH_REDIS_REST_URL</code> and{" "}
            <code className="font-mono">UPSTASH_REDIS_REST_TOKEN</code> in Vercel&rsquo;s
            Environment Variables to start collecting submissions and metrics — see{" "}
            <code className="font-mono">.env.example</code>.
          </p>
        </div>
      </main>
    );
  }

  const [submissions, metrics] = await Promise.all([getSubmissions(), getMetrics()]);
  const clickThroughRate =
    metrics.totalViews > 0 ? ((metrics.totalClicks / metrics.totalViews) * 100).toFixed(1) : "—";

  return (
    <main className="min-h-screen bg-ivory pb-24">
      <header className="border-b border-hairline bg-sand">
        <div className="container-shell flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="" aria-hidden="true" width={32} height={32} className="h-8 w-8 rounded-full" />
            <p className="font-display text-lg text-ink">Voltheris Admin</p>
          </div>
          <LogoutButton />
        </div>
      </header>

      <div className="container-shell pt-12">
        <p className="u-eyebrow">Metrics</p>
        <p className="mt-2 max-w-prose text-body-s text-ink-faint">
          Self-hosted, approximate counts — page loads and CTA clicks
          tracked directly by this site, not a full analytics
          platform. Good for a directional read, not a precise audit.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-card border border-hairline bg-sand p-6">
            <p className="font-mono text-display-l text-gold-text">{metrics.totalViews}</p>
            <p className="mt-1 text-caption text-ink-faint">Total page views</p>
          </div>
          <div className="rounded-card border border-hairline bg-sand p-6">
            <p className="font-mono text-display-l text-gold-text">{metrics.totalClicks}</p>
            <p className="mt-1 text-caption text-ink-faint">Total CTA clicks</p>
          </div>
          <div className="rounded-card border border-hairline bg-sand p-6">
            <p className="font-mono text-display-l text-gold-text">{clickThroughRate}%</p>
            <p className="mt-1 text-caption text-ink-faint">Clicks ÷ views</p>
          </div>
          <div className="rounded-card border border-hairline bg-sand p-6">
            <p className="font-mono text-display-l text-gold-text">{submissions.length}</p>
            <p className="mt-1 text-caption text-ink-faint">Form submissions on file</p>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto rounded-card border border-hairline bg-sand">
          <table className="w-full text-left text-body-s">
            <thead>
              <tr className="border-b border-hairline">
                <th className="px-5 py-3 font-mono text-caption uppercase tracking-[0.1em] text-ink-faint">Page</th>
                <th className="px-5 py-3 font-mono text-caption uppercase tracking-[0.1em] text-ink-faint">Views</th>
              </tr>
            </thead>
            <tbody>
              {metrics.pageViews.map((row) => (
                <tr key={row.path} className="border-b border-hairline last:border-b-0">
                  <td className="px-5 py-3 font-mono text-ink-soft">{row.path}</td>
                  <td className="px-5 py-3 text-ink">{row.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container-shell mt-14">
        <p className="u-eyebrow">Form submissions</p>
        <p className="mt-2 text-body-s text-ink-faint">
          Most recent {submissions.length} of up to 500 retained.
        </p>

        {submissions.length === 0 ? (
          <p className="mt-8 text-body text-ink-soft">No submissions yet.</p>
        ) : (
          <div className="mt-6 space-y-4">
            {submissions.map((submission, i) => (
              <div key={i} className="rounded-card border border-hairline bg-sand p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-display text-display-m text-ink">{submission.name}</p>
                  <p className="font-mono text-caption text-ink-faint">
                    {formatDate(submission.receivedAt)}
                  </p>
                </div>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-caption text-ink-faint">
                  <a href={`mailto:${submission.email}`} className="underline hover:text-gold-text">
                    {submission.email}
                  </a>
                  {submission.company && <span>{submission.company}</span>}
                  {submission.phone && <span>{submission.phone}</span>}
                  {submission.interest && <span>Interested in: {submission.interest}</span>}
                </div>
                <p className="mt-4 max-w-prose text-body-s text-ink-soft">{submission.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
