import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { contacto, cabecera } from "@/content/home";

export const Route = createFileRoute("/legal/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso legal — Ideas irremediables" },
      { name: "description", content: "Información legal del sitio Ideas irremediables, de Raúl Martínez Pardos." },
      { property: "og:title", content: "Aviso legal — Ideas irremediables" },
      { property: "og:description", content: "Información legal del sitio Ideas irremediables." },
      { property: "og:url", content: "https://raulmartinezpardos.lovable.app/legal/aviso-legal" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://raulmartinezpardos.lovable.app/legal/aviso-legal" },
    ],
  }),
  component: AvisoLegal,
});

function AvisoLegal() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <article className="mx-auto max-w-2xl px-6 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-6 display text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl">
            Aviso legal
          </h1>
          <div className="prose-essay mt-12 text-[15.5px] text-muted-foreground sm:text-base">
            <p>
              Titular del sitio: <span className="text-foreground">{cabecera.nombre}</span>.
            </p>
            <p>
              Contacto: <a href={`mailto:${contacto.email}`} className="text-foreground underline underline-offset-4">{contacto.email}</a>.
            </p>
            <p>
              Este sitio web tiene una finalidad informativa y de presentación profesional. Su contenido —textos, imágenes, identidades y propuestas— es obra del titular y queda protegido por la legislación vigente en materia de propiedad intelectual.
            </p>
            <p>
              No se permite la reproducción, distribución ni transformación total o parcial de los contenidos sin autorización expresa del titular, salvo en los casos previstos por la ley.
            </p>
            <p>
              El titular no se hace responsable de los daños derivados del uso de este sitio, ni del contenido de páginas externas a las que pudiera enlazarse.
            </p>
            <p>
              Para cualquier comunicación, sugerencia o consulta legal, puede dirigirse a la dirección de correo indicada.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
