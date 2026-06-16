import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  getArticulo,
  getArticuloAdyacentes,
  getAutor,
  tiempoLectura,
  formatearFecha,
  type Bloque,
} from "@/content/cuaderno";

export const Route = createFileRoute("/cuaderno/$slug")({
  loader: ({ params }) => {
    const articulo = getArticulo(params.slug);
    if (!articulo) throw notFound();
    return { articulo };
  },
  head: ({ loaderData, params }) => {
    const a = loaderData?.articulo;
    const title = a ? `${a.titulo} — Cuaderno` : "Cuaderno";
    const description = a?.extracto ?? "Cuaderno de Raúl Martínez Pardos.";
    const url = `https://raulmartinezpardos.com/cuaderno/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        ...(a ? [{ property: "article:published_time", content: a.fecha }] : []),
        { property: "article:author", content: "Raúl Martínez Pardos" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: a
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: a.titulo,
                description: a.extracto,
                datePublished: a.fecha,
                dateModified: a.fecha,
                author: {
                  "@type": "Person",
                  name: "Raúl Martínez Pardos",
                  url: "https://raulmartinezpardos.com/",
                },
                mainEntityOfPage: { "@type": "WebPage", "@id": url },
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Inicio", item: "https://raulmartinezpardos.com/" },
                  { "@type": "ListItem", position: 2, name: "Cuaderno", item: "https://raulmartinezpardos.com/cuaderno" },
                  { "@type": "ListItem", position: 3, name: a.titulo, item: url },
                ],
              }),
            },
          ]
        : undefined,
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-40 md:px-10">
        <p className="eyebrow">No encontrado</p>
        <h1 className="mt-6 display text-4xl md:text-5xl">
          Esta nota aún no está en el cuaderno.
        </h1>
        <p className="mt-8">
          <Link to="/cuaderno" className="underline underline-offset-4">
            Volver al Cuaderno
          </Link>
        </p>
      </main>
      <Footer />
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-40 md:px-10">
        <p className="eyebrow">Algo no encaja</p>
        <h1 className="mt-6 display text-3xl md:text-4xl">{error.message}</h1>
        <button onClick={reset} className="mt-8 underline underline-offset-4">
          Reintentar
        </button>
      </main>
      <Footer />
    </div>
  ),
  component: ArticuloPage,
});

function BloqueView({ bloque }: { bloque: Bloque }) {
  if (bloque.tipo === "encabezado") {
    return (
      <h2 className="mt-16 font-serif text-[1.5rem] leading-[1.2] text-pretty sm:mt-20 sm:text-[1.75rem] md:text-[2rem]">
        {bloque.texto}
      </h2>
    );
  }
  if (bloque.tipo === "cita") {
    return (
      <blockquote className="my-14 border-l border-[color:var(--rule)] pl-6 accent-italic text-[1.25rem] leading-[1.45] text-muted-foreground sm:my-16 sm:pl-8 sm:text-[1.45rem] md:text-[1.6rem]">
        {bloque.texto}
      </blockquote>
    );
  }
  return <p>{bloque.texto}</p>;
}

function ArticuloPage() {
  const { articulo } = Route.useLoaderData();
  const { anterior, siguiente } = getArticuloAdyacentes(articulo.slug);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Cabecera del artículo */}
        <section className="border-b border-[color:var(--rule)] pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-32 md:pb-24">
          <div className="mx-auto max-w-2xl px-6 sm:px-8 md:px-10">
            <nav aria-label="Breadcrumb" className="eyebrow mb-10 text-muted-foreground sm:mb-12">
              <Link to="/" className="transition-colors hover:text-foreground">Inicio</Link>
              <span aria-hidden="true" className="mx-2">/</span>
              <Link to="/cuaderno" className="transition-colors hover:text-foreground">Cuaderno</Link>
            </nav>
            <p className="eyebrow text-muted-foreground">
              <time dateTime={articulo.fecha}>{formatearFecha(articulo.fecha)}</time>
              <span aria-hidden="true" className="mx-3">·</span>
              <span>{tiempoLectura(articulo.cuerpo)} min de lectura</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              {getAutor(articulo)}
            </p>
            <h1 className="mt-6 display text-balance text-[2.25rem] leading-[1.08] tracking-[-0.01em] sm:mt-8 sm:text-5xl md:text-6xl md:leading-[1.05]">
              {articulo.titulo}
            </h1>
            <p className="mt-8 accent-italic text-lg text-muted-foreground sm:mt-10 sm:text-xl md:text-2xl">
              {articulo.extracto}
            </p>
          </div>
        </section>

        {/* Cuerpo */}
        <article className="py-20 sm:py-24 md:py-32">
          <div className="mx-auto max-w-2xl px-6 sm:px-8 md:px-10">
            <div className="prose-essay font-serif text-[1.1rem] leading-[1.65] text-pretty sm:text-[1.2rem] sm:leading-[1.7] md:text-[1.3rem]">
              {articulo.cuerpo.map((b: Bloque, i: number) => (
                <BloqueView key={i} bloque={b} />
              ))}
            </div>
          </div>
        </article>

        {/* Navegación entre artículos */}
        <nav className="border-t border-[color:var(--rule)] py-20 sm:py-24 md:py-28">
          <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10">
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
              <div>
                {anterior ? (
                  <Link
                    to="/cuaderno/$slug"
                    params={{ slug: anterior.slug }}
                    className="group block"
                  >
                    <span className="eyebrow text-muted-foreground">← Anterior</span>
                    <span className="mt-3 block font-serif text-[1.2rem] leading-[1.25] text-pretty transition-transform duration-500 group-hover:-translate-x-1 sm:text-[1.4rem]">
                      {anterior.titulo}
                    </span>
                  </Link>
                ) : (
                  <span className="eyebrow text-muted-foreground/60">— Inicio del cuaderno</span>
                )}
              </div>
              <div className="sm:text-right">
                {siguiente ? (
                  <Link
                    to="/cuaderno/$slug"
                    params={{ slug: siguiente.slug }}
                    className="group block"
                  >
                    <span className="eyebrow text-muted-foreground">Siguiente →</span>
                    <span className="mt-3 block font-serif text-[1.2rem] leading-[1.25] text-pretty transition-transform duration-500 group-hover:translate-x-1 sm:text-[1.4rem]">
                      {siguiente.titulo}
                    </span>
                  </Link>
                ) : (
                  <span className="eyebrow text-muted-foreground/60">Última nota —</span>
                )}
              </div>
            </div>

            <div className="mt-16 border-t border-[color:var(--rule)] pt-10 sm:mt-20 sm:pt-12">
              <Link
                to="/cuaderno"
                className="eyebrow text-muted-foreground transition-colors hover:text-foreground"
              >
                ← Volver al Cuaderno
              </Link>
            </div>
          </div>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
