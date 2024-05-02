## MyDayApp - JavaScript

MyDayApp es una aplicación para gestionar tareas de forma sencilla y fácil.
[Visit here](https://nicknamed19.github.io/My-day-app/)

![preview](https://i.imgur.com/et5mmr7.png)

# Aplicación de gestión de "todos"

Esta es una aplicación simple de gestión de "todos" creada con JavaScript.

## Características principales

- **Crear todos:** Puedes crear nuevos "todos" ingresando texto en el campo de entrada y presionando la tecla Enter.
- **Marcar como completado:** Puedes marcar un "todo" como completado haciendo clic en el botón de marca de verificación junto a él.
- **Editar todos:** Para editar un "todo", simplemente haz doble clic en él y podrás editar el texto. Presiona Enter para guardar los cambios o Esc para cancelar.
- **Eliminar todos:** Puedes eliminar un "todo" haciendo clic en el botón de eliminar junto a él.
- **Filtrado de todos:** Hay cuatro botones de filtro:
  - Mostrar todos: Muestra todos los "todos".
  - Mostrar pendientes: Muestra solo los "todos" que están pendientes.
  - Mostrar completados: Muestra solo los "todos" que han sido completados.
  - Eliminar completados: Elimina todos los "todos" que han sido marcados como completados.

## Persistencia de datos

Los "todos" se almacenan localmente en el navegador utilizando `localStorage`, por lo que tus "todos" se guardarán incluso si cierras la ventana del navegador.

## Rutas para filtros

La aplicación utiliza rutas hash para los filtros, lo que significa que puedes acceder a los filtros directamente desde la barra de direcciones del navegador. Las rutas son las siguientes:
- `/#/` Muestra todos los "todos".
- `/#/pending` Muestra solo los "todos" pendientes.
- `/#/completed` Muestra solo los "todos" completados.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript

## ¿Cómo usar?

1. Clona este repositorio o descarga los archivos.
2. Abre `index.html` en tu navegador web.
3. Empieza a gestionar tus "todos".

¡Disfruta de tu aplicación de gestión de "todos"!
