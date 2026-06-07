export type Irremediable = {
  slug: string;
  numero: string;
  titulo: string;
  observacion: string;
  resumen: string;
  cuerpo: string[];
};

// Contenido provisional — sustituir por los proyectos reales de Raúl.
export const irremediables: Irremediable[] = [
  {
    slug: "el-cafe-de-las-siete",
    numero: "01",
    titulo: "El café de las siete",
    observacion:
      "Hay un señor que cada mañana pide lo mismo sin pedirlo. El camarero ya sabe.",
    resumen:
      "Una marca sobre los rituales silenciosos que sostienen los barrios.",
    cuerpo: [
      "Este es un texto provisional. Aquí irá el desarrollo del caso: el contexto, la idea de marca, la propuesta visual y verbal, y por qué esta observación se volvió irremediable.",
      "Cuéntalo en primera persona, sin tecnicismos. La gente que lea esto no busca un brief, busca entender cómo piensas.",
    ],
  },
  {
    slug: "objetos-que-nadie-recoge",
    numero: "02",
    titulo: "Objetos que nadie recoge",
    observacion:
      "Un guante huérfano colocado sobre una valla, esperando a su dueño durante semanas.",
    resumen:
      "Una identidad construida sobre la pequeña conspiración de quien cuida lo perdido.",
    cuerpo: [
      "Texto provisional. Desarrolla aquí la historia del proyecto.",
    ],
  },
  {
    slug: "la-letra-del-rotulo",
    numero: "03",
    titulo: "La letra del rótulo",
    observacion:
      "Las tildes hechas a mano en los carteles de las fruterías son siempre demasiado grandes.",
    resumen:
      "Una marca que rinde tributo a la tipografía no profesional del comercio de calle.",
    cuerpo: [
      "Texto provisional. Desarrolla aquí la historia del proyecto.",
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
