import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

type Props = {
  seccion: string;
  titular: string;
  texto: string;
  slug: string;
  /** Posición horizontal del recorte dentro del contenedor. */
  align?: "left" | "right";
  /** Rotación ligera en grados para reforzar el aspecto de "recorte encontrado". */
  rotate?: number;
};

/**
 * Recorte de prensa interactivo. Aparece con un fade-in muy sutil
 * únicamente al entrar en el viewport. Pensado para colocarse entre
 * secciones, como un pequeño hallazgo durante la lectura.
 */
export function PressClipping({
  seccion,
  titular,
  texto,
  slug,
  align = "left",
  rotate = -1.2,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

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

  const justify = align === "right" ? "sm:justify-end" : "sm:justify-start";

  return (
    <div
      aria-hidden={false}
      className={`mx-auto flex w-full max-w-3xl px-6 sm:px-8 md:px-10 ${justify}`}
    >
      <div
        ref={ref}
        style={{
          transform: visible
            ? `rotate(${rotate}deg) translateY(0)`
            : `rotate(${rotate}deg) translateY(14px)`,
          opacity: visible ? 1 : 0,
          transition:
            "opacity 800ms ease-out, transform 800ms cubic-bezier(0.22, 0.61, 0.36, 1)",
        }}
        className="press-clipping relative w-[min(22rem,88%)] sm:w-[22rem]"
      >
        <Link
          to="/irremediables/$slug"
          params={{ slug }}
          className="group block px-5 pb-5 pt-4 text-[color:#1a1714] sm:px-6 sm:pb-6 sm:pt-5"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-[color:#6b5d52]">
            {seccion}
          </p>
          <div className="mt-2 h-px w-8 bg-[color:#1a1714]/70" />
          <h4 className="mt-3 font-serif text-[1.05rem] font-medium leading-[1.15] tracking-tight sm:text-[1.2rem]">
            {titular}
          </h4>
          <p className="mt-3 font-serif text-[13px] leading-[1.45] text-[color:#3d342d] sm:text-[13.5px]">
            {texto}
          </p>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[color:#1a1714] transition-opacity group-hover:opacity-70">
            Leer caso <span aria-hidden="true">→</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
