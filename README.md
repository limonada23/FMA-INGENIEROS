# FMA Ingenieros

Sitio web corporativo de FMA Ingenieros, empresa peruana especializada en consultoría y ejecución de proyectos de ingeniería para sectores corporativos, industriales y comerciales.

Sitio publicado en producción:

- https://www.fmaingenieros.com

## Descripción

Este repositorio contiene el frontend estático del sitio institucional de FMA Ingenieros. Incluye la página principal, páginas de servicios, página de contacto, recursos visuales y archivos de soporte para SEO e indexación.

Las URLs públicas están configuradas sin la extensión `.html`, manteniendo una navegación limpia mediante reglas de reescritura en el servidor.

## Tecnologías

- HTML5
- CSS3
- JavaScript vanilla
- Apache `.htaccess` para URLs limpias

## Estructura del proyecto

```text
.
|- index.html
|- acerca-de.html
|- contacto.html
|- contra-incendio.html
|- instalaciones-electricas.html
|- seguridad-electronica.html
|- redes.html
|- obras.html
|- mantenimiento.html
|- sistemas-especiales.html
|- styles-base.css
|- styles-home.css
|- styles-about.css
|- styles-contact.css
|- styles-services.css
|- script.js
|- robots.txt
|- sitemap.xml
|- .htaccess
`- img/
```

## Páginas incluidas

- Inicio
- Nosotros
- Contacto
- Sistemas contra incendios
- Instalaciones eléctricas
- Seguridad electrónica
- Redes y comunicaciones
- Obras civiles
- Mantenimiento general
- Sistemas especiales

## Ejecución local

Como el proyecto usa rutas limpias con `.htaccess`, lo ideal es probarlo en un servidor Apache local.

Opciones recomendadas:

1. Usar XAMPP, Laragon o WAMP y servir la carpeta del proyecto con Apache.
2. Si solo necesitas revisar maquetación, puedes abrir `index.html` directamente en el navegador, aunque las reglas de reescritura no se aplicarán igual que en producción.

## SEO y publicación

El proyecto incluye:

- Metadatos SEO por página
- Open Graph para compartir en redes
- `robots.txt`
- `sitemap.xml`
- Etiquetas canónicas

La versión productiva actualmente se encuentra publicada en:

- https://www.fmaingenieros.com

## Mantenimiento

Si se agregan nuevas páginas o servicios, conviene actualizar también:

- La navegación principal
- `sitemap.xml`
- `robots.txt` si aplica
- Metadatos SEO de la nueva página
- Enlaces internos y llamadas a la acción

## Autor

Desarrollo web: delpierodev
