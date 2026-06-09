import heroAlcahueta from "@/assets/alcahueta/hero.asset.json";
import boardAlcahueta from "@/assets/alcahueta/board.asset.json";
import heroTejados from "@/assets/tejados/hero.asset.json";
import boardTejados from "@/assets/tejados/board.asset.json";
import heroPaluego from "@/assets/paluego/hero.asset.json";
import boardPaluego from "@/assets/paluego/board.asset.json";
import heroHabladurnia from "@/assets/habladurnia/hero.asset.json";
import boardHabladurnia from "@/assets/habladurnia/board.asset.json";
import heroCruak from "@/assets/cruak/hero.asset.json";
import boardCruak from "@/assets/cruak/board.asset.json";
import heroBonvuayas from "@/assets/bonvuayas/hero.asset.json";
import boardBonvuayas from "@/assets/bonvuayas/board.asset.json";
import heroNimu from "@/assets/nimu/hero.asset.json";
import boardNimu from "@/assets/nimu/board.asset.json";
import heroArteSerestre from "@/assets/arteserestre/hero.asset.json";
import boardArteSerestre from "@/assets/arteserestre/board.asset.json";
import heroYes from "@/assets/yes/hero.asset.json";
import boardYes from "@/assets/yes/board.asset.json";
import heroComeyCana from "@/assets/comeycana/hero.asset.json";
import boardComeyCana from "@/assets/comeycana/board.asset.json";

