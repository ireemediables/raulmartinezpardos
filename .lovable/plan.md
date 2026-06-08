## Plan — Foto del autor junto al Manifiesto

Colocar la imagen aportada (`foto perfil.jpg`, retrato de perfil B/N) en la sección **05 — Manifiesto** de la home, integrándola con el sistema visual ya existente (sin nuevas secciones, sin cambios tipográficos, sin alterar márgenes ni ritmo).

### 1. Subir la imagen como asset CDN
- Crear `src/assets/autor/perfil.asset.json` desde `/mnt/user-uploads/foto_perfil.jpg` con `lovable-assets`.
- No se copia el binario al repositorio.

### 2. Integrarla en la sección Manifiesto (`src/routes/index.tsx`, líneas 189–199)
Mantener exactamente la `<Section n="05" label="Manifiesto">` y su contenido. Añadir la imagen como un elemento sobrio, en blanco y negro, alineada al margen — tratada como un "gesto", no como un retrato corporativo.

**Composición propuesta (responsive, sin romper el ritmo vertical):**

- **Desktop (md+):** dos columnas dentro de la sección. La foto ocupa una columna estrecha (≈ 200–240 px de ancho, ratio vertical preservado del original), alineada arriba a la izquierda del bloque de texto del manifiesto. El texto mantiene su ancho actual (`max-w-2xl`) a la derecha.
- **Mobile:** la foto aparece **debajo** del título (`manifiesto.titulo`) y **encima** de los párrafos, con un ancho contenido (≈ 160 px), alineada al margen izquierdo. Nunca a pantalla completa.

**Tratamiento visual:**
- Sin marco, sin sombra, sin radio (coherente con el resto de la colección).
- `loading="lazy"`, `alt="Raúl Martínez Pardos"`.
- Sin pie de foto.
- La imagen ya es B/N, así que no requiere filtro.

### 3. Lo que NO se toca
- No se modifica `src/content/home.ts`.
- No se crean nuevas secciones ni se cambia la numeración (sigue siendo 05 — Manifiesto, 06 — Contacto).
- No se altera el `Header`, `Footer`, tipografía, tokens ni espaciados globales.
- No se añade la foto en ninguna otra página (proyectos Irremediables siguen sin retrato).

### Archivos afectados
- **Nuevo:** `src/assets/autor/perfil.asset.json`
- **Editado:** `src/routes/index.tsx` (sólo el bloque de la Section "Manifiesto")

### Resultado esperado
Al llegar al manifiesto, el visitante encuentra por primera vez al autor — de perfil, mirando hacia el texto — justo cuando la voz se vuelve personal. Sutil, alineado al sistema, fácil de revertir si no encaja.
