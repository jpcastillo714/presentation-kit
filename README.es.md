[English](README.md) · Español

# presentation-kit

Un kit para presentaciones científicas y de laboratorio que se arman a partir de **ejemplos reales y del contexto para
el que son**, no de un catálogo de plantillas. Escribes un guion de texto donde cada título es una conclusión; el
aspecto sale de un **perfil** (que se puede extraer de una presentación de referencia de tu laboratorio, facultad o
congreso); y el mismo guion produce una **presentación HTML** (animaciones, vista del orador, archivo único sin
internet, PDF) y un **.pptx editable**.

El mismo método hace también **figuras para una tesis o un paper**, **videos de demostración** de software grabados
desde el producto real y **guías de estudio interactivas**. Trae cuatro **skills** para agentes de IA, una por
trabajo (lo primero que hacen es preguntar qué quieres obtener), y ejemplos completos para dárselos a un modelo como
referencia.

| Registro sobrio | Registro expresivo |
|---|---|
| [`examples/anscombe`](examples/anscombe): fondo claro, figuras fijas, una idea por diapositiva. El cuarteto de Anscombe (1973). | [`examples/exoplanets`](examples/exoplanets): perfil de cielo nocturno, figuras a pantalla completa, cinco escenas animadas. Cómo se encuentran planetas que no se ven. |

Un tercer ejemplo, [`examples/software-demo`](examples/software-demo), muestra un panel en una charla: el video de
su diapositiva se graba desde la aplicación funcionando, con acercamiento y cursor donde ocurren los clics.

Cada carpeta de ejemplo trae la presentación como un solo `.html`, más su `.pdf` y su `.pptx`. Abre el `.html` en el
navegador y avanza con las flechas.

## Qué trae

```
presentation-kit/
├─ PRINCIPLES.md            15 principios con su evidencia, la regla de cuándo animar y una lista de revisión
├─ docs/                    las fuentes: 26 gráficos, 34 charlas y 20 demostraciones de software reconocidos,
│                           con enlaces y estado de verificación
├─ examples/                presentaciones con un «por qué funciona» en cada diapositiva (tecla E)
│  ├─ anscombe/             registro sobrio
│  ├─ exoplanets/           registro expresivo (escenas animadas)
│  ├─ software-demo/        una charla que muestra una interfaz: una aplicación real y su video grabado
│  └─ study-guide/          una guía de estudio interactiva: dos páginas, dos simuladores
├─ profiles/                el aspecto: colores, tipografías, logo, fondo, plantilla .pptx opcional
│  ├─ sober/                por defecto: papel claro, un acento
│  └─ night/                cielo nocturno, acento ámbar
├─ engine/                  el motor (sin diseño propio)
│  ├─ kit.py                todos los comandos
│  ├─ deck.css, deck.js     escenario 1920×1080, pasos, notas, vista del orador, impresión/PDF
│  ├─ anim.js               librería de animación: escenas con un estado por paso
│  ├─ demo.py               graba videos de demostración desde una aplicación web funcionando
│  ├─ guide.css, guide.js   guías de estudio: página de lectura, simuladores, predicciones, modo ejercicio
│  └─ figures.py            matplotlib con el estilo del perfil, a la medida de una diapositiva, una tesis o un paper
└─ skill/                   las skills para agentes: presentation-kit, science-figures, software-demo-video, study-guide
```

## Instalación

Python 3.10 o superior y un navegador basado en Chromium (Chrome, Edge o Chromium) para los PDF y las capturas.

```bash
git clone https://github.com/jpcastillo714/presentation-kit.git
```

```bash
pip install -r presentation-kit/requirements.txt
```

Opcional:

