## Problema

Al abrir el menú en móvil aparece una barra de scroll vertical a la derecha. Viene de `overflow-y-auto` que añadí en el overlay del menú para asegurar que se pudiera hacer scroll si el contenido no cabía. Con 6 secciones cortas no hace falta scroll, así que la barra solo molesta visualmente.

## Cambio propuesto

En `src/components/site/Header.tsx`, en el `<div>` del menú desplegable:

- Sustituir `overflow-y-auto` por una solución que:
  - Permita scroll solo si realmente hace falta (pantallas muy bajas o zoom alto).
  - No muestre nunca una barra lateral visible en móvil.

Lo haré con `overflow-y-auto` + clases utilitarias que ocultan la scrollbar nativa (`[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`). Así:

- En un móvil real: el menú cabe entero y no se ve barra.
- Si alguien gira el móvil o tiene un dispositivo pequeño y el menú no cabe: puede arrastrar con el dedo sin ver barra.
- En la preview de Lovable simulando móvil: tampoco se ve la barra.

No toco nada más: ni desktop, ni tablet, ni tipografías, ni espaciados.

## Archivo afectado

- `src/components/site/Header.tsx` (una sola línea, el contenedor del menú móvil).
