import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { irremediables } from "@/content/irremediables";
import { articulos } from "@/content/cuaderno";

const BASE_URL = "https://raulmartinezpardos.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "monthly", priority: "1.0" },
          { path: "/cuaderno", changefreq: "weekly", priority: "0.9" },
          { path: "/legal/aviso-legal", changefreq: "yearly", priority: "0.2" },
          { path: "/legal/privacidad", changefreq: "yearly", priority: "0.2" },
          ...irremediables.map((p) => ({
            path: `/irremediables/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...articulos.map((a) => ({
            path: `/cuaderno/${a.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
            lastmod: a.fecha,
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
