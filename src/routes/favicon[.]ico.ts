import { createFileRoute } from "@tanstack/react-router";
import { icons } from "@/lib/favicons/serve";

export const Route = createFileRoute("/favicon.ico")({
  server: { handlers: { GET: async () => icons.ico() } },
});
