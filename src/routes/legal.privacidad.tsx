import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { contacto } from "@/content/home";

export const Route = createFileRoute("/legal/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — Ideas irremediables" },
      { name: "description", content: "Política de privacidad del sitio Ideas irremediables." },
      { property: "og:title", content: "Política de privacidad — Ideas irremediables" },
      { property: "og:description", content: "Cómo se tratan los datos en el sitio Ideas irremediables." },
      { property: "og:url", content: "https://raulmartinezpardos.lovable.app/legal/privacidad" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://raulmartinezpardos.lovable.app/legal/privacidad" },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <article className="mx-auto max-w-2xl px-6 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-6 display text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl">
            Política de privacidad
          </h1>
          <div className="prose-essay mt-12 text-[15.5px] text-muted-foreground sm:text-base">
            <p>
              Este sitio no recopila datos personales de manera activa. No utiliza formularios de registro, ni perfiles de usuario, ni sistemas de seguimiento publicitario.
            </p>
            <p>
              La única vía de contacto es el correo electrónico facilitado. Si decides escribir, los datos que envíes —nombre, dirección de correo, mensaje— se utilizarán únicamente para responder a tu consulta y no se cederán a terceros.
            </p>
            <p>
              Puedes solicitar en cualquier momento la rectificación o eliminación de los mensajes y datos compartidos escribiendo a{" "}
              <a href={`mailto:${contacto.email}`} className="text-foreground underline underline-offset-4">{contacto.email}</a>.
            </p>
            <p>
              Este sitio puede utilizar cookies técnicas estrictamente necesarias para su funcionamiento. No se emplean cookies de análisis ni de publicidad.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
