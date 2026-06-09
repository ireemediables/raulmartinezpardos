## Objetivo

Dejar la colección en 10 irremediables, eliminando `tomaTÉlo` (04) y `SÍVA+` (11), y colocando `La Habladurnia` antes que `Tejados de Libertad`. Sin tocar diseño, tipografía, márgenes, animaciones, contenido ni estructura de los proyectos restantes.

## Nuevo orden y numeración

```
01 — La Alcahueta        (la-alcahueta)
02 — La Habladurnia      (la-habladurnia)
03 — Paluego             (paluego)
04 — Tejados de Libertad (tejados-de-libertad)
05 — Cruak               (cruak)
06 — Bonvuayas           (bonvuayas)
07 — Ni Mu               (ni-mu)
08 — Arte Serestre       (arte-serestre)
09 — Y'es                (yes)
10 — Come y Caña         (come-y-cana)
```

Los `slug` se mantienen tal cual (los enlaces existentes a `/irremediables/la-habladurnia`, etc. siguen funcionando). Solo cambia el campo `numero` y la posición en el array.

## Cambios

1. **`src/content/irremediables.ts`**
   - Eliminar los objetos `tomatelo` (slug `tomatelo`) y `siva-mas` (slug `siva-mas`) del array `irremediables`.
   - Eliminar sus imports de `@/assets/tomatelo/...` y `@/assets/siva/...`.
   - Reordenar el array al orden indicado arriba.
   - Renumerar el campo `numero` de `"01"` a `"10"` siguiendo el nuevo orden.
   - Los helpers `getIrremediable`, `getNextIrremediable`, `isLastIrremediable` no cambian (operan sobre el array).

2. **Assets de los proyectos eliminados**
   - Borrar los `.asset.json` y los assets CDN asociados:
     - `src/assets/tomatelo/hero.asset.json`, `src/assets/tomatelo/board.asset.json`
     - `src/assets/siva/hero.asset.json`, `src/assets/siva/board.asset.json`

3. **Búsqueda de referencias residuales**
   - Revisar `src/routes/index.tsx`, `src/content/home.ts`, `src/routes/irremediables.$slug.tsx` y cualquier otro fichero en busca de menciones a `tomatelo`, `tomaTÉlo`, `siva`, `SÍVA`, `Síva`. Eliminarlas si aparecen. Por la estructura actual no se esperan menciones fuera de `irremediables.ts`, pero se confirmará antes de cerrar.

## Fuera del alcance

No se toca diseño, tipografías, márgenes, animaciones, navegación, manifiesto, epílogo, ni el contenido editorial de los 10 proyectos restantes.
