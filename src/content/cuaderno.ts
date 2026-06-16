// Cuaderno — archivo vivo de textos sobre nombres, marcas, ideas y significado.
// Para añadir un artículo nuevo basta con sumar una entrada al array `articulos`.
// El sistema calcula automáticamente el tiempo de lectura y genera URL, sitemap,
// meta tags y navegación anterior/siguiente.

export type Bloque =
  | { tipo: "parrafo"; texto: string }
  | { tipo: "encabezado"; texto: string }
  | { tipo: "cita"; texto: string };

export type Articulo = {
  slug: string;
  titulo: string;
  /** Fecha en formato ISO (YYYY-MM-DD). */
  fecha: string;
  extracto: string;
  cuerpo: Bloque[];
};

export const cuadernoIntro = {
  titulo: "Cuaderno",
  descripcion:
    "Un archivo vivo de notas, observaciones y reflexiones sobre nombres, marcas, ideas y significado.",
};

// Ordenados del más reciente al más antiguo en el índice (ver getArticulosOrdenados).
export const articulos: Articulo[] = [
  {
    slug: "como-poner-nombre-a-una-marca",
    titulo: "Cómo poner nombre a una marca",
    fecha: "2026-06-12",
    extracto:
      "Un nombre no se inventa: se encuentra. Notas sobre el proceso de escuchar a un proyecto hasta que dice cómo se llama.",
    cuerpo: [
      {
        tipo: "parrafo",
        texto:
          "Casi siempre que alguien me pregunta cómo se pone nombre a una marca, espera una técnica. Una fórmula. Un atajo.",
      },
      {
        tipo: "parrafo",
        texto:
          "Y entiendo el impulso. El nombre es lo que más se ve, lo que más se repite, lo que primero se pronuncia. Es lógico querer acertar cuanto antes.",
      },
      {
        tipo: "parrafo",
        texto:
          "Pero los buenos nombres rara vez aparecen así. Lo que tienen en común no es una técnica: es una observación previa.",
      },
      { tipo: "encabezado", texto: "Antes del nombre, la idea" },
      {
        tipo: "parrafo",
        texto:
          "Un nombre no nombra un negocio. Nombra una idea. Y si la idea todavía no está, el nombre no tiene a qué agarrarse.",
      },
      {
        tipo: "parrafo",
        texto:
          "Por eso, antes de proponer nada, paso tiempo escuchando. Qué se ofrece. Qué se observa. Qué se intuye. Qué pasa alrededor de ese proyecto que el propio proyecto todavía no ha sabido contar.",
      },
      {
        tipo: "cita",
        texto:
          "El nombre llega cuando la idea está tan clara que ya solo falta llamarla.",
      },
      { tipo: "encabezado", texto: "Tres preguntas que ayudan" },
      {
        tipo: "parrafo",
        texto:
          "¿Qué hace que este proyecto no se parezca a los demás? ¿Qué pasaría si desapareciese mañana? ¿Qué dirían las personas que ya lo conocen?",
      },
      {
        tipo: "parrafo",
        texto:
          "Las respuestas no son el nombre. Son el material. Pero sin ese material, lo que aparece son etiquetas; con él, empiezan a aparecer nombres.",
      },
    ],
  },
  {
    slug: "el-problema-de-los-nombres-que-no-tienen-nada-que-decir",
    titulo: "El problema de los nombres que no tienen nada que decir",
    fecha: "2026-06-04",
    extracto:
      "Hay nombres que suenan bien y no dicen nada. Funcionan al principio. Pero, con el tiempo, todo lo que se construye encima cruje.",
    cuerpo: [
      {
        tipo: "parrafo",
        texto:
          "Hay nombres que pasan el primer filtro con facilidad. Suenan bien. Son cortos. El dominio está libre. Nadie se opone.",
      },
      {
        tipo: "parrafo",
        texto:
          "Y aun así, meses después, el proyecto que llevan encima no termina de despegar. No es culpa del producto. No es culpa del equipo. Es que el nombre no está sosteniendo nada.",
      },
      { tipo: "encabezado", texto: "Sonar bien no es decir algo" },
      {
        tipo: "parrafo",
        texto:
          "Un nombre que solo suena bien es un nombre vacío. Y los nombres vacíos obligan a que todo lo demás haga su trabajo: la web, la publicidad, el equipo comercial, las explicaciones.",
      },
      {
        tipo: "parrafo",
        texto:
          "Un nombre con algo dentro no necesita tantas explicaciones. Empieza a hacer parte del trabajo por su cuenta.",
      },
      {
        tipo: "cita",
        texto:
          "Un nombre no tiene que explicarlo todo. Pero algo tiene que decir.",
      },
      {
        tipo: "parrafo",
        texto:
          "Por eso me interesan más los nombres que parten de una observación que los que parten de una ocurrencia. Las observaciones envejecen mejor.",
      },
    ],
  },
];

export function getArticulosOrdenados() {
  return [...articulos].sort((a, b) => (a.fecha < b.fecha ? 1 : -1));
}

export function getArticulo(slug: string) {
  return articulos.find((a) => a.slug === slug);
}

export function getArticuloAdyacentes(slug: string) {
  const orden = getArticulosOrdenados();
  const idx = orden.findIndex((a) => a.slug === slug);
  return {
    anterior: idx > 0 ? orden[idx - 1] : undefined,
    siguiente: idx >= 0 && idx < orden.length - 1 ? orden[idx + 1] : undefined,
  };
}

/** Tiempo estimado de lectura en minutos (mín. 1). 200 palabras/min. */
export function tiempoLectura(cuerpo: Bloque[]) {
  const palabras = cuerpo
    .map((b) => b.texto)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(palabras / 200));
}

export function formatearFecha(iso: string) {
  // Ej: "12 jun 2026" en español, conservando el espíritu sobrio del resto del sitio.
  const [y, m, d] = iso.split("-").map(Number);
  const meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  if (!y || !m || !d) return iso;
  return `${d} ${meses[m - 1]} ${y}`;
}
