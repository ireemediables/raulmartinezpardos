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
  /** Autor del artículo. Por defecto, Raúl Martínez Pardos. */
  autor?: string;
  extracto: string;
  cuerpo: Bloque[];
};

/** Autor por defecto de todos los artículos del Cuaderno. */
export const AUTOR_POR_DEFECTO = "Raúl Martínez Pardos";

export const cuadernoIntro = {
  titulo: "Cuaderno",
  descripcion:
    "Un archivo vivo de notas, observaciones y reflexiones sobre nombres, marcas, ideas y significado.",
};

// Ordenados del más reciente al más antiguo en el índice (ver getArticulosOrdenados).
export const articulos: Articulo[] = [
  {
    slug: "el-problema-de-los-nombres-que-no-tienen-nada-que-decir",
    titulo: "El problema de los nombres que no tienen nada que decir",
    fecha: "2026-06-16",
    extracto:
      "Que un negocio funcione no significa que ya no tenga nada más que decir. Ni que ya no merezca la pena decirlo.",

    cuerpo: [
      { tipo: "parrafo", texto: "Nada más pensar en este título me surge una duda. ¿Y si no es un problema?" },
      { tipo: "parrafo", texto: "Al fin y al cabo, hay miles de negocios que funcionan perfectamente sin necesidad de decir nada más. Panaderías, ferreterías, talleres... Muchos de ellos llevan años abiertos y probablemente seguirán ahí dentro de otros tantos." },
      { tipo: "parrafo", texto: "Si el negocio va bien, ¿qué más da cómo se llame? Es una pregunta razonable. Pero a mí siempre me ha parecido que una cosa no quita la otra." },
      { tipo: "parrafo", texto: "A mí me va bien con mi pareja, y eso no significa que no pueda invitarla a cenar. Que parezca suficiente decirle «te quiero» no significa que no pueda escribirle una carta explicándole lo que significa para mí." },
      { tipo: "parrafo", texto: "Entonces, ¿por qué con las marcas iba a ser diferente? Que un negocio funcione no significa que ya no tenga nada más que decir. Ni que ya no merezca la pena decirlo." },
      { tipo: "parrafo", texto: "Porque las marcas, igual que las personas, terminan expresándose de una manera o de otra. A través de lo que hacen, de cómo lo hacen, de lo que cuentan. Y también de cómo se llaman." },
      { tipo: "parrafo", texto: "Por eso nunca he pensado demasiado en los nombres como una herramienta para vender más. Los veo más como una oportunidad: la oportunidad de que un proyecto empiece a expresar algo propio." },
      { tipo: "parrafo", texto: "Porque una cosa es que un negocio funcione. Y otra muy distinta que tenga algo que decir." },
      { tipo: "parrafo", texto: "Y cuando ambas cosas ocurren al mismo tiempo, el mundo me parece un lugar un poco más interesante." },
    ],


  },
  {
    slug: "como-poner-nombre-a-una-marca",
    titulo: "Cómo poner nombre a una marca",
    fecha: "2026-05-19",
    extracto:
      "Nombres posibles hay infinitos. Pero cuando una marca existe de verdad, ya no nos imaginamos otro.",
    cuerpo: [
      { tipo: "parrafo", texto: "Nombres posibles hay infinitos. Podrías llamar a una marca de zapatillas «Azul 47», a una floristería «Grupo Floral Mediterráneo» o a una taberna «Taberna El Vermú»." },
      { tipo: "parrafo", texto: "Ninguno de esos nombres está mal. Simplemente podrían llamarse de otra manera. Y ahí está el problema. O la solución." },
      { tipo: "parrafo", texto: "Cuando una marca todavía no existe, casi cualquier nombre parece válido. Pero cuando una marca existe de verdad, ocurre algo curioso: ya no nos imaginamos otro." },
      { tipo: "parrafo", texto: "Nike es Nike. IKEA es IKEA. Y la frutería de tu barrio probablemente se llame de alguna forma que apenas recuerdas, porque cuando vas a comprar sandía, no vas a ese sitio que tiene nombre. Vas a la frutería." },
      { tipo: "parrafo", texto: "Sin embargo, cuando alguien va a Nike, muchas veces no va solo a comprar unas zapatillas. Va a Nike. Y esa diferencia importa." },
      { tipo: "parrafo", texto: "Porque una marca empieza a existir cuando deja de ser únicamente lo que vende y empieza a significar algo más. Por eso, una de las primeras oportunidades que tiene una marca para decir quién es, está en su nombre." },
      { tipo: "parrafo", texto: "Un nombre no construye una marca por sí solo. Claro que no. Pero sí puede darle un lugar desde el que empezar a contar quién es." },
      { tipo: "parrafo", texto: "Y eso, para mí, es empezar con buen pie." },
    ],

  },

];

export function getArticulosOrdenados() {
  return [...articulos].sort((a, b) => (a.fecha < b.fecha ? 1 : -1));
}

export function getArticulo(slug: string) {
  return articulos.find((a) => a.slug === slug);
}

export function getAutor(articulo: Articulo) {
  return articulo.autor ?? AUTOR_POR_DEFECTO;
}

export function getArticuloAdyacentes(slug: string) {
  // orden está de más reciente a más antiguo, así que el artículo
  // "anterior" cronológicamente es el siguiente del array, y viceversa.
  const orden = getArticulosOrdenados();
  const idx = orden.findIndex((a) => a.slug === slug);
  return {
    anterior: idx >= 0 && idx < orden.length - 1 ? orden[idx + 1] : undefined,
    siguiente: idx > 0 ? orden[idx - 1] : undefined,
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
