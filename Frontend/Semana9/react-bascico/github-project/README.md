# ReactJS

Es una biblioteca de JavaScript para construir interfaces de usuario

## Como crear un Proyecto

```bash
npx create-react-app Nombre del proyecto
```

Se levanta el proyecto

```bash
npm start
```

## CLonando un proyecto

Cuando se clona un proyecto de ReactJS, se debe ejecutarl lo siguiente

```bash
npm install
```

## Reglas

1. Todo componente debe ser una funcion
2. Todo componente debe empezar con Mayuscula

```js
function MyCard() {
  return <div>My Card</div>;
}
```

- Todo componente debe retornar un solo elemento padre

```js
function MyCard() {
  return (
    <div>
      <h1>Titulo</h1>
      <p>Parrafo</p>
      <div>
        <p>Parrafo Hijo</p>
        <div>
          <p>Parrafo Nieto</p>
        </div>
      </div>
    </div>
  );
}
```

- Nota: Dentro de mi componente puede mas funciones y esas ya no llevan mayuscula
- Eventos: Los nombre de los eventos en React son camelCase
  - onclick -> onClick
  - onchange -> onChange
  - onsubmit -> onSubmit

```js
function MyCard() {
  function mostrarMensaje() {
    console.log("hola mundo");
  }
  return (
    <div>
      <h1>Tituli</h1>
      <button onClick={mostrarMensaje}>Mostrar mensaje</button>
    </div>
  );
}
```

## useState

En react para poder almacenar un valor en una variable
usamos hook llamado useState
useState es una funcion de react la cual nos permite
poder manejar el estado de una variable

**Siempre los import de react van en la primera linea**

```js
import { useState } from "react";

function App() {
  const { nombre, setNombre } = useState("juan");
  return (
    <div>
      <p>Nombre {nombre}</p>
      <button onClick={() => setNombre("pepe")}>Cambiar nombre</button>
    </div>
  );
}
```

## onChange para inputs

- En react para poder manejar el valor de input usamos el evento onChange este va permitir captar cada vez que el usuario escriba en el

```js
function App() {
  const { nombre, setNombre } = useState("juan");
  return (
    <div>
      <p>Nombre {nombre}</p>
      <button onClick={() => setNombre("pepe")}>Cambiar nombre</button>
    </div>
  );
```

## Sweet Alert

Es una libreia que nos permite mostrar alertas en nuestra aplicacion

### Instalacion

```bash
npm install sweetalert
```

### Como se usa

```js
import Swal from "sweetalert2";

Swal.fire("Titulo", "Mensaje", "Tipo");
```

Tenemos 5 tipos

- error
- info
- question
- success
- warning

## Limpiando proyecto

Cuando usamos el comando npx create-react-app se crear proyectos incesesarios

Lista de ellos

- setupTest.js
- reportWebVitals.js
- logo.svg
- App.test.js
- public/logo192.png
- public/logo512.png

Tenemos que tener cuidado luego de borrar estos
