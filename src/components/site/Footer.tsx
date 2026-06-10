import { Link } from "@tanstack/react-router";
import { contacto, cabecera } from "@/content/home";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[color:var(--rule)] sm:mt-28 md:mt-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-muted-foreground sm:gap-3 sm:px-6 sm:py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          <a
            href="/#contacto"
            onClick={(e) => {
              if (typeof window !== "undefined" && window.location.pathname === "/") {
                e.preventDefault();
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
          >
            Contacto
          </a>
        </p>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
          <Link
            to="/legal/aviso-legal"
            className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
          >
            Aviso legal
          </Link>
          <Link
            to="/legal/privacidad"
            className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
          >
            Privacidad
          </Link>
          <span className="text-xs">
            © {new Date().getFullYear()} {cabecera.nombre}
          </span>
        </nav>
      </div>
    </footer>
  );
}
