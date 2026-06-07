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
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,700;12..96,800;12..96,900&family=JetBrains+Mono:wght@400;500;700&display=swap",
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
  bordered = true,
}: {
  id: string;
  n: string;
  label: string;
  children: React.ReactNode;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 ${bordered ? "border-b border-[color:var(--rule)]" : ""}`}
    >
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
        {/* Punto de partida */}
        <Section id="partida" n="01" label="Punto de partida">
          <h1 className="display-xl text-balance text-5xl uppercase md:text-7xl lg:text-8xl">
            Hay observaciones<br />que se quedan dentro<br />y no se van.
          </h1>
          <p className="mt-12 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            <span className="font-mono text-sm uppercase tracking-tight text-foreground">Ideas Irremediables</span>{" "}
            es lo que ocurre cuando decido escucharlas. {puntoDePartida.parrafo}
          </p>
        </Section>

        {/* Método */}
        <Section id="metodo" n="II" label="Método">
          <h2 className="font-serif text-3xl uppercase leading-[1.05] md:text-5xl">
            Una manera de mirar, no un proceso.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground text-pretty">
            {metodo.intro}
          </p>
          <ol className="mt-16 space-y-12">
            {metodo.pasos.map((p) => (
              <li key={p.n} className="grid gap-4 md:grid-cols-[6rem_1fr]">
                <span className="inline-flex h-fit w-fit bg-foreground px-2 py-1 font-mono text-xs font-bold text-background">
                  {p.n}
                </span>
                <div>
                  <h3 className="font-serif text-2xl uppercase md:text-3xl">
                    {p.titulo}
                  </h3>
                  <p className="mt-3 text-pretty text-muted-foreground">{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Para quién */}
        <Section id="para-quien" n="III" label="Para quién">
          <p className="font-serif text-2xl leading-tight text-pretty md:text-3xl">
            {paraQuien.parrafos[0]}
          </p>
          <p className="mt-8 border-l-2 border-foreground pl-5 text-pretty italic text-muted-foreground">
            {paraQuien.parrafos[1]}
          </p>
        </Section>

        {/* Irremediables */}
        <Section id="irremediables" n="IV" label="Irremediables">
          <h2 className="font-serif text-3xl uppercase leading-[1.05] md:text-5xl">
            Una colección, no un portfolio.
          </h2>
          <p className="mt-6 font-mono text-sm italic text-muted-foreground">
            Léelos como quien hojea un cuaderno.
          </p>
          <ul className="mt-12 space-y-px border-y-2 border-foreground/15 bg-foreground/15">
            {irremediables.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/irremediables/$slug"
                  params={{ slug: p.slug }}
                  className="group grid grid-cols-[3rem_1fr_auto] items-start gap-4 bg-background px-2 py-7 transition-colors hover:bg-[color:var(--muted)] md:gap-6 md:py-9"
                >
                  <span className="pt-2 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                    {p.numero}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl uppercase leading-tight transition-transform group-hover:translate-x-2 md:text-3xl">
                      {p.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-snug text-muted-foreground">
                      {p.observacion}
                    </p>
                  </div>
                  <span className="pt-2 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        {/* Manifiesto */}
        <Section id="manifiesto" n="V" label="Manifiesto">
          <ol className="space-y-12">
            {manifiesto.map((linea, i) => (
              <li
                key={i}
                className="grid grid-cols-[3rem_1fr] gap-4 md:grid-cols-[4rem_1fr] md:gap-8"
              >
                <span className="pt-3 font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-serif text-2xl uppercase leading-snug text-pretty md:text-3xl">
                  {linea}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Contacto — bloque invertido */}
        <Section id="contacto" n="VI" label="Contacto" bordered={false}>
          <div className="bg-foreground p-8 text-background md:p-12">
            <h2 className="font-serif text-3xl uppercase leading-tight text-pretty md:text-4xl">
              {contactoTexto.invitacion}
            </h2>
            <a
              href={`mailto:${contacto.email}`}
              className="mt-10 inline-block border-b-4 border-background pb-1 font-mono text-base font-bold uppercase tracking-tight transition-all hover:pb-2 md:text-lg"
            >
              {contacto.email}
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
