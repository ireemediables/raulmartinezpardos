En `src/routes/index.tsx`, sección "02 — MÉTODO", ajustar los saltos de línea del segundo bloque italicizado para que en móvil aparezca en 3 líneas y en ≥sm se mantenga en 2.

Estructura propuesta:
- "Y cuando una idea" + `<br className="sm:hidden" />` + " insiste lo suficiente," + `<br />` + "le pongo nombre."

Resultado:
- Móvil: 3 líneas (Y cuando una idea / insiste lo suficiente, / le pongo nombre.)
- ≥sm: 2 líneas (Y cuando una idea insiste lo suficiente, / le pongo nombre.)

No se tocan tamaños ni estilos.