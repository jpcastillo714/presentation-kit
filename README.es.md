[English](README.md) · Español

# kit-presentaciones

Un kit para presentaciones científicas y de laboratorio que se arman a partir de **ejemplos reales y del contexto para
el que son**, no de un catálogo de plantillas. Escribes un guion de texto donde cada título es una conclusión; el
aspecto sale de un **perfil** (que se puede extraer de una presentación de referencia de tu laboratorio, facultad o
congreso); y el mismo guion produce una **presentación HTML** (con animaciones, vista del orador, archivo único sin
internet y PDF) y un **.pptx editable**.

Trae una **skill** para agentes de IA (formato de Claude Code, la puede leer cualquier agente) para pedirle a un
asistente que arme presentaciones con el kit, y dos ejemplos completos para dárselos a un modelo como referencia.

| Registro sobrio | Registro expresivo |
|---|---|
| `ejemplos/anscombe`: fondo claro, figuras fijas, una idea por diapositiva. El cuarteto de Anscombe (1973). | `ejemplos/exoplanetas`: perfil de cielo nocturno, figuras a pantalla completa, cinco escenas animadas. Cómo se descubren exoplanetas. |

Los dos ejemplos están en español y en inglés (`deck.html` / `deck.en.html`, con `.pdf`, `.pptx` y `.html` de un solo
archivo ya generados).

## Qué trae

```
kit-presentaciones/
├─ PRINCIPIOS.md / PRINCIPLES.md   15 principios con su evidencia, la regla de cuándo animar y una lista de revisión
├─ docs/es, docs/en                las fuentes: 26 gráficos y 34 charlas reconocidos, con enlaces y estado de verificación
├─ ejemplos/                       ejemplos con un «por qué funciona» en cada diapositiva (tecla E)
│  ├─ anscombe/                    registro sobrio
│  └─ exoplanetas/                 registro expresivo (escenas con motor/anim.js)
├─ perfiles/                       perfiles: colores, tipografías, logo, fondo, plantilla .pptx opcional
│  ├─ sobrio/                      por defecto: papel claro, un acento
│  └─ noche/                       cielo nocturno, acento ámbar
├─ motor/                          el motor (sin diseño propio)
│  ├─ kit.py                       todos los comandos
│  ├─ deck.css, deck.js            escenario 1920×1080, pasos, notas, vista del orador, impresión/PDF
│  ├─ anim.js                      librería de animación: escenas con un estado por paso
│  └─ figuras.py                   matplotlib con el estilo del perfil
└─ skill/kit-presentaciones/       la skill para agentes
```

## Instalación

Python 3.10 o superior y un navegador basado en Chromium (Chrome, Edge o Chromium) para los PDF y las capturas.

```bash
git clone https://github.com/jpcastillo714/kit-presentaciones.git
```

```bash
pip install -r kit-presentaciones/requirements.txt
```

Opcional: PowerPoint en Windows, solo para `renderizar` (pasar el `.pptx` a imágenes para revisarlo).

## Uso rápido

```bash
python motor/kit.py nueva mi_charla --perfil sobrio --titulo "Mi charla"
```

Escribe `mi_charla/guion.md` (una diapositiva por `## Conclusión como oración`; las claves están explicadas dentro del
archivo), haz tus figuras con `motor/figuras.py`, y luego:

```bash
python motor/kit.py construir mi_charla
```

```bash
python motor/kit.py revisar mi_charla/deck.html
```

```bash
python motor/kit.py pdf mi_charla/deck.html
```

| Comando (alias) | Qué hace |
|---|---|
| `nueva` (`new`) | Crea la carpeta con el motor, un perfil y un guion de partida |
| `construir` (`build`) | Guion → `deck.html` + `<nombre>.pptx`. `--guion guion.en.md` → `deck.en.html`, `<nombre>.en.pptx` |
| `revisar` (`review`) | Revisión mecánica: títulos que son rótulos, figuras sin fuente, exceso de texto, imágenes o animaciones que faltan |
| `capturas` (`shots`) | Una imagen por diapositiva (estado final), para revisarla con los ojos o que la revise un modelo |
| `estaticos` (`statics`) | Imagen final de cada animación, para el `.pptx` |
| `empaquetar` (`package`) | Un solo HTML que funciona sin internet |
| `pdf` | PDF con Chrome o Edge, una diapositiva por página, animaciones en su estado final |
| `perfil --desde ref.pptx --nombre lab` (`profile`) | Perfil desde una presentación de referencia: tema y colores realmente usados, tipografías, logos, fondo, plantilla |
| `perfil --regenerar <carpeta>` | Reescribe `perfil.css` y `figuras.mplstyle` después de editar `perfil.yml` |
| `renderizar` (`render`) | `.pptx` → PNG con PowerPoint (solo Windows) |

