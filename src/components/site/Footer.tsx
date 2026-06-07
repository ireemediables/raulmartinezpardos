import { contacto } from "@/content/home";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-[color:var(--rule)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          <a href={`mailto:${contacto.email}`} className="hover:text-foreground transition-colors">
            {contacto.email}
          </a>
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.18em]">
          © {new Date().getFullYear()} Raúl Martínez
        </p>
      </div>
    </footer>
  );
}
