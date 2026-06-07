import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const sections = [
  { id: "partida", label: "Partida" },
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
      <Link
        key={id}
        to="/"
        hash={id}
        className={className}
        onClick={() => setOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--rule)] bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="font-serif text-lg leading-none tracking-tight">
          Raúl Martínez <span className="text-muted-foreground">— Ideas Irremediables</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {sections.map((s) => linkFor(s.id, s.label))}
        </nav>
        <button
          aria-label="Menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 top-[57px] z-30 flex flex-col gap-6 bg-background px-6 py-10 md:hidden">
          {sections.map((s) => (
            <span key={s.id} className="font-serif text-3xl">
              {linkFor(s.id, s.label)}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
