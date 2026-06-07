# Ideas Irremediables — Plan v2

Web-ensayo de página única con scroll vertical. Las ideas pesan más que las imágenes. Sólo los proyectos ("Irremediables") tienen página propia, porque ahí el caso necesita aire para desarrollarse.

## Arquitectura final

```
/                       → Home (todas las secciones en una sola página)
/irremediables/$slug    → Página individual de cada proyecto
```

**Home** contiene en orden vertical:

1. Punto de partida
2. Método
3. Para quién
4. Irremediables (lista, no grid)
5. Manifiesto
6. Contacto

**Páginas de proyecto** son la única excepción: una ruta dedicada por cada Irremediable.

## Navegación

**Header fijo, minimal, persistente en toda la web:**

- Izquierda: *Raúl Martínez — Ideas Irremediables* (link a `/`).
- Derecha: enlaces de texto, sin iconos ni CTAs:
  *Partida · Método · Para quién · Irremediables · Manifiesto · Contacto*

**Comportamiento del menú:**

- En `/`: cada enlace es un ancla (`#partida`, `#metodo`, etc.) con scroll suave y `scroll-margin-top` para no quedar tapado por el header.
- En `/irremediables/$slug`: los mismos enlaces siguen funcionando — navegan a `/#metodo`, `/#contacto`, etc. (vuelven al home y hacen scroll a la sección). Esto se resuelve con `<Link to="/" hash="metodo">`.
- El enlace activo se marca cuando la sección entra en viewport (IntersectionObserver) — sólo en `/`.

**Móvil:** menú hamburguesa que abre una hoja a pantalla completa con la misma lista, tipográfica y grande. Al elegir, scrollea a la sección y se cierra.

**Footer:** una línea con email + año. Sin columnas, sin redes en grid. Si quieres redes, una sola línea de texto.

## Cómo funciona cada sección de la home

Cada sección es un bloque vertical con mucho aire arriba y abajo (separación generosa, no bandas de color de fondo). Separador visual: un asterisco centrado discreto o una línea fina, no más.

- **Punto de partida** — una frase larga a tamaño grande (serif), seguida de un párrafo breve que sitúa Ideas Irremediables. Sin botones, sin hero comercial.
- **Método** — texto en primera persona, prosa larga. Posiblemente con tres momentos numerados (Observar / Interpretar / Proponer) integrados en el texto, no como cards.
- **Para quién** — un párrafo que describe con quién Raúl conecta. Honesto: también puede decir con quién no encaja.
- **Irremediables** — índice tipográfico vertical, sin miniaturas:
  ```
  01 ── Título del proyecto
        La observación cotidiana que lo originó.
  02 ── Título del proyecto
        ...
  ```
  Cada fila es un `<Link>` a `/irremediables/$slug`. Hover: subrayado fino o desplazamiento mínimo del número. Nada de zooms ni overlays.
- **Manifiesto** — versículos cortos, numerados, mucho espacio vertical entre ellos. La pieza más tipográfica de la web.
- **Contacto** — sin formulario. Email visible (mailto), una frase invitando a escribir contando una observación, no un brief.

## Páginas de proyecto (`/irremediables/$slug`)

Estructura simple, lectura primero:

1. Número + título del proyecto.
2. La observación originadora (una o dos frases destacadas).
3. Cuerpo del caso: contexto, idea, propuesta de marca. Texto largo, columna estrecha.
4. Imágenes intercaladas SÓLO donde aportan al argumento (no galería al final). Tamaño contenido, no full-bleed.
5. Al final: enlace al siguiente Irremediable + enlace para volver al índice (`/#irremediables`).

Header y footer iguales que en home.

## Dirección visual

**Concepto.** Un cuaderno contemporáneo, no un facsímil editorial. Cercano a sitios como *Are.na*, *It's Nice That Editorial*, o el portfolio de Frank Chimero — sobrios, humanos, contemporáneos, sin pose de museo ni de revista cultural.

**Paleta — blanco roto, negro, grises cálidos, color contenidísimo.**

- Fondo: blanco roto cálido `oklch(0.97 0.005 75)`
- Texto: casi negro cálido `oklch(0.20 0.01 60)`
- Gris medio (metadatos, números, notas): `oklch(0.55 0.008 60)`
- Gris claro (separadores, bordes finos): `oklch(0.88 0.006 70)`
- Acento (un solo color, usado con muchísima contención: subrayado de link al hover, número activo en la nav): un terracota desaturado `oklch(0.52 0.09 40)` — opcional, también puede no haber color y dejar todo en escala de grises.

Sin modo oscuro en v1.

**Tipografía.**

- Títulos / display: una serif contemporánea con carácter pero sin gesto académico. Candidatos: **Instrument Serif** (cálida, contemporánea) o **Newsreader**. Tamaños grandes pero no monumentales (clamp ~3rem a ~6rem).
- Cuerpo: una sans humanista, cómoda a 18-20px, interlineado 1.7. Candidatos: **Inter**, **Work Sans** o **Söhne-like** (vía Inter).
- Numeración y metadatos: mono discreta (**JetBrains Mono**) en gris medio, tamaño pequeño.

Si quieres, antes de construir te muestro 2-3 combinaciones tipográficas y eliges.

**Layout y ritmo.**

- Columna única centrada, medida de texto ~640-680px.
- Márgenes laterales generosos en desktop; en móvil, padding cómodo (24-28px).
- Separación vertical entre secciones grande (160-200px en desktop) — el aire es parte del mensaje.
- Sin cards, sin sombras, sin bordes redondeados marcados. Como mucho, líneas finas horizontales.

**Motion.**

- Scroll suave nativo (`scroll-behavior: smooth`).
- Fade-in muy sutil al entrar cada bloque en viewport. Nada más.
- Sin parallax, sin cursores custom, sin hover decorativos.

## Datos y stack

- TanStack Start con dos rutas: `src/routes/index.tsx` (home con todas las secciones) y `src/routes/irremediables.$slug.tsx`.
- Contenido en `src/content/irremediables.ts` — array tipado con `{ slug, numero, titulo, observacion, cuerpo, imagenes? }`. Editable sin backend.
- Textos de las secciones de home en un único archivo `src/content/home.ts` para que puedas editarlos sin tocar JSX.
- Sin Lovable Cloud en v1 (no hay formulario ni login).
- Tokens en `src/styles.css` (oklch), fuentes vía Google Fonts.

## Versión 1 — qué tendrás al terminar

- Home en `/` con las 6 secciones encadenadas verticalmente, header con anclas y scroll suave, active-state al recorrer.
- Página por cada proyecto en `/irremediables/$slug`.
- Diseño en blanco roto + negro + grises cálidos, serif contemporánea para títulos, sans humanista para cuerpo, color usado con cuentagotas.
- SEO básico: `head()` propio para home y para cada ficha de proyecto.
- Responsive cuidado, móvil con menú a pantalla completa.

## Antes de construir necesito de ti

Para que la v1 nazca con contenido real (no lorem ipsum en las piezas que más importan):

1. ¿Tienes ya escrito el **Punto de partida** y el **Manifiesto**, aunque sean borradores?
2. **Lista de Irremediables** existentes: para cada uno, mínimo título + observación originadora (una línea). El cuerpo del caso puede venir después.
3. **Email** de contacto a mostrar.
4. ¿Quieres que te muestre **2-3 combinaciones tipográficas** renderizadas antes de elegir, o tiro directo con Instrument Serif + Inter?

Si prefieres arrancar ya, puedo construir la v1 con textos-placeholder honestos (claramente marcados como tales) y los reemplazas en cuanto tengas los definitivos.
