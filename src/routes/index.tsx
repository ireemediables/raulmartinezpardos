import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionLabel } from "@/components/site/SectionLabel";
import { irremediables } from "@/content/irremediables";
import perfilAsset from "@/assets/autor/perfil.asset.json";
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
      { property: "og:url", content: "https://raulmartinezpardos.com/" },
    ],

    links: [
      { rel: "canonical", href: "https://raulmartinezpardos.com/" },
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
      className={`py-24 sm:py-28 md:py-40 ${bordered ? "border-b border-[color:var(--rule)]" : ""}`}
    >
      <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10">
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
        <div className="mx-auto max-w-3xl px-6 pb-40 pt-32 sm:px-8 sm:pb-32 sm:pt-20 md:px-10 md:pb-36 md:pt-24 lg:pb-44 lg:pt-28">
          <h1 className="display text-balance text-[1.5rem] leading-[1.15] sm:text-[2.125rem] sm:leading-[1.12] md:text-4xl lg:text-5xl lg:leading-[1.05]">
            {cabecera.proyecto}
            <br />
            <span className="accent-italic text-[0.7em]">
              <span className="text-muted-foreground">— </span>son aquellas que, cuando aparecen,
              <br />
              ya no te las puedes quitar de encima.
            </span>
          </h1>
        </div>
      </section>

      <div className="border-b border-[color:var(--rule)]">
        <div className="px-6 py-10 text-center sm:px-8 sm:py-12 md:px-10 md:py-14">
          <p className="font-mono text-[8px] uppercase leading-none tracking-[0.32em] text-muted-foreground sm:text-[11.5px] sm:tracking-[0.4em]">
            Ideas <span aria-hidden="true" className="mx-2 text-muted-foreground/60">→</span> Nombres <span aria-hidden="true" className="mx-2 text-muted-foreground/60">→</span> Marcas
          </p>
        </div>
      </div>

      <main>
        {/* Punto de partida */}
        <Section id="partida" n="01" label="Punto de partida">
          <p className="display text-balance text-[1.4rem] leading-[1.2] sm:text-[1.75rem] md:text-3xl lg:text-4xl lg:leading-[1.05]">
            {puntoDePartida.frase}
          </p>
          <div className="prose-essay mt-12 max-w-2xl text-[15px] text-muted-foreground sm:mt-14 sm:text-base md:mt-14 md:text-lg">
            {puntoDePartida.parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>

        {/* Método */}
        <Section id="metodo" n="02" label="Método">
          <p className="accent-italic text-[1.05rem] text-muted-foreground sm:text-xl md:text-2xl">
            {metodo.intro}
          </p>
          <ol className="mt-16 space-y-14 sm:mt-20 sm:space-y-16 md:mt-24 md:space-y-20">
            {[
              { n: "01", verb: "Observo", rest: "cosas que pasan desapercibidas." },
              { n: "02", verb: "Descubro", rest: "la idea." },
              { n: "03", verb: "La llamo", rest: "por su ", emph: "nombre", restAfter: "." },
              { n: "04", verb: "Escucho", rest: "cómo habla." },
              { n: "05", verb: "Y me dice", rest: "cómo quiere verse." },
            ].map((item) => (
              <li
                key={item.n}
                className="grid grid-cols-[2.5rem_1fr] gap-4 sm:grid-cols-[3rem_1fr] sm:gap-6"
              >
                <span className="eyebrow mt-2 sm:mt-3">{item.n}</span>
                <p className="display text-balance text-[1.4rem] leading-[1.2] text-muted-foreground sm:text-[1.75rem] md:text-3xl lg:text-4xl lg:leading-[1.1]">
                  {item.verb === "La llamo" ? (
                    <>
                      <span className="text-foreground">{item.verb}</span> {item.rest}
                      {item.emph}
                      {item.restAfter}
                    </>
                  ) : item.verb === "Y me dice" ? (
                    <>
                      <span className="text-foreground">Y me dice</span> cómo quiere verse.
                    </>
                  ) : (
                    <>
                      <span className="text-foreground">{item.verb}</span> {item.rest}
                    </>
                  )}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Para quién */}
        <Section id="para-quien" n="03" label="Para quién">
          <p className="accent-italic text-[1.05rem] text-muted-foreground sm:text-xl md:text-2xl">
            {paraQuien.intro}
          </p>
          <ul className="mt-12 space-y-7 sm:mt-14 sm:space-y-8">
            {paraQuien.items.map((item, i) => (
              <li
                key={i}
                className="grid grid-cols-[2rem_1fr] gap-3 text-[15.5px] leading-[1.55] text-pretty sm:grid-cols-[2.5rem_1fr] sm:gap-4 sm:text-lg md:text-xl"
              >
                <span className="eyebrow mt-1.5 sm:mt-2">{String(i + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-24 border-t border-[color:var(--rule)] pt-16 sm:mt-28 sm:pt-20 md:mt-28 md:pt-20">
            <p className="display text-balance text-[1.45rem] leading-[1.2] sm:text-[1.875rem] md:text-4xl lg:text-5xl lg:leading-[1.05]">
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
          <p className="display text-balance text-[1.4rem] leading-[1.2] sm:text-[1.75rem] md:text-3xl lg:text-4xl lg:leading-[1.05]">
            {irremediablesIntro.titulo}
          </p>
          <div className="prose-essay mt-10 max-w-2xl text-[15.5px] text-muted-foreground sm:mt-12 sm:text-lg">
            {irremediablesIntro.parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-16 border-t border-[color:var(--rule)] sm:mt-20">
            {irremediables.map((p) => (
              <li key={p.slug} className="border-b border-[color:var(--rule)]">
                <Link
                  to="/irremediables/$slug"
                  params={{ slug: p.slug }}
                  className="group grid grid-cols-[2rem_1fr_auto] items-baseline gap-4 py-7 transition-colors sm:grid-cols-[2.5rem_1fr_auto] sm:gap-5 sm:py-7 md:grid-cols-[3.5rem_1fr_auto] md:gap-8 md:py-8"
                >
                  <span className="eyebrow">{p.numero}</span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-[1.2rem] leading-[1.2] transition-transform duration-500 group-hover:translate-x-1 sm:text-2xl sm:leading-tight md:text-3xl">
                      {p.titulo}
                    </h3>
                    <p className="mt-2 text-[13px] text-muted-foreground accent-italic sm:text-sm">
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
          <p className="accent-italic text-[1.05rem] text-muted-foreground sm:text-xl md:text-2xl">
            {manifiesto.titulo}
          </p>
          <div className="prose-essay mt-12 max-w-2xl font-serif text-[1.1rem] leading-[1.55] text-pretty sm:mt-14 sm:text-xl md:text-2xl">
            {manifiesto.parrafos.map((p, i) => (
              <p
                key={i}
                className={
                  p === "enamorarse de una idea."
                    ? "accent-italic text-[1.5rem] leading-[1.25] text-muted-foreground sm:text-[2rem] md:text-[2.5rem]"
                    : undefined
                }
              >
                {p}
              </p>
            ))}
          </div>
        </Section>

        {/* Epílogo — foto + cierre personal */}
        <section className="border-b border-[color:var(--rule)] py-24 sm:py-28 md:py-40">
          <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10">
            <figure className="w-[140px] sm:w-[160px]">
              <img
                src={perfilAsset.url}
                alt="Raúl Martínez Pardos"
                className="block h-auto w-full grayscale"
                loading="lazy"
              />
            </figure>
            <p className="mt-10 max-w-xl font-serif text-[1.15rem] leading-[1.5] text-pretty sm:mt-12 sm:text-[1.35rem] md:text-[1.5rem]">
              Las historias son largas.
              <br />
              <br />
              Y pienso que es más importante
              <br />
              <span className="accent-italic text-muted-foreground">qué hacer con ellas.</span>
            </p>
          </div>
        </section>



        {/* Contacto */}
        <Section id="contacto" n="06" label="Contacto" bordered={false}>
          <p className="display text-balance text-[1.4rem] leading-[1.2] sm:text-[1.75rem] md:text-3xl lg:text-4xl lg:leading-[1.05]">
            {contactoTexto.invitacion}
            <br />
            <span className="accent-italic text-muted-foreground">
              {contactoTexto.cierre}
            </span>
          </p>
          <div className="mt-14 space-y-3 text-base sm:mt-16 sm:text-lg">
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
