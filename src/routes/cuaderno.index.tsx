import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  cuadernoIntro,
  getArticulosOrdenados,
  tiempoLectura,
  formatearFecha,
} from "@/content/cuaderno";

const URL = "https://raulmartinezpardos.com/cuaderno";
const TITLE = "Cuaderno — Raúl Martínez Pardos";
const DESCRIPTION = cuadernoIntro.descripcion;

export const Route = createFileRoute("/cuaderno/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: cuadernoIntro.titulo,
          description: cuadernoIntro.descripcion,
          url: URL,
          author: {
            "@type": "Person",
            name: "Raúl Martínez Pardos",
            url: "https://raulmartinezpardos.com/",
          },
        }),
      },
    ],
  }),
  component: CuadernoIndex,
});

function CuadernoIndex() {
  const articulos = getArticulosOrdenados();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Cabecera */}
        <section className="border-b border-[color:var(--rule)] py-24 sm:py-28 md:py-36">
          <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10">
            <nav aria-label="Breadcrumb" className="eyebrow mb-10 text-muted-foreground sm:mb-12">
              <Link to="/" className="transition-colors hover:text-foreground">Inicio</Link>
              <span aria-hidden="true" className="mx-2">/</span>
              <span aria-current="page">Cuaderno</span>
            </nav>
            <h1 className="display text-balance text-[2.5rem] leading-[1.05] tracking-[-0.01em] sm:text-6xl md:text-7xl">
              {cuadernoIntro.titulo}
            </h1>
            <p className="mt-8 max-w-xl accent-italic text-[1.1rem] text-muted-foreground sm:mt-10 sm:text-xl md:text-2xl">
              {cuadernoIntro.descripcion}
            </p>
          </div>
        </section>

        {/* Listado */}
        <section className="py-20 sm:py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10">
            {articulos.length === 0 ? (
              <p className="accent-italic text-muted-foreground">
                Pronto, las primeras notas.
              </p>
            ) : (
              <ul className="border-t border-[color:var(--rule)]">
                {articulos.map((a) => (
                  <li key={a.slug} className="border-b border-[color:var(--rule)]">
                    <Link
                      to="/cuaderno/$slug"
                      params={{ slug: a.slug }}
                      className="group block py-10 transition-colors sm:py-12 md:py-14"
                    >
                      <p className="eyebrow text-muted-foreground">
                        <time dateTime={a.fecha}>{formatearFecha(a.fecha)}</time>
                        <span aria-hidden="true" className="mx-3">·</span>
                        <span>{tiempoLectura(a.cuerpo)} min de lectura</span>
                      </p>
                      <h2 className="mt-5 font-serif text-[1.5rem] leading-[1.2] text-pretty transition-transform duration-500 group-hover:translate-x-1 sm:text-[1.875rem] md:text-[2.25rem] md:leading-[1.15]">
                        {a.titulo}
                      </h2>
                      <p className="mt-4 max-w-2xl text-[15.5px] leading-[1.6] text-muted-foreground sm:mt-5 sm:text-base md:text-lg">
                        {a.extracto}
                      </p>
                      <p className="mt-6 eyebrow text-muted-foreground transition-colors group-hover:text-foreground">
                        Leer →
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
