import simbolo from "@/assets/marca/simbolo.asset.json";

type Size = "sm" | "md";

/**
 * Firma visual del universo "Ideas irremediables".
 * Sutil, centrado, nunca compite con tipografía.
 */
export function Simbolo({
  size = "sm",
  className = "",
}: {
  size?: Size;
  className?: string;
}) {
  const dim = size === "md" ? "h-12 sm:h-14" : "h-10 sm:h-12";
  return (
    <div className={`flex justify-center ${className}`} aria-hidden="true">
      <img
        src={simbolo.url}
        alt=""
        className={`${dim} w-auto opacity-70`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
