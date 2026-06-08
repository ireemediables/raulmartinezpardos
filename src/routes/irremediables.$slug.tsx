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
      ? `${p.titulo} — Ideas irremediables`
      : "Irremediable — Ideas irremediables";
    const description = p?.observacion ?? "Un proyecto de Ideas irremediables.";
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
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,400&family=JetBrains+Mono:wght@400&display=swap",
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-40 md:px-10">
        <p className="eyebrow">No encontrado</p>
        <h1 className="mt-6 display text-4xl md:text-5xl">
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
        <article className="mx-auto max-w-2xl px-6 py-24 md:px-10 md:py-36">
          <Link
            to="/"
            hash="irremediables"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Irremediables
          </Link>

          <header className="mt-14 border-b border-[color:var(--rule)] pb-14">
            <p className="eyebrow">Irremediable {proyecto.numero}</p>
            <h1 className="mt-6 display text-balance text-5xl md:text-6xl">
              {proyecto.titulo}
            </h1>
            <p className="mt-8 max-w-xl accent-italic text-xl text-muted-foreground md:text-2xl">
              {proyecto.observacion}
            </p>
          </header>

          <div className="prose-essay mt-16 text-lg text-pretty text-muted-foreground">
            {proyecto.cuerpo.map((parr: string, i: number) => (
              <p key={i}>{parr}</p>
            ))}
          </div>
        </article>

        {siguiente && (
          <nav className="mx-auto max-w-2xl border-t border-[color:var(--rule)] px-6 py-20 md:px-10">
            <p className="eyebrow">Siguiente</p>
            <Link
              to="/irremediables/$slug"
              params={{ slug: siguiente.slug }}
              className="mt-5 block font-serif text-3xl leading-tight transition-transform duration-500 hover:translate-x-1 md:text-4xl"
            >
              {siguiente.titulo}
              <span className="accent-italic text-muted-foreground"> — {siguiente.observacion}</span>
            </Link>
          </nav>
        )}
      </main>
      <Footer />
    </div>
  );
}
