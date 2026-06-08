import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  getIrremediable,
  getNextIrremediable,
  type CasoCompleto,
} from "@/content/irremediables";

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
    const ogImage = p?.caso?.hero.src;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(ogImage ? [{ property: "og:image", content: ogImage }] : []),
        ...(ogImage ? [{ name: "twitter:image", content: ogImage }] : []),
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
  component: ProyectoPage,
});

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 sm:mb-12">
      <span className="eyebrow">{n}</span>
      <span className="eyebrow">{children}</span>
    </div>
  );
}

function CaseSection({
  n,
  label,
  children,
  bordered = true,
}: {
  n: string;
  label: string;
  children: React.ReactNode;
  bordered?: boolean;
}) {
  return (
    <section
      className={`py-24 sm:py-28 md:py-36 ${bordered ? "border-b border-[color:var(--rule)]" : ""}`}
    >
      <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10">
        <SectionLabel n={n}>{label}</SectionLabel>
        {children}
      </div>
    </section>
  );
}

function EsloganTachado({ texto, tachadas }: { texto: string; tachadas: string[] }) {
  // Split preservando puntuación. Tachar tokens cuyo "palabra base" esté en tachadas.
  const partes = texto.split(/(\s+)/);
  return (
    <p className="display text-balance text-[2rem] leading-[1.15] sm:text-5xl md:text-6xl md:leading-[1.05]">
      {partes.map((parte, i) => {
        if (/^\s+$/.test(parte)) return <span key={i}>{parte}</span>;
        const base = parte.replace(/[^\p{L}]/gu, "").toLowerCase();
        const tachar = tachadas.includes(base);
        if (!tachar) return <span key={i}>{parte}</span>;
        return (
          <span key={i} className="relative inline-block">
            <span className="text-muted-foreground">{parte}</span>
            <span
              aria-hidden
              className="pointer-events-none absolute left-[-6%] right-[-6%] top-1/2 h-[2px] -translate-y-1/2 rotate-[-6deg] bg-[color:var(--foreground)]"
            />
          </span>
        );
      })}
    </p>
  );
}

