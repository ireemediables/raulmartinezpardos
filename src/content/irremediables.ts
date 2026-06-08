import heroAlcahueta from "@/assets/alcahueta/hero.asset.json";
import boardAlcahueta from "@/assets/alcahueta/board.asset.json";

export type CasoCompleto = {
  hero: { src: string; alt: string };
  puntoDePartida: string;
  observacion: string[];
  concepto: string;
  nombre: string;
  eslogan: { texto: string; tachadas: string[] };
  direccionVisual: string[];
  board: { src: string; alt: string };
};

export type Irremediable = {
  slug: string;
  numero: string;
  titulo: string;
  observacion: string;
  cuerpo: string[];
  caso?: CasoCompleto;
};

// 12 proyectos seleccionados. Los cuerpos son provisionales hasta recibir el detalle de cada caso.
export const irremediables: Irremediable[] = [
  {
    slug: "la-alcahueta",
    numero: "01",
    titulo: "La Alcahueta",
    observacion: "Hay lugares que saben demasiado.",
    cuerpo: ["Texto del proyecto pendiente."],
    caso: {
      hero: { src: heroAlcahueta.url, alt: "Cortina entreabierta dejando ver una lavandería al fondo." },
      puntoDePartida: "Lavandería autoservicio.",
      observacion: [
        "Los lugares guardan recuerdos.",
        "Sin embargo, sería difícil que un lugar se acordase de todas las personas que pasan por ahí.",
        "Pero, ¿qué ocurre cuando ese lugar acaba entrando en nuestra forma de vivir?",
        "Sabe la ropa que usamos.",
        "Escucha las conversaciones que tenemos.",
        "Conoce nuestras pequeñas manías.",
        "Y termina formando parte de nuestra rutina.",
      ],
      concepto: "Hay lugares que saben demasiado.",
      nombre: "LA ALCAHUETA",
      eslogan: { texto: "Si te he visto, no me acuerdo.", tachadas: ["he", "no"] },
      direccionVisual: [
        "La identidad se construye alrededor de una abuela alcahueta guiñando un ojo.",
        "Sus ojos representan los dos estados de una lavadora.",
      ],
      board: { src: boardAlcahueta.url, alt: "Board visual del proyecto La Alcahueta." },
    },
  },
  {
    slug: "tejados-de-libertad",
    numero: "02",
    titulo: "Tejados de Libertad",
    observacion: "Ampliar horizontes.",
    cuerpo: ["Texto del proyecto pendiente."],
  },
  {
    slug: "paluego",
    numero: "03",
    titulo: "Paluego",
    observacion: "La otra función del palillo.",
    cuerpo: ["Texto del proyecto pendiente."],
  },
  {
    slug: "tomatelo",
    numero: "04",
    titulo: "tomaTÉlo",
    observacion: "Permítete parar.",
    cuerpo: ["Texto del proyecto pendiente."],
  },
  {
    slug: "la-habladurnia",
    numero: "05",
    titulo: "La Habladurnia",
    observacion: "Las flores hablan.",
    cuerpo: ["Texto del proyecto pendiente."],
  },
  {
    slug: "cruak",
    numero: "06",
    titulo: "Cruak",
    observacion: "Salir del estanque.",
    cuerpo: ["Texto del proyecto pendiente."],
  },
  {
    slug: "bonvuayas",
    numero: "07",
    titulo: "Bonvuayas",
    observacion: "Desear lo mejor.",
    cuerpo: ["Texto del proyecto pendiente."],
  },
  {
    slug: "ni-mu",
    numero: "08",
    titulo: "Ni Mu",
    observacion: "¿Para qué hablar?",
    cuerpo: ["Texto del proyecto pendiente."],
  },
  {
    slug: "arte-serestre",
    numero: "09",
    titulo: "Arte Serestre",
    observacion: "Arte sobre seres.",
    cuerpo: ["Texto del proyecto pendiente."],
  },
  {
    slug: "yes",
    numero: "10",
    titulo: "Y’es",
    observacion: "El vino une.",
    cuerpo: ["Texto del proyecto pendiente."],
  },
  {
    slug: "siva-mas",
    numero: "11",
    titulo: "Síva+",
    observacion: "Siempre hay más.",
    cuerpo: ["Texto del proyecto pendiente."],
  },
  {
    slug: "come-y-cana",
    numero: "12",
    titulo: "Come y Caña",
    observacion: "“Comer y callar” no tiene sentido.",
    cuerpo: ["Texto del proyecto pendiente."],
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
