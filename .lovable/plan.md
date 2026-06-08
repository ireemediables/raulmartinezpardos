En `src/routes/index.tsx`, dentro de la sección "02 — MÉTODO", el segundo bloque italicizado tiene un `<br />` fijo entre "lo suficiente," y "le pongo nombre.", lo que en móvil produce tres líneas.

Cambio único:
- Sustituir ese `<br />` por uno responsive que sólo aparezca en pantallas ≥ sm, y añadir un espacio para que en móvil ambas frases fluyan en el mismo párrafo y se rompan de forma natural.

Resultado:
- Móvil: "Y cuando una idea insiste lo suficiente, le pongo nombre." (wrap natural, ~2 líneas)
- Tablet/escritorio: se mantiene el salto manual actual.

No se tocan tamaños, tipografías, espaciados, ni el resto de secciones.