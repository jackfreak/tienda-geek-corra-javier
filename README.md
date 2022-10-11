# Proyecto Final para el curso 'REACT JS' de Coderhouse

> **Autor:** Javier Alejandro Corra

## Descripción del Proyecto

El proyecto consiste en armar una aplicacion de E-commerce.
Esta compuesto por un SPA (Single Page Application) para el frontend y servicios/datos modelados en FIREBASE para el backend.

Este proyecto fue inicializado con [Create React App](https://github.com/facebook/create-react-app).

## Temática

![Tienda Geek](src/assets/images/logo-tienda-geek.jpg)

La tematica elegida para el E-Commerce es el de una tienda de Comics, Manga, Figuras de Accion y Accesorios bajo el nombre de fantasía **"Tienda Geek"**.

## Enfoque

Al ser mi primer proyecto en React quiero probar diferentes cosas y formas de escribir el código, por lo cual cada entrega tendra pequeñas diferencias donde iré explorando React y JSX.

A pesar de que el CSS no se evaluará, para mi es super importante lo estético y espero poder probar uno o mas frameworks de CSS. Inicialmente se esta utilizando react-bootstrap porque es lo mas familiar y rápido. Cabe destacar que se esta implementando bootstrap de forma modular con SASS, acompañado de otros archivos SASS conteniendo partials, mixins y variables especificos del proyecto.

También es de mi interés probar otros frameworks mas complejos como MUI o Chakra UI, dependiendo del tiempo que posea para investigarlos e implementarlos correctamente.

Otra área que me interesa es la Accesibilidad, y a medida que me vaya sintiendo mas cómodo con React y JSX ire mejorandola.

El orden, la prolijidad, la claridad del código y una documentación son elementos fundamentales en todo desarrollo escalable por lo que intentare -dentro del tiempo qe disponga- de mantener esos standares para las entregas importantes.

## Comentarios

- La categoria "accesorios" no contiene productos. Esto no es un error, es a propósito para ejemplificar y testear el caso de uso donde una categoria de productos se queda temporalmente sin productos dados de alta en el backend. Si a nivel negocio se prevee que dicha categoría no volverá a tener productos cargados, la categoría debería ser dada de baja y elmininada del menú.

## Nuevas Dependencias

-   [React Bootstrap](https://react-bootstrap.github.io/)
-   [use-react-router-breadcrumbs](https://github.com/icd2k3/use-react-router-breadcrumbs)

## Instalación

Para instalar y correr el proyecto en modo desarollo se deberán ejecutar los siguientes comandos (en orden y en el root del proyecto):

1. `npm install`
2. `npm start`

Para mas información a continuación se describen los otros comandos disponibles.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
