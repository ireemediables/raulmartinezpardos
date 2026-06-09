import { createFileRoute } from "@tanstack/react-router";
import { icons } from "@/lib/favicons/serve";

export const Route = createFileRoute("/favicon-16x16.png")({
  server: { handlers: { GET: async () => icons.png16() } },
});
