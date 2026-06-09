import { createFileRoute } from "@tanstack/react-router";
import { icons } from "@/lib/favicons/serve";

export const Route = createFileRoute("/apple-touch-icon.png")({
  server: { handlers: { GET: async () => icons.apple() } },
});
