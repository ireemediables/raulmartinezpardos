import { contacto, cabecera } from "@/content/home";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-[color:var(--rule)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-12 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
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
