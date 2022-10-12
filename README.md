# Proyecto Final para el curso 'REACT JS' de Coderhouse

> **Autor:** Javier Alejandro Corra

## Descripción del Proyecto

El proyecto consiste en armar una aplicacion de E-commerce.
Esta compuesto por un SPA (Single Page Application) en `React` para el frontend y servicios/datos modelados en `Firebase` para el backend.

Este proyecto fue inicializado con [Create React App](https://github.com/facebook/create-react-app).

## Temática

![Tienda Geek](src/assets/images/logo-tienda-geek.jpg)

La tematica elegida para el E-Commerce es el de una tienda de Comics, Manga, Figuras de Accion y Accesorios bajo el nombre de fantasía **"Tienda Geek"**.

## Enfoque

Al ser mi primer proyecto en `React` quiero probar diferentes cosas y formas de escribir el código, por lo cual cada entrega tendrá pequeñas diferencias donde iré explorando `React` y `JSX`, hasta llegar a la entrega final.

A pesar de que el CSS no se evaluará, para mi es super importante lo estético y espero poder probar uno o mas frameworks de CSS. Inicialmente se esta utilizando `bootstrap` porque es lo mas familiar y rápido.

Otra área que me interesa es la Accesibilidad, y a medida que me vaya sintiendo mas cómodo con `React` y `JSX` ire mejorandola. Por lo menos que el sitio se pueda navegar con teclado.

El orden, la prolijidad, la claridad del código y una documentación son elementos fundamentales en todo desarrollo escalable por lo que intentare -dentro del tiempo que disponga- de mantener esos standares para las entregas importantes.

## Features

1. Breadcrumbs para mejorar experiencia de navegación.
2. Control de stock utilizando `writeBatch`.
3. Registro/Login utilizando `Firebase Auth`.
4. Perfil de usuario básico con historial de compras.
5. Formularios y validaciones con `Formik`.
6. Rutas protegidas solo disponibles para usuarios logueados (`/mi-cuenta` y `/admin`).

## Justificación de Dependencias extras

* Se utiliza [React Bootstrap](https://react-bootstrap.github.io/) / [Bootstrap](https://getbootstrap.com/) como framework de CSS.

* Para la creación del componente de Breadcrumbs se instaló [use-react-router-breadcrumbs](https://github.com/icd2k3/use-react-router-breadcrumbs) debido a su compatibilidad con `react-route-dom`.

* Se implementó [dayjs](https://day.js.org/) para interpretar y formatear las fechas y horas devueltas por `Firebase`.

* Las descripciones de los productos contienen formato con html, como si hubiesen sido creados por un componente `RichText` en un CMS real (por ejemplo [Strapi](https://strapi.io/)). Por este motivo el front debe convertir esos strings en nodos del DOM antes de pasarselos a React, como también sanitizar su contenido para prevenir ataques XSS (Cross-site scripting). Para ello se instalaron las librerias [dompurify](https://www.npmjs.com/package/dompurify) y [html-react-parser](https://www.npmjs.com/package/html-react-parser).

* Se implementó [Formik](https://formik.org/) y [yup](https://github.com/jquense/yup) para la componentización y validación de todos los formularios.

* Los iconos de toda la aplicación pertenecen a [react-icons](https://react-icons.github.io/react-icons/)

## Comentarios de implementación

* __IMPORTANTE:__ La aplicación posee un "Panel de Administración" visible solo para usuarios marcados como ADMIN.
Este panel permite resetear el stock de todos los productos para facilitar las pruebas durante el desarrollo y corrección del proyecto. No se llegó a implementar un sistema de usuario con roles por lo que se facilita un usuario marcado como Administrador:
```txt
e-mail: admin@admin.com
pass: admin1234!
```

* La categoría "Accesorios" no contiene productos. Esto no es un error, es a propósito para ejemplificar y testear el caso de uso donde una categoría de productos se queda temporalmente sin productos dados de alta en el backend. Si a nivel negocio se prevee que dicha categoría no volverá a tener productos cargados, la categoría debería ser dada de baja y elmininada del menú.



## Instalación

Para instalar y correr el proyecto en modo desarollo se deberán ejecutar los siguientes comandos (en orden y en el root del proyecto):

1. `npm install`
2. `npm start`

Para mas información a continuación se describen los otros comandos disponibles.

## Scripts disponibles

En el directorio del proyecto se puede correr:

### `npm start`

Ejecuta la aplicación en modo desarrollo.\
Abrir [http://localhost:3000](http://localhost:3000) para visualizarla en el navegador.


### `npm run build`

Compila la aplicación en modo producción, y la deposita en la carpeta `build`.
