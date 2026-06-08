export function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="mb-12 flex items-center gap-4 eyebrow sm:mb-14 sm:gap-5 md:mb-16">
      <span>{n}</span>
      <span className="h-px w-8 bg-[color:var(--rule)] sm:w-10 md:w-12" />
      <span>{children}</span>
    </div>
  );
}
