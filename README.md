# 🐍 Snake JS - Proyecto JS Client-Side (2º DAW)

¡Bienvenido al repositorio del clásico juego **Snake**! Este proyecto ha sido desarrollado como práctica académica durante el segundo curso del ciclo formativo de **Desarrollo de Aplicaciones Web (2º DAW)**.

El objetivo principal de este proyecto es demostrar el uso de **JavaScript Vanilla** para la manipulación del DOM, gestión de eventos de teclado, temporizadores de ejecución periódica y lógica de estado de juego sin el uso de librerías o frameworks externos.

---

## 🚀 Características

- **Tres Niveles de Dificultad**:
  - 🟢 **Fácil**: Velocidad reducida (700ms/tick). Ideal para familiarizarse con los controles.
  - 🟡 **Intermedio**: Velocidad media (400ms/tick).
  - 🔴 **Avanzado**: Velocidad rápida (100ms/tick). Un reto de reflejos.
- **Sistema de Pausa**: Permite pausar y reanudar la partida en cualquier momento mediante la tecla `Escape`.
- **Generación Dinámica de Comida**: Apariencia de manzanas rojas en posiciones aleatorias del tablero que no interfieren con la propia serpiente.
- **Control de Colisiones**: Detección implícita de choque con los bordes del tablero o automordedura.

---

## 🎮 Controles del Juego

| Acción | Teclas |
| :--- | :--- |
| **Mover Arriba** | Flecha Arriba (`↑`) / `W` |
| **Mover Abajo** | Flecha Abajo (`↓`) / `S` |
| **Mover Izquierda** | Flecha Izquierda (`←`) / `A` |
| **Mover Derecha** | Flecha Derecha (`→`) / `D` |
| **Pausar / Menú** | `Escape` |

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructuración semántica de la interfaz y tablero mediante elementos matriciales de tabla.
- **CSS3**: Estilos personalizados, gradientes (`linear-gradient`) y diseño mediante Flexbox.
- **JavaScript (ES6)**:
  - Manejo de Eventos (`addEventListener`).
  - Lógica de orientación y estado mediante POO (constructores).
  - Control de intervalos asíncronos (`setInterval`, `clearInterval`).
  - Manipulación dinámica de estilos en el DOM.

---

## 📂 Estructura del Proyecto

```text
├── index.html   # Estructura principal y pantallas del juego (Menú, Tablero, Pausa)
├── style.css    # Estilos globales y botones
└── snake.js     # Lógica principal del juego y control de flujo
```

---

## 🖥️ Cómo Ejecutar el Proyecto

1. **Clona o descarga el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/snake-js.gits
   ```
2. **Abre el proyecto**:
   No se requiere instalación de dependencias ni servidores Node.js. Simplemente abre el archivo `index.html` en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari).

---

## 🎓 Aprendizajes y Conceptos de DAW Aplicados

- **Manipulación de DOM Nativa**: Cambios dinámicos en el árbol DOM mediante identificadores matriciales (`00` a `99`).
- **Prevención de Cambio del Sentido Opuesto**: Lógica implementada para evitar que la serpiente retroceda hacia su propio cuerpo accidentalmente.
- **Temporización Asíncrona**: Uso eficiente de bucles basados en tiempo con `setInterval` para gestionar tanto la velocidad del juego como el tiempo de aparición de la comida.

---

✍️ **Autor**: Fernando Gisbert Micó
