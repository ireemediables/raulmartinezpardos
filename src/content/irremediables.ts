export type Irremediable = {
  slug: string;
  numero: string;
  titulo: string;
  observacion: string;
  resumen: string;
  cuerpo: string[];
};

// Proyectos seleccionados — sustituir los cuerpos por el detalle de cada caso.
export const irremediables: Irremediable[] = [
  {
    slug: "paluego",
    numero: "01",
    titulo: "PALUEGO",
    observacion:
      "Lo que se deja para después rara vez vuelve. Y aun así, lo seguimos dejando.",
    resumen:
      "Una marca construida sobre la honestidad incómoda de aplazar.",
    cuerpo: [
      "Texto provisional. Aquí irá el desarrollo del caso PALUEGO: contexto, observación originadora, estrategia, naming y propuesta de marca.",
    ],
  },
  {
    slug: "tomatelo",
    numero: "02",
    titulo: "tomaTÉlo",
    observacion:
      "Hay frases que cambian de sentido sólo con cómo las escribes.",
    resumen:
      "Una identidad que vive en la tensión entre lo escrito y lo dicho.",
    cuerpo: [
      "Texto provisional. Desarrolla aquí la historia del proyecto tomaTÉlo.",
    ],
  },
  {
    slug: "ni-mu",
    numero: "03",
    titulo: "NI MU",
    observacion:
      "Los silencios cuentan más cosas que los discursos. Y se editan peor.",
    resumen:
      "Una marca que reivindica callar como acto creativo.",
    cuerpo: [
      "Texto provisional. Desarrolla aquí la historia del proyecto NI MU.",
    ],
  },
  {
    slug: "la-alcahueta",
    numero: "04",
    titulo: "LA ALCAHUETA",
    observacion:
      "Algunas palabras antiguas todavía saben hacer cosas que las nuevas no.",
    resumen:
      "Una identidad que recupera un oficio sin disfrazarlo de moderno.",
    cuerpo: [
      "Texto provisional. Desarrolla aquí la historia del proyecto LA ALCAHUETA.",
    ],
  },
  {
    slug: "bonvuayas",
    numero: "05",
    titulo: "BONVUAYAS",
    observacion:
      "Lo mal pronunciado a veces se queda. Y termina siendo lo único que se recuerda.",
    resumen:
      "Una marca que abraza el error como firma.",
    cuerpo: [
      "Texto provisional. Desarrolla aquí la historia del proyecto BONVUAYAS.",
    ],
  },
];

export function getIrremediable(slug: string) {
  return irremediables.find((i) => i.slug === slug);
}

export function getNextIrremediable(slug: string) {
  const idx = irremediables.findIndex((i) => i.slug === slug);
  if (idx === -1) return undefined;
  return irremediables[(idx + 1) % irremediables.length];
}
