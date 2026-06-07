import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { getIrremediable, getNextIrremediable } from "@/content/irremediables";

export const Route = createFileRoute("/irremediables/$slug")({
  loader: ({ params }) => {
    const proyecto = getIrremediable(params.slug);
    if (!proyecto) throw notFound();
    return { proyecto };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.proyecto;
    const title = p
      ? `${p.titulo} — Ideas Irremediables`
      : "Irremediable — Ideas Irremediables";
    const description = p?.resumen ?? "Un proyecto de Ideas Irremediables.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
      links: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap",
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-40 md:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          No encontrado
        </p>
        <h1 className="mt-6 font-serif text-4xl md:text-5xl">
          Esta idea aún no es irremediable.
        </h1>
        <p className="mt-8">
          <Link to="/" hash="irremediables" className="underline underline-offset-4">
            Volver al índice
          </Link>
        </p>
      </main>
      <Footer />
    </div>
  ),
  component: ProyectoPage,
});

function ProyectoPage() {
  const { proyecto } = Route.useLoaderData();
  const siguiente = getNextIrremediable(proyecto.slug);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <article className="mx-auto max-w-2xl px-6 py-24 md:px-10 md:py-32">
          <Link
            to="/"
            hash="irremediables"
            className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
          >
            ← Irremediables
          </Link>

          <header className="mt-12 border-b border-[color:var(--rule)] pb-12">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Irremediable {proyecto.numero}
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-balance md:text-6xl">
              {proyecto.titulo}
            </h1>
          </header>

          <p className="mt-12 font-serif text-2xl text-pretty text-muted-foreground md:text-3xl">
            “{proyecto.observacion}”
          </p>

          <div className="prose-essay mt-16 text-lg text-pretty">
            {proyecto.cuerpo.map((parr: string, i: number) => (
              <p key={i}>{parr}</p>
            ))}
          </div>
        </article>

        {siguiente && (
          <nav className="mx-auto max-w-2xl border-t border-[color:var(--rule)] px-6 py-16 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Siguiente
            </p>
            <Link
              to="/irremediables/$slug"
              params={{ slug: siguiente.slug }}
              className="mt-4 block font-serif text-3xl hover:text-[color:var(--accent)] transition-colors md:text-4xl"
            >
              {siguiente.numero} — {siguiente.titulo} →
            </Link>
          </nav>
        )}
      </main>
      <Footer />
    </div>
  );
}
