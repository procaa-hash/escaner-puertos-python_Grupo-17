# Rocelcode Innovations — Sitio Web

Sitio web corporativo para **Rocelcode Innovations**, empresa de software con sede en
Guayaquil, Ecuador, construido con HTML5, CSS3 moderno (variables, grid, glassmorphism,
`backdrop-filter`, `color-mix`) y JavaScript vanilla (sin frameworks ni dependencias).

## Contenido

- `index.html` — estructura del sitio (hero, servicios, misión/visión, proceso, proyectos,
  equipo, testimonios, contacto).
- `css/styles.css` — estilos, tema claro/oscuro, animaciones y diseño responsive.
- `js/script.js` — interactividad: toggle de tema persistente, menú móvil, scroll-reveal,
  contador animado, efecto de escritura en la terminal, canvas de red de nodos animada en
  el hero, slider de testimonios, y validación del formulario de contacto.

## Cómo verlo localmente

No requiere build ni instalación. Desde esta carpeta:

```bash
python3 -m http.server 8000
```

Y abre `http://localhost:8000` en el navegador.

## Nota sobre "Pedro Roca"

La sección **Equipo** presenta a *Pedro Roca* como Fundador &amp; CEO. No se encontró un
perfil público detallado y verificable de esta persona vinculado a Rocelcode al momento
de generar el sitio, por lo que la biografía usa una descripción genérica basada en la
visión y servicios públicos de la empresa. Reemplázala con los datos oficiales
(foto, biografía completa, redes) antes de publicar el sitio en producción.

## Personalización pendiente

- Reemplazar `contacto@rocelcode.com` y el número de WhatsApp por los datos reales.
- Enlazar el formulario de contacto (`js/script.js`, función `initContactForm`) a un
  backend o servicio real (actualmente simula el envío).
- Añadir enlaces reales a redes sociales en el footer y la sección de contacto.
- Sustituir las miniaturas de proyectos y biografía del equipo por contenido/imágenes reales.
