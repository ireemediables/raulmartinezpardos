export function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
      <span>{n}</span>
      <span className="h-px flex-1 bg-[color:var(--rule)]" />
      <span>{children}</span>
    </div>
  );
}
