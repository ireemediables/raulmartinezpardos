import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";

type ClippingData = {
  seccion: string;
  titular: string;
  texto: string;
  slug: string;
  align: "left" | "right";
  rotate: number;
};

const CLIPPINGS: ClippingData[] = [
  {
    seccion: "Última hora",
    titular:
      "Una lavandería demasiado informada genera preocupación entre sus clientes",
    texto:
      "Fuentes cercanas aseguran que conoce más secretos de los que debería.",
    slug: "la-alcahueta",
    align: "right",
    rotate: -1.6,
  },
  {
    seccion: "Sociedad",
    titular: "Confirmado: las flores hablan",
    texto: "Los expertos todavía discuten cuándo empezaron a hacerlo.",
    slug: "la-habladurnia",
    align: "left",
    rotate: 1.4,
  },
  {
    seccion: "Sociedad",
    titular:
      "Pareja abandona un restaurante tras quedarse sin nada que decir",
    texto: "Testigos afirman que la experiencia fue excelente.",
    slug: "ni-mu",
    align: "right",
    rotate: -1.2,
  },
  {
    seccion: "Sociedad",
    titular:
      "Aumenta el número de personas que deciden salir del estanque",
    texto: "Los expertos aún investigan las causas.",
    slug: "cruak",
    align: "left",
    rotate: 1.1,
  },
];

type Props =
  | { random: true }
  | {
      random?: false;
      seccion: string;
      titular: string;
      texto: string;
      slug: string;
      align?: "left" | "right";
      rotate?: number;
    };

/**
 * Recorte de prensa interactivo. Aparece con un fade-in muy sutil
 * únicamente al entrar en el viewport. Pensado para colocarse entre
 * secciones, como un pequeño hallazgo durante la lectura.
 */
export function PressClipping(props: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Selección aleatoria estable durante toda la visita.
  const data: ClippingData = useMemo(() => {
    if ("random" in props && props.random) {
      return CLIPPINGS[Math.floor(Math.random() * CLIPPINGS.length)];
    }
    const p = props as Exclude<Props, { random: true }>;
    return {
      seccion: p.seccion,
      titular: p.titular,
      texto: p.texto,
      slug: p.slug,
      align: p.align ?? "left",
      rotate: p.rotate ?? -1.2,
    };
  }, [props]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const justify = data.align === "right" ? "sm:justify-end" : "sm:justify-start";

  return (
    <div
      className={`mx-auto flex w-full max-w-3xl px-6 sm:px-8 md:px-10 ${justify}`}
    >
      <div
        ref={ref}
        style={{
          transform: visible
            ? `rotate(${data.rotate}deg) translateY(0)`
            : `rotate(${data.rotate}deg) translateY(14px)`,
          opacity: visible ? 1 : 0,
          transition:
            "opacity 800ms ease-out, transform 800ms cubic-bezier(0.22, 0.61, 0.36, 1)",
        }}
        className="press-clipping relative w-[min(22rem,88%)] sm:w-[22rem]"
      >
        <Link
          to="/irremediables/$slug"
          params={{ slug: data.slug }}
          className="group block px-5 pb-5 pt-4 text-[color:#1a1714] sm:px-6 sm:pb-6 sm:pt-5"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-[color:#6b5d52]">
            {data.seccion}
          </p>
          <div className="mt-2 h-px w-8 bg-[color:#1a1714]/70" />
          <h4 className="mt-3 font-serif text-[1.05rem] font-medium leading-[1.15] tracking-tight sm:text-[1.2rem]">
            {data.titular}
          </h4>
          <p className="mt-3 font-serif text-[13px] leading-[1.45] text-[color:#3d342d] sm:text-[13.5px]">
            {data.texto}
          </p>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[color:#1a1714] transition-opacity group-hover:opacity-70">
            Leer caso <span aria-hidden="true">→</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
