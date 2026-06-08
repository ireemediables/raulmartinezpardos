import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionLabel } from "@/components/site/SectionLabel";
import { irremediables } from "@/content/irremediables";
import {
  cabecera,
  puntoDePartida,
  metodo,
  paraQuien,
  irremediablesIntro,
  manifiesto,
  contacto,
  contactoTexto,
} from "@/content/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raúl Martínez Pardos — Ideas irremediables" },
      {
        name: "description",
        content:
          "Nombres, conceptos y dirección visual. Encontrar la idea principal alrededor de la que un proyecto puede contarse.",
      },
      { property: "og:title", content: "Raúl Martínez Pardos — Ideas irremediables" },
      {
        property: "og:description",
        content:
          "Las ideas irremediables son esas que, cuando aparecen, ya no te las sacas de encima.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,400&family=JetBrains+Mono:wght@400&display=swap",
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
      className={`py-28 md:py-40 ${bordered ? "border-b border-[color:var(--rule)]" : ""}`}
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

      {/* Cabecera — apertura tranquila */}
      <section className="border-b border-[color:var(--rule)]">
        <div className="mx-auto max-w-3xl px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
          <p className="eyebrow mb-10">{cabecera.tagline}</p>
          <h1 className="display text-balance text-4xl md:text-5xl">
            {cabecera.proyecto}
            <span className="accent-italic text-muted-foreground text-[0.8em]"> — </span>
            <span className="accent-italic text-[0.8em]">una forma de mirar.</span>
          </h1>
        </div>
      </section>

      <main>
        {/* Punto de partida */}
        <Section id="partida" n="01" label="Punto de partida">
          <p className="display text-balance text-3xl md:text-4xl">
            {puntoDePartida.frase}
          </p>
          <div className="prose-essay mt-16 max-w-2xl text-lg text-muted-foreground">
            {puntoDePartida.parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>

        {/* Método */}
        <Section id="metodo" n="02" label="Método">
          <p className="accent-italic text-xl text-muted-foreground md:text-2xl">
            {metodo.intro}
          </p>
          <ol className="mt-14 space-y-5 font-serif text-2xl text-pretty md:text-3xl">
            {metodo.pasos.map((paso, i) => (
              <li key={i} className="flex gap-6">
                <span className="eyebrow mt-3 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{paso}</span>
              </li>
            ))}
          </ol>
        </Section>

        {/* Para quién */}
        <Section id="para-quien" n="03" label="Para quién">
          <p className="accent-italic text-xl text-muted-foreground md:text-2xl">
            {paraQuien.intro}
          </p>
          <ul className="mt-14 space-y-8">
            {paraQuien.items.map((item, i) => (
              <li
                key={i}
                className="grid grid-cols-[2.5rem_1fr] gap-4 text-lg text-pretty md:text-xl"
              >
                <span className="eyebrow mt-2">{String(i + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-28 border-t border-[color:var(--rule)] pt-20">
            <p className="display text-balance text-3xl md:text-5xl">
              Todo proyecto gira alrededor de una idea.
              <br />
              <span className="accent-italic text-muted-foreground">
                La cuestión es encontrarla.
              </span>
            </p>
          </div>
        </Section>

        {/* Irremediables */}
        <Section id="irremediables" n="04" label="Irremediables">
          <p className="display text-balance text-3xl md:text-4xl">
            {irremediablesIntro.titulo}
          </p>
          <div className="prose-essay mt-12 max-w-2xl text-lg text-muted-foreground">
            {irremediablesIntro.parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-20 border-t border-[color:var(--rule)]">
            {irremediables.map((p) => (
              <li key={p.slug} className="border-b border-[color:var(--rule)]">
                <Link
                  to="/irremediables/$slug"
                  params={{ slug: p.slug }}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-5 py-7 transition-colors md:grid-cols-[3.5rem_1fr_auto] md:gap-8 md:py-8"
                >
                  <span className="eyebrow">{p.numero}</span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl leading-tight transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                      {p.titulo}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground accent-italic">
                      {p.observacion}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        {/* Manifiesto */}
        <Section id="manifiesto" n="05" label="Manifiesto">
          <p className="accent-italic text-xl text-muted-foreground md:text-2xl">
            {manifiesto.titulo}
          </p>
          <div className="prose-essay mt-14 max-w-2xl font-serif text-xl text-pretty md:text-2xl">
            {manifiesto.parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>

        {/* Contacto */}
        <Section id="contacto" n="06" label="Contacto" bordered={false}>
          <p className="display text-balance text-3xl md:text-4xl">
            {contactoTexto.invitacion}
            <br />
            <span className="accent-italic text-muted-foreground">
              {contactoTexto.cierre}
            </span>
          </p>
          <div className="mt-16 space-y-3 text-lg">
            <p>
              <a
                href={`mailto:${contacto.email}`}
                className="border-b border-[color:var(--rule)] pb-1 transition-colors hover:border-foreground"
              >
                {contacto.email}
              </a>
            </p>
            <p className="text-muted-foreground">{contacto.telefono}</p>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