function CasoCompletoView({
  caso,
  proyecto,
}: {
  caso: CasoCompleto;
  proyecto: { numero: string; titulo: string };
}) {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[color:var(--rule)]">
        <figure className="relative">
          <img
            src={caso.hero.src}
            alt={caso.hero.alt}
            className="block h-[70vh] min-h-[420px] w-full object-cover sm:h-[80vh] md:h-[90vh]"
            loading="eager"
          />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-6xl px-6 pb-6 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
              <p className="eyebrow text-white/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]">
                {proyecto.numero} — {proyecto.titulo.toUpperCase()}
              </p>
            </div>
          </figcaption>
        </figure>
        <div className="mx-auto max-w-3xl px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14">
          <Link
            to="/"
            hash="irremediables"
            className="eyebrow text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Irremediables
          </Link>
        </div>
      </section>

      {/* 01 — PUNTO DE PARTIDA */}
      <CaseSection n="01" label="Punto de partida">
        <p className="display text-balance text-[1.6rem] leading-[1.15] sm:text-3xl md:text-4xl">
          {caso.puntoDePartida}
        </p>
      </CaseSection>

      {/* 02 — OBSERVACIÓN */}
      <CaseSection n="02" label="Observación">
        <div className="prose-essay max-w-2xl text-[16px] text-foreground sm:text-lg md:text-xl">
          {caso.observacion.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </CaseSection>

      {/* 03 — CONCEPTO */}
      <CaseSection n="03" label="Concepto">
        <p className="display text-balance text-[2rem] leading-[1.1] sm:text-5xl md:text-6xl md:leading-[1.02] lg:text-7xl">
          {caso.concepto}
        </p>
      </CaseSection>

      {/* 04 — NOMBRE */}
      <CaseSection n="04" label="Nombre">
        <div className="py-10 sm:py-16 md:py-20">
          <h2 className="display text-balance text-[2.5rem] leading-[1.05] tracking-[-0.02em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {caso.nombre}
          </h2>
        </div>
      </CaseSection>

      {/* 05 — ESLOGAN */}
      <CaseSection n="05" label="Eslogan">
        <EsloganTachado texto={caso.eslogan.texto} tachadas={caso.eslogan.tachadas} />
      </CaseSection>

      {/* 06 — DIRECCIÓN VISUAL */}
      <CaseSection n="06" label="Dirección visual">
        <div className="prose-essay max-w-2xl font-serif text-[1.15rem] leading-[1.5] sm:text-xl md:text-2xl">
          {caso.direccionVisual.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </CaseSection>

      {/* BOARD — continuación de dirección visual */}
      <section className="border-b border-[color:var(--rule)] pb-24 sm:pb-28 md:pb-36">
        <figure className="mx-auto max-w-6xl px-6 sm:px-8 md:px-10">
          <img
            src={caso.board.src}
            alt={caso.board.alt}
            className="block h-auto w-full"
            loading="lazy"
          />
        </figure>
      </section>
    </>
  );
}

function ProyectoPage() {
  const { proyecto } = Route.useLoaderData();
  const siguiente = getNextIrremediable(proyecto.slug);

  if (proyecto.caso) {
    return (
      <div className="min-h-screen">
        <Header />
        <main>
          <CasoCompletoView caso={proyecto.caso} proyecto={proyecto} />

          {siguiente && (
            <nav className="py-24 sm:py-28 md:py-36">
              <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10">
                <p className="eyebrow mb-6">Siguiente irremediable</p>
                <Link
                  to="/irremediables/$slug"
                  params={{ slug: siguiente.slug }}
                  className="group flex items-baseline justify-between gap-6 border-t border-[color:var(--rule)] pt-8"
                >
                  <span>
                    <span className="eyebrow block mb-3">{siguiente.numero}</span>
                    <span className="display block text-[2rem] leading-[1.1] transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl md:text-5xl">
                      {siguiente.titulo}
                    </span>
                    <span className="accent-italic mt-3 block text-muted-foreground sm:text-lg">
                      {siguiente.observacion}
                    </span>
                  </span>
                  <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                    →
                  </span>
                </Link>
              </div>
            </nav>
          )}
        </main>
        <Footer />
      </div>
    );
  }

  // Fallback para proyectos aún sin caso completo.
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <article className="mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-24 md:px-10 md:py-36">
          <Link
            to="/"
            hash="irremediables"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Irremediables
          </Link>

          <header className="mt-10 border-b border-[color:var(--rule)] pb-10 sm:mt-14 sm:pb-14">
            <p className="eyebrow">Irremediable {proyecto.numero}</p>
            <h1 className="mt-5 display text-balance text-[2.25rem] leading-[1.08] sm:mt-6 sm:text-5xl md:text-6xl md:leading-[1.05]">
              {proyecto.titulo}
            </h1>
            <p className="mt-6 max-w-xl accent-italic text-lg text-muted-foreground sm:mt-8 sm:text-xl md:text-2xl">
              {proyecto.observacion}
            </p>
          </header>

          <div className="prose-essay mt-12 text-base text-pretty text-muted-foreground sm:mt-16 sm:text-lg">
            {proyecto.cuerpo.map((parr: string, i: number) => (
              <p key={i}>{parr}</p>
            ))}
          </div>
        </article>

        {siguiente && (
          <nav className="mx-auto max-w-2xl border-t border-[color:var(--rule)] px-5 py-14 sm:px-6 sm:py-20 md:px-10">
            <p className="eyebrow">Siguiente irremediable</p>
            <Link
              to="/irremediables/$slug"
              params={{ slug: siguiente.slug }}
              className="mt-4 block font-serif text-2xl leading-[1.15] transition-transform duration-500 hover:translate-x-1 sm:mt-5 sm:text-3xl sm:leading-tight md:text-4xl"
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