export type CasoCompleto = {
  hero: { src: string; alt: string };
  puntoDePartida: string;
  observacion: string[];
  concepto: string;
  nombre: string;
  eslogan?: { texto: string; tachadas: string[] };
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

// 10 proyectos seleccionados. Los cuerpos son provisionales hasta recibir el detalle de cada caso.
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
    slug: "la-habladurnia",
    numero: "02",
    titulo: "La Habladurnia",
    observacion: "Las flores hablan.",
    cuerpo: ["Texto del proyecto pendiente."],
    caso: {
      hero: { src: heroHabladurnia.url, alt: "Dos personas conversando entre un campo de flores silvestres en blanco y negro." },
      puntoDePartida: "Floristería.",
      observacion: [
        "Hay cosas que cuesta decir.",
        "Gracias.",
        "Perdón.",
        "Te quiero.",
        "Te echo de menos…",
        "Por suerte, las flores llevan siglos haciéndolo por nosotros.",
      ],
      concepto: "Las flores hablan.",
      nombre: "LA HABLADURNIA",
      eslogan: { texto: "Dicen que las flores dicen.", tachadas: [] },
      direccionVisual: [
        "El símbolo transforma una flor en un megáfono para representar una idea sencilla: las flores llevan siglos diciendo aquello que a veces nosotros no sabemos decir.",
      ],
      board: { src: boardHabladurnia.url, alt: "Board visual del proyecto La Habladurnia." },
    },
  },
  {
    slug: "paluego",
    numero: "03",
    titulo: "Paluego",
    observacion: "La otra función del palillo.",
    cuerpo: ["Texto del proyecto pendiente."],
    caso: {
      hero: { src: heroPaluego.url, alt: "Vaso de cerveza y plato con palillos sobre una barra de taberna en blanco y negro." },
      puntoDePartida: "Taberna popular especializada en banderillas, encurtidos y vermú.",
      observacion: [
        "En los platos hay banderillas de todo tipo.",
        "Pero, ¿qué sucede cuando solo quedan los palillos?",
        "No todos se tiran.",
        "Algunos se utilizan para eliminar esos pequeños restos que se quedan entre los dientes.",
        "Los \u201Cpaluego\u201D.",
        "Una de esas palabras que nunca aparecen en los diccionarios.",
        "Pero que todo el mundo entiende.",
      ],
      concepto: "La otra función del palillo.",
      nombre: "PALUEGO",
      direccionVisual: [
        "El palillo se integra en el logotipo para reforzar el origen del nombre y convertir el concepto en un gesto gráfico inmediato.",
      ],
      board: { src: boardPaluego.url, alt: "Board visual del proyecto Paluego." },
    },
  },
  {
    slug: "tejados-de-libertad",
    numero: "04",
    titulo: "Tejados de Libertad",
    observacion: "Ampliar horizontes.",
    cuerpo: ["Texto del proyecto pendiente."],
    caso: {
      hero: { src: heroTejados.url, alt: "Escaleras de piedra ascendiendo hacia un cielo abierto con nubes." },
      puntoDePartida: "Librería-cafetería especializada en ensayo, narrativa y actividades culturales.",
      observacion: [
        "Hay lugares capaces de cambiar nuestra forma de ver el mundo.",
        "Los libros son uno de ellos.",
        "Nos permiten viajar sin movernos.",
        "Pensar de otra manera.",
        "Habitar otras vidas.",
        "Y descubrir posibilidades que antes no existían.",
        "Porque la libertad no siempre consiste en ir más lejos.",
        "A veces consiste en mirar más allá.",
      ],
      concepto: "Ampliar horizontes.",
      nombre: "TEJADOS DE LIBERTAD",
      eslogan: { texto: "Asomarse a otros mundos.", tachadas: [] },
      direccionVisual: [
        "El símbolo convierte un libro abierto en un lugar desde el que ampliar horizontes.",
      ],
      board: { src: boardTejados.url, alt: "Board visual del proyecto Tejados de Libertad." },
    },
  },
  {
    slug: "cruak",
    numero: "05",
    titulo: "Cruak",
    observacion: "Salir del estanque.",
    cuerpo: ["Texto del proyecto pendiente."],
    caso: {
      hero: { src: heroCruak.url, alt: "Superficie de agua oscura rota por una gota que genera ondas concéntricas, en blanco y negro." },
      puntoDePartida: "Marca especializada en aventura, bushcraft y actividades al aire libre.",
      observacion: [
        "El agua que permanece quieta termina estancándose.",
        "Y con las personas ocurre algo parecido.",
        "La evolución rara vez sucede dentro de la quietud.",
      ],
      concepto: "Salir del estanque.",
      nombre: "CRUAK",
      eslogan: { texto: "¿Acaso eres una rana?", tachadas: [] },
      direccionVisual: [
        "La identidad se construye alrededor de la ruptura de una superficie de agua para representar la decisión de salir del estanque.",
      ],
      board: { src: boardCruak.url, alt: "Board visual del proyecto Cruak." },
    },
  },
  {
    slug: "bonvuayas",
    numero: "06",
    titulo: "Bonvuayas",
    observacion: "Desear lo mejor.",
    cuerpo: ["Texto del proyecto pendiente."],
    caso: {
      hero: { src: heroBonvuayas.url, alt: "Horizonte abierto sobre una llanura difuminada en blanco y negro." },
      puntoDePartida: "Funeraria contemporánea.",
      observacion: [
        "Cuando alguien se marcha solemos decir:",
        "\u201CQue te vaya bien.\u201D",
        "\u201CCuídate.\u201D",
        "\u201CBuen viaje.\u201D",
        "Son formas de desear que todo salga bien cuando dejas de ver a alguien, sepas o no hacia dónde continúa su camino.",
      ],
      concepto: "La despedida más sincera: desear lo mejor.",
      nombre: "BONVUAYAS",
      eslogan: { texto: "Vayas donde vayas.", tachadas: [] },
      direccionVisual: [
        "El símbolo utiliza un horizonte abierto como metáfora del viaje y de todo aquello que permanece más allá de nuestra mirada.",
      ],
      board: { src: boardBonvuayas.url, alt: "Board visual del proyecto Bonvuayas." },
    },
  },
  {
    slug: "ni-mu",
    numero: "07",
    titulo: "Ni Mu",
    observacion: "¿Para qué hablar?",
    cuerpo: ["Texto del proyecto pendiente."],
    caso: {
      hero: { src: heroNimu.url, alt: "Pareja cenando frente a frente a la luz de las velas, en blanco y negro." },
      puntoDePartida: "Restaurante de cocina contemporánea.",
      observacion: [
        "Hay comidas que están muy ricas.",
        "Otras, espectaculares.",
        "Pero algunas consiguen algo más difícil:",
        "que dejes de hablar.",
      ],
      concepto: "¿Para qué hablar?",
      nombre: "NI MU",
      direccionVisual: [
        "La identidad se construye alrededor de la idea de que una experiencia gastronómica excepcional puede hacer innecesarias las palabras.",
      ],
      board: { src: boardNimu.url, alt: "Board visual del proyecto Ni Mu." },
    },
  },
  {
    slug: "arte-serestre",
    numero: "08",
    titulo: "Arte Serestre",
    observacion: "Arte sobre seres.",
    cuerpo: ["Texto del proyecto pendiente."],
    caso: {
      hero: { src: heroArteSerestre.url, alt: "Interior de una cueva oscura con luz tenue filtrándose desde la entrada, en blanco y negro." },
      puntoDePartida: "Estudio de tatuajes.",
      observacion: [
        "Mucho antes de los lienzos.",
        "Mucho antes de los museos.",
        "Mucho antes de las galerías.",
        "El ser humano ya sentía la necesidad de dejar una huella.",
        "Lo hizo sobre la piedra.",
        "Lo hizo sobre las paredes de las cuevas.",
        "Y también sobre sí mismo.",
      ],
      concepto: "Arte sobre seres.",
      nombre: "ARTE SERESTRE",
      eslogan: { texto: "Dejando huella, por necesidad.", tachadas: [] },
      direccionVisual: [
        "El símbolo convierte la piel en una pared rupestre para representar una necesidad que acompaña al ser humano desde sus orígenes: dejar huella.",
      ],
      board: { src: boardArteSerestre.url, alt: "Board visual del proyecto Arte Serestre." },
    },
  },
  {
    slug: "yes",
    numero: "09",
    titulo: "Y’es",
    observacion: "El vino une.",
    cuerpo: ["Texto del proyecto pendiente."],
    caso: {
      hero: { src: heroYes.url, alt: "Dos manos acercándose sobre una mesa con copas de vino al fondo, en blanco y negro." },
      puntoDePartida: "Vinoteca especializada en experiencias de degustación.",
      observacion: [
        "Hay cosas que, por separado, están bien.",
        "Pero, a veces, juntas funcionan mejor.",
        "Un trozo de queso y una rodaja de pan.",
        "Una mesa y una buena conversación.",
        "Una persona y otra persona\u2026",
        "La \u201CY\u201D hace posible muchos de los encuentros que merecen la pena.",
        "Con el vino sucede lo mismo.",
      ],
      concepto: "El vino une.",
      nombre: "Y\u2019ES",
      eslogan: { texto: "La conjunción perfecta.", tachadas: [] },
      direccionVisual: [
        "El símbolo transforma la conjunción \u201CY\u201D en una copa para representar la capacidad de unir que tiene el vino.",
      ],
      board: { src: boardYes.url, alt: "Board visual del proyecto Y\u2019es." },
    },
  },
  {
    slug: "come-y-cana",
    numero: "10",
    titulo: "Come y Caña",
    observacion: "“Comer y callar” no tiene sentido.",
    cuerpo: ["Texto del proyecto pendiente."],
    caso: {
      hero: { src: heroComeyCana.url, alt: "Grupo de amigos riendo y conversando alrededor de una mesa con cañas y tapas, en blanco y negro." },
      puntoDePartida: "Cadena de bares de picoteo.",
      observacion: [
        "Cuando vamos a un bar, parece que vamos a comer y a tomar unas cañas.",
        "Pero en realidad, vamos a algo más.",
        "Y es que nos reunimos, sobre todo, para hablar.",
        "Y\u2026 ¿por qué callar cuando nos gusta contarnos cosas?",
      ],
      concepto: "\u201CComer y callar\u201D no tiene sentido.",
      nombre: "COME Y CAÑA",
      eslogan: { texto: "Nos gusta contarnos cosas.", tachadas: [] },
      direccionVisual: [
        "La identidad se construye alrededor de la ñ, que sustituye visualmente a la ll de la expresión original y se transforma en la espuma de una caña.",
      ],
      board: { src: boardComeyCana.url, alt: "Board visual del proyecto Come y Caña." },
    },
  },
];

export function getIrremediable(slug: string) {
  return irremediables.find((i) => i.slug === slug);
}

export function getNextIrremediable(slug: string) {
  const idx = irremediables.findIndex((i) => i.slug === slug);
  if (idx === -1 || idx === irremediables.length - 1) return undefined;
  return irremediables[idx + 1];
}

export function isLastIrremediable(slug: string) {
  const idx = irremediables.findIndex((i) => i.slug === slug);
  return idx === irremediables.length - 1;
}
