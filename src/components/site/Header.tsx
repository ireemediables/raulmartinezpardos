import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

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

  // Cerrar con Escape, bloquear scroll del body, devolver foco al abridor al cerrar
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Foco al primer enlace del panel
    const firstFocusable = panelRef.current?.querySelector<HTMLElement>(
      "a, button",
    );
    firstFocusable?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      toggleRef.current?.focus();
    };
  }, [open]);

  const linkFor = (id: string, label: string) => {
    const isActive = active === id;
    const className = `rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] ${
      isActive ? "text-foreground" : "text-muted-foreground"
    }`;
    if (isHome) {
      return (
        <a
          key={id}
          href={`#${id}`}
          aria-current={isActive ? "location" : undefined}
          className={className}
          onClick={() => setOpen(false)}
        >
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

  const cuadernoLinkClass = (isActive: boolean) =>
    `rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] ${
      isActive ? "text-foreground" : "text-muted-foreground"
    }`;

  const isCuaderno = pathname.startsWith("/cuaderno");

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b border-[color:var(--rule)] backdrop-blur ${
          open ? "bg-background" : "bg-background/85 supports-[backdrop-filter]:bg-background/70"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 sm:py-5 md:px-10">
          <Link
            to="/"
            className="flex flex-col leading-tight rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
          >
            <span className="font-serif text-[13px] sm:text-[14px]">{cabecera.nombre}</span>
          </Link>
          <nav className="hidden items-center gap-4 whitespace-nowrap text-[12.5px] lg:flex lg:gap-5 lg:text-[13.5px] xl:gap-7 xl:text-sm">
            {sections.map((s) => linkFor(s.id, s.label))}
            <Link
              to="/cuaderno"
              className={cuadernoLinkClass(isCuaderno)}
              aria-current={isCuaderno ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              Cuaderno
            </Link>
          </nav>
          <button
            ref={toggleRef}
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="eyebrow relative z-[60] rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] lg:hidden"
          >
            {open ? "Cerrar" : "Menú"}
          </button>

        </div>
      </header>
      {open && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Navegación"
          ref={panelRef}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
          className="fixed inset-0 z-50 flex flex-col gap-7 overflow-y-auto bg-background px-6 pb-12 pt-24 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-8 sm:px-8 sm:pb-14 sm:pt-28 lg:hidden [&::-webkit-scrollbar]:hidden"
        >
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] sm:right-7 sm:top-6"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
            >
              <line x1="3" y1="3" x2="15" y2="15" />
              <line x1="15" y1="3" x2="3" y2="15" />
            </svg>
          </button>
          {sections.map((s, i) => (
            <div key={s.id} className="flex items-baseline gap-4 leading-none">
              <span className="eyebrow shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-serif text-[1.35rem] leading-[1.1] sm:text-3xl">
                {linkFor(s.id, s.label)}
              </span>
            </div>
          ))}
          <div className="flex items-baseline gap-4 leading-none">
            <span className="eyebrow shrink-0">{String(sections.length + 1).padStart(2, "0")}</span>
            <span className="font-serif text-[1.35rem] leading-[1.1] sm:text-3xl">
              <Link
                to="/cuaderno"
                aria-current={isCuaderno ? "page" : undefined}
                className={cuadernoLinkClass(isCuaderno)}
                onClick={() => setOpen(false)}
              >
                Cuaderno
              </Link>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
