export function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="mb-16 flex items-center gap-5 eyebrow">
      <span>{n}</span>
      <span className="h-px w-12 bg-[color:var(--rule)]" />
      <span>{children}</span>
    </div>
  );
}
