# MAC 2026 · Arte, ciencia y memoria

Recorrido digital de tres obras sobre Srinivasa Ramanujan, Alan Turing y
Pierre de Fermat. **Autor de las tres obras: Luis Berrospi.** Sitio estático en español, adaptable a móviles y publicado
con GitHub Pages.

| Obra | Dirección para el QR |
| --- | --- |
| Ramanujan · Un mundo en una esfera | https://lender512.github.io/mac-2026-obras/ramanujan/ |
| Turing · Lo que permanece | https://lender512.github.io/mac-2026-obras/turing/ |
| Fermat · El margen del tiempo | https://lender512.github.io/mac-2026-obras/fermat/ |

Portada: https://lender512.github.io/mac-2026-obras/

## Contenido y criterio editorial

Cada página incluye la obra ampliable, contexto biográfico, lectura de los
símbolos, cronología y enlaces a las fuentes consultadas. Fermat incorpora
un ejemplo interactivo para explorar exponentes con la terna (3, 4, 5).

- Ramanujan: India como origen de una formación en gran medida autodidacta;
  se recoge también su aprendizaje con libros y su colaboración en Cambridge.
- Turing: fragilidad de la vida y persistencia de la computación; el relato de
  la manzana envenenada se presenta como una hipótesis no confirmada.
- Fermat: la demostración general ausente y la búsqueda que terminó con el
  trabajo de Wiles y Taylor, corregido en 1994 y publicado en 1995. El texto
  latino de la imagen está identificado como recreación artística.

Los párrafos en cursiva de gran tamaño son interpretaciones de las obras,
no citas atribuidas a los científicos. Las fuentes están al pie de cada página.

## Edición y publicación

No requiere instalación de dependencias ni compilación. La portada está en
`index.html`; cada obra tiene su propio `index.html` en su carpeta. El diseño
y las interacciones están en `assets/site.css` y `assets/site.js`.

Para verlo localmente:

```sh
python3 -m http.server 8765
```

GitHub Pages publica la raíz de la rama `main`. Los cambios subidos a esa
rama actualizan el sitio. Mantén el nombre del repositorio y las carpetas
`ramanujan/`, `turing/` y `fermat/` para conservar las direcciones de los QR.

Las imágenes web proceden de los renders finales: Ramanujan 18, Turing 15 y
Fermat 19. Se incluyen versiones de 600 y 1600 píxeles de ancho para servir
la imagen adecuada a cada pantalla. Los originales de impresión se conservan
en el proyecto de Blender.

## Créditos de los recursos

Las obras son composiciones digitales realizadas para este proyecto. El mapa
de India utiliza contornos de [Natural Earth](https://www.naturalearthdata.com/about/terms-of-use/)
(dominio público). La manzana se basa en [3D Apple 003 de ambientCG / Lennart Demes](https://ambientcg.com/view?id=3DApple003),
un recurso [CC0](https://docs.ambientcg.com/license/) transformado para representar
el deterioro. El sitio utiliza las fuentes del sistema del visitante.

`publication.json` registra las direcciones de publicación y `sitemap.xml`
enumera las cuatro páginas principales.