- PowerPoint en Windows, solo para `render` (pasar el `.pptx` a imágenes para revisarlo).
- Para los videos de demostración (`demo`): [ffmpeg](https://ffmpeg.org) en el PATH (o en `KIT_FFMPEG`).
  Playwright viene en `requirements.txt` y usa el navegador que ya tienes; no hace falta `playwright install`.

## Uso rápido

```bash
python engine/kit.py new mi_charla --profile sober --title "Mi charla" --lang es
```

Escribe `mi_charla/script.es.md` (una diapositiva por `## Conclusión como oración`; las claves están explicadas dentro
del archivo), haz tus figuras con `engine/figures.py`, y luego:

```bash
python engine/kit.py build mi_charla --script script.es.md
```

```bash
python engine/kit.py review mi_charla/deck.es.html
```

```bash
python engine/kit.py pdf mi_charla/deck.es.html
```

| Comando | Qué hace |
|---|---|
| `new` | Crea la carpeta con el motor, un perfil y un guion de partida |
| `build` | Guion → `deck.html` + `<nombre>.pptx`; con `--script script.es.md` → `deck.es.html`, `<nombre>.es.pptx` |
| `review` | Revisión mecánica: títulos que son rótulos, figuras sin fuente, exceso de texto, imágenes o animaciones que faltan |
| `shots` | Una imagen por diapositiva (estado final), para revisarla con los ojos o que la revise un modelo |
| `statics` | Imagen final de cada animación, para el `.pptx` |
| `package` | Un solo HTML que funciona sin internet |
| `pdf` | PDF con Chrome o Edge, una diapositiva por página, animaciones en su estado final |
| `profile --from ref.pptx --name lab` | Perfil desde una presentación de referencia: tema y colores realmente usados, tipografías, logos, fondo, plantilla |
| `profile --regenerate <carpeta>` | Reescribe `profile.css` y `figures.mplstyle` después de editar `profile.yml` |
| `render` | `.pptx` → PNG con PowerPoint (solo Windows) |
| `demo <carpeta>/demo.yml` | Video de demostración (MP4 + póster) grabado desde la aplicación real funcionando |
| `guide new <carpeta>` / `guide <carpeta>` | Guía de estudio interactiva: crea la carpeta y después arma las páginas y el mapa |

Los comandos y opciones también aceptan alias en español (`construir`, `revisar`, `--perfil`…).

### El formato del guion

```markdown
---
title: Lo que la audiencia debe recordar
profile: sober
lang: es
transition: fade        # opcional: la única transición permitida
---

## Un solo punto atípico cambia la pendiente que reportamos
@figure figures/panel_III.svg
@source Anscombe 1973
> Aquí van las notas del orador.
@why Comentario de diseño que se ve en el modo estudio (E).
```

Claves: `@type cover|section|figure|two|number|text`, `@figure`, `@source`, `@number`, `@anim`, `@steps N`,
`@static`, `@subtitle`, `@kicker`, `@class full`, `@video`, `@appendix`, `@why`. También se aceptan en español (`@figura`,
`@fuente`, `@cifra`, `@porque`…). Las líneas con `- ` son viñetas, con `> ` notas del orador; el resto, párrafos.

### Animaciones

Las animaciones van en el `animations.js` de cada presentación, con la librería del motor:

```js
window.animations.orbit = K.scene({
  mount(svg) { /* crea los elementos SVG una vez y los devuelve */ },
  states: [{ curve: 0 }, { curve: 1 }],      // un estado por paso (@steps 1)
  draw(g, state, level, t) { /* dibuja un estado */ },
  duration: 1200, loop: false,
});
```

La librería interpola al avanzar, salta al retroceder, dibuja el estado final en el PDF y cambia de idioma con
`K.t("english", "español")`. Ejemplo completo: [`examples/exoplanets/animations.js`](examples/exoplanets/animations.js).
Se anima solo cuando el contenido **es** un cambio (PRINCIPLES.es.md, «Cuándo animar»).

### Videos de demostración de software

Cuando una charla muestra una interfaz (un panel, un notebook, un chat con un modelo de lenguaje), `demo` graba la
tarea desde la **aplicación real funcionando**: anotas los pasos en un `demo.yml` (abrir, elegir, hacer clic,
escribir, esperar), Playwright los ejecuta en tu navegador y el video se compone con esas capturas, con la cámara
yendo adonde ocurre la acción, un cursor visible, un recuadro en el elemento que se usa y una franja de subtítulos.

```bash
python engine/kit.py demo examples/software-demo/demo.es.yml
```

Después, `@video figures/demo_residuals.es.mp4` en una diapositiva: se reproduce al abrirla. Una demostración de
algo que todavía no existe lleva `mockup: true`, que lo estampa en cada cuadro; las esperas de más de 1,5 s se
cortan y el subtítulo lo dice. Las reglas, y la evidencia detrás de cada una, están en
[`docs/software-demos.es.md`](docs/software-demos.es.md).

### Guías de estudio

`guide` arma material de estudio interactivo: una página HTML autocontenida por pregunta (doble clic, sin servidor
ni internet), cada una con la respuesta primero, simuladores que el lector mueve, preguntas de «predice y luego mira»
que bloquean el simulador en el modo ejercicio hasta que se responden, y preguntas para comprobar. Las páginas son
fragmentos HTML en `pages/` que usan una librería pequeña (`G.plot`, `G.bind`, `G.rng`); ver
[`examples/study-guide`](examples/study-guide).

```bash
python engine/kit.py guide new mi_guia --title "Por qué funciona promediar" --lang es
```

```bash
python engine/kit.py guide mi_guia
```

### Figuras para un documento

`engine/figures.py` ajusta la figura a dónde se va a leer: `use_profile(perfil, medium="thesis")` (15 cm, 10 pt),
`"paper"` (8,8 cm, una columna de revista; `width_cm=18` para dos) o `"slide"`, por defecto. Para una tesis o un
paper, `save` escribe además un PDF vectorial a ese tamaño exacto, con texto real, listo para
`\includegraphics[width=\textwidth]`.

### En la presentación HTML

→ / espacio / clic: avanzar (primero los pasos) · ←: retroceder · **N** notas · **P** vista del orador (notas,
siguiente diapositiva, reloj) · **B** pantalla negra · **F** pantalla completa · **E** modo estudio («por qué
funciona») · **M** animaciones sí/no · **V** pausa o reanuda un video de demostración · **?** ayuda.

Las animaciones se ven aunque el sistema pida reducir movimiento: esa preferencia es del computador de quien presenta,
no de la sala. Con `motion: respect` en el guion se respeta.

## Con un agente de IA

El kit trae cuatro **skills** (formato de Claude Code, las puede leer cualquier agente). Cada una cubre un trabajo y
carga solo lo que ese trabajo necesita: pedir una figura para la tesis no trae las instrucciones de diapositivas.

| Skill | Para | Lo primero que pregunta |
|---|---|---|
| [`presentation-kit`](skill/presentation-kit/SKILL.md) | presentaciones: diapositivas, una charla, una defensa, una reunión de laboratorio | qué quieres obtener (el discurso, el contenido, la presentación), HTML o .pptx, audiencia, la frase que deben recordar |
| [`science-figures`](skill/science-figures/SKILL.md) | una figura para una tesis, un paper, un informe o un póster | el mensaje, dónde se va a leer (define el tamaño en cm), idioma |
| [`software-demo-video`](skill/software-demo-video/SKILL.md) | un video de cómo se usa una aplicación o un panel, grabado desde el producto real | qué mostrar exactamente, si hay código que corre |
| [`study-guide`](skill/study-guide/SKILL.md) | material interactivo para aprender un tema o preparar un examen | qué deberías poder hacer después, qué te confunde, las fuentes |

Se llaman entre ellas cuando el trabajo lo pide: una presentación usa `science-figures` para sus figuras y
`software-demo-video` para una demostración. Para Claude Code, enlaza las que quieras en tu carpeta de skills para que
se mantengan al día con el repositorio:

```bash
for s in presentation-kit science-figures software-demo-video study-guide; do ln -s "$(pwd)/presentation-kit/skill/$s" ~/.claude/skills/$s; done
```

En Windows (PowerShell), con uniones de carpetas:

```powershell
foreach ($s in "presentation-kit","science-figures","software-demo-video","study-guide") { New-Item -ItemType Junction -Path "$HOME\.claude\skills\$s" -Target "$PWD\presentation-kit\skill\$s" }
```

A otros agentes (Codex, Gemini, Cursor…) basta con pedirles que lean el `SKILL.md` del trabajo y
`examples/README.md`. El método detrás del kit es justamente ese: darle al modelo ejemplos reales como referencia.

## Adaptarlo a tu laboratorio

- **Tienes un .pptx del laboratorio o la facultad:** `python engine/kit.py profile --from lab.pptx --name lab`. Lee el
  tema, los colores que de verdad se usan en las diapositivas (las presentaciones generadas por código suelen dejar el
  tema de Office por defecto), logos e imágenes de fondo, y guarda el archivo como plantilla del `.pptx`. Lee los
  avisos que imprime.
- **La referencia es un PDF, una imagen o una página web:** copia `profiles/sober`, edita `profile.yml` mirando la
  referencia y corre `profile --regenerate`.
- **Tipografías propias:** archivos `Familia-Peso.woff2` en `profiles/<nombre>/fonts/`; el HTML empaquetado las lleva
  adentro.
- **Una presentación que salió bien** es la mejor contribución: agrégala a `examples/` con su `@why` en cada
  diapositiva.

## Licencias

- Código (`engine/`, `skill/`, `examples/*/figures/*.py`, `examples/*/animations.js`): [MIT](LICENSE).
- Textos, catálogos, principios y presentaciones de ejemplo: [CC BY 4.0](LICENSE-docs.md).

Los catálogos describen y enlazan obras de terceros; no las reproducen. Las citas tienen menos de 15 palabras.

Autor: Juan Pablo Castillo Zepeda.
