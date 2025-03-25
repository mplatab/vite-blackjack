# Blackjack Vite

Este proyecto es una implementación del juego de Blackjack utilizando JavaScript y Vite como herramienta de desarrollo. El objetivo del juego es alcanzar 21 puntos o acercarse lo más posible sin pasarse.

## Características

- Juego de Blackjack para un jugador contra la computadora.
- Interfaz gráfica simple utilizando HTML y CSS.
- Uso de módulos de JavaScript para organizar el código.
- Baraja de cartas generada dinámicamente.
- Lógica para determinar el ganador basada en las reglas del Blackjack.

## Tecnologías utilizadas

- **JavaScript**: Lenguaje principal para la lógica del juego.
- **Vite**: Herramienta de desarrollo para servir y construir el proyecto.
- **Underscore.js**: Biblioteca utilizada para funciones auxiliares como el shuffle de la baraja.
- **Bootstrap**: Framework CSS para estilos básicos.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd blackjack-vite
   ```

2. Instala las dependencias del proyecto:

   ```bash
   pnpm install
   ```

## Uso

### Modo de desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
pnpm dev
```

Esto abrirá el proyecto en tu navegador en `http://localhost:5173`.

### Construcción para producción

Para construir el proyecto para producción, ejecuta:

```bash
pnpm build
```

Los archivos generados estarán en la carpeta `dist`.

### Vista previa de producción

Para previsualizar la versión de producción, ejecuta:

```bash
pnpm preview
```

## Estructura del proyecto

- **`src/`**: Contiene el código fuente del proyecto.
  - **`blackjack/`**: Lógica principal del juego.
    - **`usecases/`**: Módulos reutilizables para las funcionalidades del juego.
  - **`style.css`**: Estilos personalizados del proyecto.
  - **`main.js`**: Punto de entrada principal del proyecto.
- **`index.html`**: Archivo HTML principal.
- **`pnpm-lock.yaml`**: Archivo de bloqueo de dependencias.
- **`package.json`**: Configuración del proyecto y dependencias.

## Cómo jugar

1. Haz clic en el botón **"Nuevo Juego"** para iniciar una nueva partida.
2. Usa el botón **"Pedir carta"** para obtener una carta adicional.
3. Usa el botón **"Detener"** para finalizar tu turno y permitir que la computadora juegue.
4. El ganador se determina automáticamente según las reglas del Blackjack.

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad o corrección de errores:

   ```bash
   git checkout -b nombre-de-tu-rama
   ```

3. Realiza tus cambios y haz un commit:

   ```bash
   git commit -m "Descripción de tus cambios"
   ```

4. Envía tus cambios al repositorio remoto:

   ```bash
   git push origin nombre-de-tu-rama
   ```

5. Abre un Pull Request en GitHub.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
