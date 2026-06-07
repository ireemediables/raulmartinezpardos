export function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="mb-12 flex items-baseline gap-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
      <span className="text-foreground">{n}</span>
      <span className="h-px flex-1 bg-[color:var(--rule)]" />
      <span>{children}</span>
    </div>
  );
}
