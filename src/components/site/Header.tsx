import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cabecera } from "@/content/home";

const sections = [
  { id: "partida", label: "Punto de partida" },
  { id: "metodo", label: "Método" },
  { id: "para-quien", label: "Para quién" },
  { id: "irremediables", label: "Irremediables" },
  { id: "manifiesto", label: "Manifiesto" },
  { id: "contacto", label: "Contacto" },
];

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setActive(null);
      return;
    }
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);
    if (els.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [isHome]);

  const linkFor = (id: string, label: string) => {
    const isActive = active === id;
    const className = `transition-colors hover:text-foreground ${
      isActive ? "text-foreground" : "text-muted-foreground"
    }`;
    if (isHome) {
      return (
        <a key={id} href={`#${id}`} className={className} onClick={() => setOpen(false)}>
          {label}
        </a>
      );
    }
    return (
      <Link key={id} to="/" hash={id} className={className} onClick={() => setOpen(false)}>
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--rule)] bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 sm:py-5 md:px-10">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-[11px] text-muted-foreground sm:text-xs">{cabecera.nombre}</span>
          <span className="font-serif text-[15px] sm:text-base">
            {cabecera.proyecto}
          </span>
        </Link>
        <nav className="hidden items-center gap-4 whitespace-nowrap text-[12.5px] md:flex lg:gap-7 lg:text-sm">
          {sections.map((s) => linkFor(s.id, s.label))}
        </nav>
        <button
          aria-label="Menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="eyebrow text-muted-foreground transition-colors hover:text-foreground md:hidden"
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 top-[57px] z-50 flex flex-col gap-7 bg-background px-6 py-12 sm:top-[73px] sm:gap-8 sm:px-8 sm:py-14 md:hidden">
          {sections.map((s, i) => (
            <div key={s.id} className="flex items-baseline gap-4 leading-none">
              <span className="eyebrow shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-serif text-[1.35rem] leading-[1.1] sm:text-3xl">
                {linkFor(s.id, s.label)}
              </span>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