### El formato del guion (`guion.md`)

```markdown
---
titulo: Lo que la audiencia debe recordar
perfil: sobrio
transicion: fundido     # opcional: la única transición permitida
---

## Un solo punto atípico cambia la pendiente que reportamos
@figura figuras/panel_III.svg
@fuente Anscombe 1973
> Aquí van las notas del orador.
@porque Comentario de diseño que se ve en el modo estudio (E).
```

Claves: `@tipo portada|seccion|figura|dos|dato|texto`, `@figura`, `@fuente`, `@cifra`, `@anim`, `@pasos N`,
`@estatico`, `@subtitulo`, `@antetitulo`, `@clase completa`, `@anexo`, `@porque`. Las líneas con `- ` son viñetas, con
`> ` notas del orador; el resto, párrafos. Las claves en inglés también funcionan (`@figure`, `@source`, …).

### En la presentación HTML

→ / espacio / clic: avanzar (primero los pasos) · ←: retroceder · **N** notas · **P** vista del orador (notas,
siguiente diapositiva, reloj) · **B** pantalla negra · **F** pantalla completa · **E** modo estudio («por qué
funciona») · **M** animaciones sí/no · **?** ayuda.

Las animaciones se ven aunque el sistema pida reducir movimiento: esa preferencia es del computador de quien presenta,
no de la sala. Con `movimiento: respetar` en el guion se respeta.

## Con un agente de IA

La skill de `skill/kit-presentaciones/SKILL.md` le dice a un agente cómo trabajar con el kit (guion primero, perfil
según el contexto, figuras, animaciones solo con las cuatro condiciones, revisión con los ojos). Para Claude Code,
enlázala en tu carpeta de skills para que se mantenga al día con el repositorio:

```bash
ln -s "$(pwd)/kit-presentaciones/skill/kit-presentaciones" ~/.claude/skills/kit-presentaciones
```

En Windows (PowerShell), con una unión de carpetas:

```powershell
New-Item -ItemType Junction -Path "$HOME\.claude\skills\kit-presentaciones" -Target "$PWD\kit-presentaciones\skill\kit-presentaciones"
```

A otros agentes (Codex, Gemini, Cursor…) basta con pedirles que lean `skill/kit-presentaciones/SKILL.md` y
`ejemplos/README.md`. El método que inspiró el kit es justamente ese: darle al modelo presentaciones reales como
referencia.

## Adaptarlo a tu laboratorio

- **Tienes un .pptx del laboratorio o la facultad:** `python motor/kit.py perfil --desde lab.pptx --nombre lab`. Lee el
  tema, los colores que de verdad se usan en las diapositivas (las presentaciones generadas por código suelen dejar el
  tema de Office por defecto), logos e imágenes de fondo, y guarda el archivo como plantilla del `.pptx`. Lee los
  avisos que imprime.
- **La referencia es un PDF, una imagen o una página web:** copia `perfiles/sobrio`, edita `perfil.yml` mirando la
  referencia y corre `perfil --regenerar`.
- **Tipografías propias:** archivos `Familia-Peso.woff2` en `perfiles/<nombre>/fuentes/`; el HTML empaquetado las
  lleva adentro.
- **Una presentación que salió bien** es la mejor contribución: agrégala a `ejemplos/` con su `@porque` en cada
  diapositiva.

## Licencias

- Código (`motor/`, `skill/`, scripts de `ejemplos/*/figuras/` y `animaciones.js`): [MIT](LICENSE).
- Textos, catálogos, principios y presentaciones de ejemplo: [CC BY 4.0](LICENSE-docs.md).

Los catálogos describen y enlazan obras de terceros; no las reproducen. Las citas tienen menos de 15 palabras.

Autor: Juan Pablo Castillo Zepeda.
