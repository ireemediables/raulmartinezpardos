## Diagnóstico

En la captura se ve que, al abrir el menú móvil:

- Solo aparece el primer ítem ("01 Punto de partida").
- Detrás se ve el hero ("Ideas irremediables — una forma de mirar").
- Hace falta scroll para ver el resto de secciones.

**Causa:** el `<header>` lleva `backdrop-blur` (filtro CSS). Cualquier elemento `fixed` dentro de un ancestro con `backdrop-filter` deja de posicionarse respecto al viewport y se posiciona respecto a ese ancestro. Como el header mide ~57px, el overlay del menú (`fixed inset-0`) queda recortado a esos 57px de alto: por eso solo se ve un ítem y el hero asoma por detrás.

## Respuesta a tu pregunta

Hacer scroll dentro de un menú en móvil es perfectamente normal y se usa habitualmente. Pero con 6 secciones cortas el menú entero cabe de sobra en una pantalla móvil estándar (~670 px de alto). En cuanto se arregle el bug, **no hará falta scroll** y se verán todas las secciones a la vez.

## Cambio propuesto

En `src/components/site/Header.tsx`:

- Hacer que el componente devuelva un fragmento (`<>...</>`) con dos elementos hermanos:
  1. El `<header>` (con su `backdrop-blur` intacto cuando el menú está cerrado).
  2. El overlay del menú móvil, renderizado **fuera** del `<header>`, como hermano directo. Así su `fixed inset-0` se referencia al viewport y cubre toda la pantalla.
- Mantener todo lo demás igual: estilos del menú, botón "Cerrar", ocultar la scrollbar, z-index, comportamiento sticky del header, versiones desktop y tablet sin tocar.

Resultado:

- El menú móvil cubre toda la pantalla en negro sólido.
- Se ven las 6 secciones sin necesidad de scroll en un móvil normal.
- Si alguien usa una pantalla muy pequeña o zoom grande, sigue pudiendo arrastrar con el dedo sin barra visible.

## Archivo afectado

- `src/components/site/Header.tsx` (única reestructuración del JSX devuelto; sin cambios en estilos ni contenido).
