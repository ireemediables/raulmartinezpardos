import { createFileRoute } from "@tanstack/react-router";
import { icons } from "@/lib/favicons/serve";

export const Route = createFileRoute("/favicon.svg")({
  server: { handlers: { GET: async () => icons.svg() } },
});
