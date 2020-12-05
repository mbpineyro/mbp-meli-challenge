# Repositorio Challenge MELI 2020 Front-End Test Práctico

## Introducción

Proyecto creado con el siguiente stack tecnológico:

● Cliente:
○ HTML
○ JS (React Versión 17.0.1)
○ CSS (Sass Versión 4.14.1)

● Servidor:
○ Node >= 6 (Versión 14.15.1)
○ Express

### Configuración Inicial
Instalar dependencias, desde la raíz del proyecto:

```
npm i
```

### Inicializando servidores
Ejecutar la siguiente sentencia para inicializar ambos servicios (front-backend) desde el nivel de la carpeta Backend:

```
npm run project
```

### Parte Cliente-Servidor
Realizado con React, utilizando el paquete create-react-app. Para la parte del backend, se utilizó Node.Js en conjunto con express.

### Requerimientos funcionales
● En base a los diseños dados, construir las siguientes tres vistas:
○ Caja de búsqueda
○ Resultados de la búsqueda
○ Detalle del producto

● Las vistas son navegables de manera independiente y cuentan con su propia url:
○ Caja de Búsqueda: ​“/”
○ Resultados de la búsqueda: ​“/items?search=”
○ Detalle del producto: ​“/items/:id”

● Construir los endpoints para ser utilizados desde las vistas.

● En la vista de caja de búsqueda, debería poder ingresar el producto a buscar y al enviar el
formulario navegar a la vista de Resultados de búsqueda, visualizando solo 4 productos. Luego,
al hacer click sobre uno de ellos, debería navegar a la vista de Detalle de Producto.
● Dado un id de producto, debería poder ingresar directamente a la vista de detalle de producto.
