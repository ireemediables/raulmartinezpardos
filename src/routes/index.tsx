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
        <Section id="metodo" n="02" label="Método">
          <h2 className="display-xl text-4xl uppercase md:text-6xl">
            Una manera de mirar,<br />no un proceso.
          </h2>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground text-pretty">
            {metodo.intro}
          </p>
          <ol className="mt-20 space-y-16">
            {metodo.pasos.map((p, i) => (
              <li key={p.n} className="grid gap-6 md:grid-cols-[8rem_1fr]">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Paso {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="display-xl text-3xl uppercase md:text-5xl">
                    {p.titulo}
                  </h3>
                  <p className="mt-4 max-w-xl text-pretty text-muted-foreground">{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Para quién */}
        <Section id="para-quien" n="03" label="Para quién">
          <p className="display-xl text-3xl uppercase md:text-5xl">
            {paraQuien.parrafos[0]}
          </p>
          <p className="mt-10 max-w-2xl text-pretty text-muted-foreground md:text-lg">
            {paraQuien.parrafos[1]}
          </p>
        </Section>

        {/* Irremediables */}
        <Section id="irremediables" n="04" label="Irremediables">
          <h2 className="display-xl text-4xl uppercase md:text-6xl">
            Una colección,<br />no un portfolio.
          </h2>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {String(irremediables.length).padStart(2, "0")} entradas — léelas como quien hojea un cuaderno
          </p>
          <ul className="mt-16 border-t border-foreground">
            {irremediables.map((p) => (
              <li key={p.slug} className="border-b border-foreground">
                <Link
                  to="/irremediables/$slug"
                  params={{ slug: p.slug }}
                  className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-8 transition-colors hover:text-muted-foreground md:grid-cols-[5rem_1fr_auto] md:gap-8 md:py-12"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    №{p.numero}
                  </span>
                  <div className="min-w-0">
                    <h3 className="display-xl text-3xl uppercase leading-[0.95] transition-transform group-hover:translate-x-2 md:text-5xl">
                      {p.titulo}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-snug text-muted-foreground">
                      {p.observacion}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        {/* Manifiesto */}
        <Section id="manifiesto" n="05" label="Manifiesto">
          <ol className="space-y-14">
            {manifiesto.map((linea, i) => (
              <li
                key={i}
                className="grid grid-cols-[3rem_1fr] gap-4 md:grid-cols-[5rem_1fr] md:gap-8"
              >
                <span className="pt-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="display-xl text-2xl uppercase text-pretty md:text-4xl">
                  {linea}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Contacto — purely typographic */}
        <Section id="contacto" n="06" label="Contacto" bordered={false}>
          <h2 className="display-xl text-4xl uppercase md:text-6xl">
            {contactoTexto.invitacion}
          </h2>
          <a
            href={`mailto:${contacto.email}`}
            className="mt-12 inline-block font-mono text-lg uppercase tracking-tight underline decoration-2 underline-offset-[6px] transition-all hover:underline-offset-[10px] md:text-2xl"
          >
            {contacto.email} →
          </a>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
