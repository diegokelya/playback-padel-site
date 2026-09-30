# PlayBack Padel — sitio público

Landing bilingüe (español / inglés) de PlayBack Padel: https://diegokelya.github.io/playback-padel-site/

Este repositorio contiene solo los archivos públicos del sitio. El código de la app vive en otro repositorio.

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | Página única, con metadatos para buscadores y redes (Open Graph). |
| `app.js` | Textos en español e inglés. Elige el idioma por `?lang=es|en`, después la última elección guardada y después el idioma del navegador. |
| `styles.css` | Estilos, sin dependencias externas. |
| `support/` | Soporte (`index.html` en español, `en.html` en inglés). Es la URL de soporte de App Store Connect. |
| `privacy/` | Política de privacidad (`index.html` / `en.html`). Es la URL de privacidad de App Store Connect. |
| `legal.css` | Estilos de soporte y privacidad, sobre `styles.css`. |
| `404.html` | Página de error de GitHub Pages. |
| `sitemap.xml` | Para cargar en Google Search Console. |
| `assets/` | Logo optimizado (PNG/WebP 128 px), ícono para iPhone y tarjeta para redes de 1200×630. `playback-padel-logo.png` es el original en alta y no se publica. |

## Publicación

Cada push a `main` corre `.github/workflows/pages.yml`, que copia solo los archivos públicos a `_site/`, verifica que no falte ningún recurso y publica en GitHub Pages. Si se agrega un archivo nuevo, hay que sumarlo al paso *Build _site*. Las páginas de soporte y privacidad reemplazan al repo `padel-replay-support`.

## Seguridad

- CSP en `<meta>` (Pages no permite headers): solo recursos propios, sin scripts ni estilos inline y sin formularios.
- Sin recolección de datos: no hay formularios, cookies ni analíticas. `localStorage` guarda solo el idioma elegido.
- Actions fijadas por SHA y actualizadas con Dependabot.

## Pendiente

- Cuando la app esté en la App Store: reemplazar "Próximamente" por el badge oficial y el link.
- Si se quiere una lista de espera real, conectar un servicio (Buttondown, Google Forms) y agregarlo a la política de privacidad.
