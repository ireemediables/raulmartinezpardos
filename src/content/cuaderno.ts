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
      { tipo: "parrafo", texto: "Nada más pensar en este título me surge una duda." },
      { tipo: "parrafo", texto: "¿Y si no es un problema?" },
      { tipo: "parrafo", texto: "Al fin y al cabo, hay miles de negocios que funcionan perfectamente sin necesidad de decir nada más." },
      { tipo: "parrafo", texto: "Panaderías." },
      { tipo: "parrafo", texto: "Ferreterías." },
      { tipo: "parrafo", texto: "Talleres..." },
      { tipo: "parrafo", texto: "Muchos de ellos llevan años abiertos." },
      { tipo: "parrafo", texto: "Y probablemente seguirán ahí dentro de otros tantos." },
      { tipo: "parrafo", texto: "Si el negocio va bien, ¿qué más da cómo se llame?" },
      { tipo: "parrafo", texto: "Es una pregunta razonable." },
      { tipo: "parrafo", texto: "Pero a mí siempre me ha parecido que una cosa no quita la otra." },
      { tipo: "parrafo", texto: "A mí me va bien con mi pareja." },
      { tipo: "parrafo", texto: "Y eso no significa que no pueda invitarla a cenar." },
      { tipo: "parrafo", texto: "Que parezca suficiente decirle «te quiero» no significa que no pueda escribirle una carta explicándole lo que significa para mí." },
      { tipo: "parrafo", texto: "Entonces, ¿por qué con las marcas iba a ser diferente?" },
      { tipo: "parrafo", texto: "Que un negocio funcione no significa que ya no tenga nada más que decir." },
      { tipo: "parrafo", texto: "Ni que ya no merezca la pena decirlo." },
      { tipo: "parrafo", texto: "Porque las marcas, igual que las personas, terminan expresándose de una manera o de otra." },
      { tipo: "parrafo", texto: "A través de lo que hacen." },
      { tipo: "parrafo", texto: "De cómo lo hacen." },
      { tipo: "parrafo", texto: "De lo que cuentan." },
      { tipo: "parrafo", texto: "Y también de cómo se llaman." },
      { tipo: "parrafo", texto: "Por eso nunca he pensado demasiado en los nombres como una herramienta para vender más." },
      { tipo: "parrafo", texto: "Los veo más como una oportunidad." },
      { tipo: "parrafo", texto: "La oportunidad de que un proyecto empiece a expresar algo propio." },
      { tipo: "parrafo", texto: "Porque una cosa es que un negocio funcione." },
      { tipo: "parrafo", texto: "Y otra muy distinta que tenga algo que decir." },
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
      { tipo: "parrafo", texto: "Nombres posibles hay infinitos." },
      { tipo: "parrafo", texto: "Podrías llamar a una marca de zapatillas «Azul 47»." },
      { tipo: "parrafo", texto: "A una floristería «Grupo Floral Mediterráneo»." },
      { tipo: "parrafo", texto: "O a una taberna «Taberna El Vermú»." },
      { tipo: "parrafo", texto: "Ninguno de esos nombres está mal. Simplemente podrían llamarse de otra manera." },
      { tipo: "parrafo", texto: "Y ahí está el problema. O la solución." },
      { tipo: "parrafo", texto: "Cuando una marca todavía no existe, casi cualquier nombre parece válido. Pero cuando una marca existe de verdad, ocurre algo curioso. Ya no nos imaginamos otro." },
      { tipo: "parrafo", texto: "Nike es Nike." },
      { tipo: "parrafo", texto: "IKEA es IKEA." },
      { tipo: "parrafo", texto: "Y la frutería de tu barrio probablemente se llame de alguna forma que apenas recuerdas. Porque cuando vas a comprar sandía, no vas a ese sitio que tiene nombre." },
      { tipo: "parrafo", texto: "Vas a la frutería." },
      { tipo: "parrafo", texto: "Sin embargo, cuando alguien va a Nike, muchas veces no va solo a comprar unas zapatillas." },
      { tipo: "parrafo", texto: "Va a Nike." },
      { tipo: "parrafo", texto: "Y esa diferencia importa." },
      { tipo: "parrafo", texto: "Porque una marca empieza a existir cuando deja de ser únicamente lo que vende. Y empieza a significar algo más." },
      { tipo: "parrafo", texto: "Por eso, una de las primeras oportunidades que tiene una marca para decir quién es, está en su nombre." },
      { tipo: "parrafo", texto: "Porque al final, un nombre no construye una marca por sí solo. Claro que no." },
      { tipo: "parrafo", texto: "Pero sí puede darle un lugar desde el que empezar a contar quién es." },
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
