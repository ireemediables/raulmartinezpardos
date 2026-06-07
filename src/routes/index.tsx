import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionLabel } from "@/components/site/SectionLabel";
import { irremediables } from "@/content/irremediables";
import {
  puntoDePartida,
  metodo,
  paraQuien,
  manifiesto,
  contacto,
  contactoTexto,
} from "@/content/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ideas Irremediables — Raúl Martínez" },
      {
        name: "description",
        content:
          "Una colección de proyectos de branding construidos a partir de observaciones cotidianas. Por Raúl Martínez.",
      },
      { property: "og:title", content: "Ideas Irremediables — Raúl Martínez" },
      {
        property: "og:description",
        content:
          "Proyectos de marca que parten de mirar lo cotidiano con atención.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap",
      },
    ],
  }),
  component: Home,
});

function Section({
  id,
  n,
  label,
  children,
}: {
  id: string;
  n: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-28 md:py-40">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <SectionLabel n={n}>{label}</SectionLabel>
        {children}
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Intro / Punto de partida */}
        <Section id="partida" n="i" label="Punto de partida">
          <h1 className="font-serif text-balance text-4xl leading-[1.1] md:text-6xl">
            {puntoDePartida.frase}
          </h1>
          <p className="mt-10 text-pretty text-lg text-muted-foreground md:text-xl">
            {puntoDePartida.parrafo}
          </p>
        </Section>

        {/* Método */}
        <Section id="metodo" n="ii" label="Método">
          <h2 className="font-serif text-3xl md:text-5xl">
            Una manera de mirar, no un proceso.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground text-pretty">
            {metodo.intro}
          </p>
          <ol className="mt-14 space-y-12">
            {metodo.pasos.map((p) => (
              <li key={p.n} className="grid gap-4 md:grid-cols-[6rem_1fr]">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground pt-2">
                  {p.n}
                </span>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl">{p.titulo}</h3>
                  <p className="mt-3 text-pretty">{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Para quién */}
        <Section id="para-quien" n="iii" label="Para quién">
          <div className="prose-essay text-lg text-pretty">
            {paraQuien.parrafos.map((p, i) => (
              <p key={i} className={i === 0 ? "font-serif text-2xl md:text-3xl text-foreground" : "text-muted-foreground"}>
                {p}
              </p>
            ))}
          </div>
        </Section>

        {/* Irremediables */}
        <Section id="irremediables" n="iv" label="Irremediables">
          <h2 className="font-serif text-3xl md:text-5xl">
            Una colección, no un portfolio.
          </h2>
          <p className="mt-6 text-muted-foreground text-pretty">
            Cada proyecto parte de una observación que no se iba. Léelos como
            quien hojea un cuaderno, no como quien revisa un catálogo.
          </p>
          <ul className="mt-16 divide-y divide-[color:var(--rule)] border-y border-[color:var(--rule)]">
            {irremediables.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/irremediables/$slug"
                  params={{ slug: p.slug }}
                  className="group grid grid-cols-[3.5rem_1fr] gap-6 py-8 md:grid-cols-[4rem_1fr_auto] md:gap-10 md:py-10"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground pt-2 transition-colors group-hover:text-[color:var(--accent)]">
                    {p.numero}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl leading-tight">
                      <span className="bg-[length:0_1px] bg-no-repeat [background-image:linear-gradient(currentColor,currentColor)] [background-position:0_100%] transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                        {p.titulo}
                      </span>
                    </h3>
                    <p className="mt-2 text-muted-foreground text-pretty">{p.observacion}</p>
                  </div>
                  <span className="hidden self-center font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:inline">
                    Leer →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        {/* Manifiesto */}
        <Section id="manifiesto" n="v" label="Manifiesto">
          <ol className="space-y-14">
            {manifiesto.map((linea, i) => (
              <li key={i} className="grid grid-cols-[3.5rem_1fr] gap-6 md:grid-cols-[4rem_1fr] md:gap-10">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground pt-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-serif text-2xl leading-snug text-pretty md:text-3xl">
                  {linea}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Contacto */}
        <Section id="contacto" n="vi" label="Contacto">
          <p className="font-serif text-3xl text-pretty md:text-5xl">
            {contactoTexto.invitacion}
          </p>
          <p className="mt-12">
            <a
              href={`mailto:${contacto.email}`}
              className="font-mono text-sm uppercase tracking-[0.18em] text-foreground underline decoration-[color:var(--rule)] underline-offset-[6px] transition-colors hover:decoration-[color:var(--accent)]"
            >
              {contacto.email}
            </a>
          </p>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
