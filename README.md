# Física Básica — Guía de publicación gratuita

Página web estática (HTML + CSS + JS) sobre los temas básicos de la física.
No necesita servidor, base de datos ni compilación.

## Contenido del sitio

- `index.html` — página principal
- `styles.css` — estilos (tema formal claro/oscuro)
- `script.js` — tema y calculadora de fórmulas
- `img/` — ilustraciones SVG (respaldo si falla la conexión)

Las fotos reales están **descargadas localmente** en `img/` (no dependen de internet).

## Fuentes de las fotografías (Wikimedia Commons)

| Archivo local | Archivo en Wikimedia Commons |
|---|---|
| `img/foto-portada.jpg` | Laser experiment - Photonics Laboratory (Ateneo de Manila University) |
| `img/foto-cinematica.jpg` | Sports Cars in Low Bradfield (geograph.org.uk) |
| `img/foto-dinamica.gif` | Newton's - Balls.gif |
| `img/foto-energia.jpg` | Roller coaster tracks veegaland |
| `img/foto-termodinamica.jpg` | Termômetros - mercúrio e infravervelho |
| `img/foto-ondas.jpg` | 2006-01-14 Surface waves |
| `img/foto-electricidad.jpg` | Electronic components in Printed Circuit Board |

Contenido de uso libre (licencias CC / dominio público según cada archivo).

---

## Opción 1: Netlify Drop (recomendado, muy fácil)

1. Entra a **https://app.netlify.com/drop**
2. Arrastra el archivo **`fisica-basica-web.zip`** (o la carpeta del sitio) a la zona indicada.
3. En segundos obtienes una URL pública, por ejemplo `https://nombre-aleatorio.netlify.app`
4. Inicia sesión (gratis) para **conservar** el sitio de forma permanente.
5. Opcional: en *Site settings → Change site name* puedes cambiar el nombre por
   algo como `fisica-basica-tunombre`.

> Cada vez que quieras actualizar, vuelve a arrastrar el ZIP en la sección *Deploys*.

---

## Opción 2: GitHub Pages

```powershell
git init
git add .
git commit -m "Sitio de física básica"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/fisica-basica.git
git push -u origin main
```

Luego, en GitHub: **Settings → Pages → Source: "Deploy from a branch" → main / (root) → Save**.
Tu sitio quedará en `https://TU-USUARIO.github.io/fisica-basica/`.

---

## Opción 3: Cloudflare Pages

1. Entra a **https://pages.cloudflare.com**
2. *Create a project → Direct Upload*
3. Sube el ZIP o la carpeta del sitio.

---

## Notas

- El nombre del archivo debe ser `index.html` (ya lo es) para que abra en la raíz.
- Las rutas son relativas (`styles.css`, `img/...`), así que funcionan en cualquier hosting.
