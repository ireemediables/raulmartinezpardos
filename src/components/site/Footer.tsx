import { contacto, cabecera } from "@/content/home";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[color:var(--rule)] sm:mt-28 md:mt-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-muted-foreground sm:px-6 sm:py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          <a href={`mailto:${contacto.email}`} className="hover:text-foreground transition-colors">
            {contacto.email}
          </a>
        </p>
        <p className="text-xs">
          © {new Date().getFullYear()} {cabecera.nombre}
        </p>
      </div>
    </footer>
  );
}
