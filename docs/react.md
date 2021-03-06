# React JS
<a id="header"></a>

1. [Estructura de archivos](#section-1)
    - Notas en algunos archivos
1. [Definiciones](#section-2)
1. [Elementos](#section-3)
    - useState
    - useEffect
    - useLayoutEffect
    - useRef
    - memo
    - useMemo
    - useCallback
    - useReducer
    - Context API
    - Otros Hooks
    - React Router
    - Estilos en componentes
1. [Buenas prácticas, convenciones y complementos](#section-4)
    - Snippets

[Home]

<a id="section-1"></a>

## Estructura de archivos

Estructura por defecto:

```
react-project/
|
|— .gitignore               // archivos no deseados en el repositorio
|— package.json             // configuración general del proyecto, dependencias, scripts, versiones
|— README.md                // acerca de la aplicación, comandos importantes, cosas relevantes, correcto uso, etc.
|— yarn.lock                // dependencias (package-lock.json)
|
|— node_modules/
|
|— public/
|   |
|   |— favicon.ico
|   |— index.html           // HTML base del sitio
|   |— logo192.png          // PWAs
|   |— logo512.png          // PWAs
|   |— manifest.json        // configuración básica de PWA
|   |— robots.txt           // buscadores de google
|
|— src/
    |
    |— App.css              // estilos del componente App
    |— App.js               // componente principal
    |— App.test.js          // para hacer testeos
    |— index.css            // estilos globales
    |— index.js             // cargar, importar lo principal de React (estilos, componentes, ...). Punto inicial de la App
    |— logo.svg
    |— reportWebVitals.js
    |— serviceWorker.js     // PWAs
    |— setupTests.js        // Primero en el testeo
```

Estructura por defecto con [TypeScript]:

```
react-project/
|
|— .gitignore               // archivos no deseados en el repositorio
|— package.json             // configuración general del proyecto, dependencias, scripts, versiones
|— README.md                // acerca de la aplicación, comandos importantes, cosas relevantes, correcto uso, etc.
|— tsconfig.json            //
|— yarn.lock                // dependencias (package-lock.json)
|
|— node_modules/
|
|— public/
|   |
|   |— favicon.ico
|   |— index.html           // HTML base del sitio
|   |— logo192.png
|   |— logo512.png
|   |— manifest.json        // configuración básica de PWA
|   |— robots.txt
|
|— src/
    |
    |— App.css              // estilos del componente principal
    |— App.test.tsx         // para hacer testeos
    |— App.tsx              // componente principal
    |— index.css
    |— index.tsx            // cargar, importar lo principal de React (estilos, componentes, ...)
    |— logo.svg
    |— react-app-env.d.ts   // archivo de definición
    |— reportWebVitals.ts
    |— setupTests.ts
```

Archivos extras en la raíz:

```
react-project/
|
|— .editorconfig	// configuración del editor de texto
```

Estructura dentro de `src/`:

```
src/
|
|— assets/
|   |
|   |— css/         // App.css, index.css
|   |— images/      // logo.svg
|
|— auth/            // Context y hook de autenticación
|— components/
|— consts/          // Almacenar constantes
|— contexts/        // Contextos
|— helpers/         // Llamadas a las APIs
|— hooks/           // Hooks personalizados
|— pages/           // Páginas
|— reducers/        // Reducers
|— routers/         // Rutas
|— store/           // Fuente única de información o estado global: context + reducer
|
|— types.js         // Definiciones de variables
```

- [Estructura de archivos](https://es.reactjs.org/docs/faq-structure.html) de React.
- [Structuring projects and naming components in React](https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76) de Hackernoon.

### Notas en algunos archivos

- `index.html`:

```html
<!-- Variable del directorio de public/ -->
%PUBLIC_URL%

<!-- Task manager de Android - PWA -->
<meta name="theme-color" content="#000000" />

<!-- PWAas -->
<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

<!-- Si JS no está habilitado -->
<noscript>You need to enable JavaScript to run this app.</noscript>
```

[Top]

<a id="section-2"></a>

## Definiciones

- Componentes: son funciones. Pequeña pieza de código encapsulada re-utilizable que puede tener **estado** o no.
- **Estado**: cómo se muestra la información en un momento determinado del tiempo
- Componentes de **Clase** y **Funcionales** (Recomendado, más fáciles y mejor comportamiento).
- **Functional Componentes** (Antes SFC: *Stateless functional components*)
- Las etiquetas jsx son realmente objetos.
- `return` sólo puede devolver un objeto a la vez.
- Al separar el return en una línea independiente, **babel** lo interpreta como una sentencia, colocándole su `;` al final.
- `<Fragment></Fragment>` { Fragment } ó
- Etiqueta vacía: `<></>`
- { Expresiones JS que devuelven algún valor }
- Valores que no imprime: Booleanos, undefined, Objetos no los acepta, Arrays los imprime uno a continuación de otro.
- Para objetos: `JSON.stringfy(objeto, null, 4)` dentro de un `<pre>`
- Properties: **props** es un objeto.
- Synthetic events: `onClick={ function }`
- Ciclo de vida de un componente:
	1. Primer render o carga.
	1. Cambio de estado. (Se desmonta)
	1. Nuevo render
- Renderización de un componente:
	1. Pre-render: lo que está fuera de la definición del componente, se ejecuta sólo una vez.
	1. Render: la definición del componente, se ejecuta en cada cambio de estado.
	1. Primero la renderización en pantalla.
	1. Después se ejecutan las actualizaciones de estado.
- Procesos pesados que se desean ejecutar sólo una vez, NO es conveniente colocarlo en el pre-render.
- El pre-render se ejecuta así no se cargue el componente.
- Primer render: Render - useEffects
- Siguientes render: Render - Cleanups - useEffects
- Variables de React (Variables persistentes):
	- **Estados**: al cambiar generan una nueva renderización.
	- **Referencias mutables**: al cambiar NO generan una nueva renderización.
- React lee varias veces un componente antes de lanzar el render final. Por ello es mejor no incluir nada de lógica en el cuerpo del componente, mejor colocarlo en los hooks o en funciones específicas.
- **Hooks**: funciones que almacenan e interactúan con **estados**. No devuelve <del>JSX</del>. Devuleve **estados** y **funciones**.
- **Custom hooks**:
	- Se cargan como si fueran estados y funciones del componente que use el custom hook.
	- Separan la lógica de estado y permite reutilizarla en otras partes del código.
	- Son anidables.
	- Son independientes en cada componente.
- **Layout/Wrapper components**: componentes con componentes hijos, almacenados en la prop **children** (ya incluida en cualquier componente)
- **Pure function**: opera utilizando sólo los parámetros de entrada sin recurrir o afectar a ningún otro elemento fuera de ellas.
	1. Dado unos parámetros de entrada de idéntico valor, la función siempre devolverá el mismo resultado. (No número aleatorios)
	1. El cómputo de la función, su lógica, no implica ningún efecto observable colateral fuera de ella. (No alterar DOM, no mutar variables externas, ni agregar eventos)
- **HOC** High Order Component: Componente que devuelve otro componente.

[Top]

<a id="section-3"></a>

## Elementos

```jsx
import React 	from 'react';		// Permite usar JSX. Ya no es necesario en las últimas versiones de create-react-app
import ReactDOM from 'react-dom';   // Permite insertar los elementos en el DOM

ReactDOM.render(Component, Selector);
```

Especificar el tipo y las props requeridas

```js
import Proptypes from 'prop-types';

const MyComponent = () => {}

MyComponent.propTypes = {
  propName: Proptypes.string.isRequired,
}
```

Valores por defecto

```js
// Nativa de JS
// Si no se pasa algún valor, React no lo reconoce como una prop
({ prop = 'Value' })

// Siempre se la reconoce como una prop
MyComponent.defaultProps = {
  prop: '',
}
```

- No se pueden usar hooks dentro de condicionales.

### useState

- Recibe un estado inicial y devuelve un array con el estado en sí mismo y una función para actualizar el estado.
- Usos: contadores, condiciones, manejo de errores, productos, etc.
- `setState` es asíncrono, para solucionar actualizaciones seguidas:

```jsx
setState(prevState => { /* Operaciones con prevState */ });
```

```js
setCounter(counter + 1);   // ó
setCounter((c) => c + 1);
```

### useEffect

- Ejecuta una función al menos una vez y cuando cambien alguna de sus dependencias (estados) después del renderizado:
	- **Sin dependencias**, se ejecutará cada vez que haya algún cambio en el render (estados).
	- **Arreglo vacío**, se ejecutará sólo en la primera carga del componente.
	- **Con dependencias**, se ejecuta la primera vez y cada vez que cambie alguna dependencia.
- Usos: pedido inicial a una API, listeners globales, etc.
- Las llamadas a funciones dentro del `effect` deben ir como dependencias, ya que son propensas a cambiar en un futuro.
- Las funciones se vuelven a escribir en cada render, entonces si va como dependencia, en cada render se volverá a ejecutar el `effect` (Ocacionando problemas de rendimiento).
- `return` se ejecuta al desmontar el componente (**Cleanup**).
- Remover los **listeners** al desmontar los componentes para evitar sobrecargar la memoria con muchos listeners almacenados y asociados a componentes inexistentes.
- Se ejecutan en orden a como están en el código.

### useLayoutEffect

<https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect>

- Ejecutar acciones después de terminados los renderizados.
- Pero antes de la visualización, en cambio useEffect después de la visualización.

### useRef

- Permite interactuar con el DOM real directamente.
- `Referencia mutable` variable cuyo valor será persistente a lo largo de los renders, cuando cambie de valor no causará renderización.
- No usarlo para modificar valores relacionados a estados, ya que no pasan por el DOM de React.
- Para hacer uso de funciones o eventos del DOM que no se pueden usar con React: `.focus()`, `.select()`, `.play()`, `.pause()`, etc. (Aunque es más común usar JS directamente.)
- Para usarlo como una variable contadora a lo largo de todos los renders.
- Para verificar si un componente está montado o no, y evitar errores al conectarse a una API.

```jsx
// elementRef (convención)
const inputRef = useRef();
// equivalente a getElementById
<input ref={inputRef}>
// se guardará en inputRef.current
```

```jsx
// valor inicial de la variable
const counterRef = useRef(0);
counterRef.current++;
```

### memo

- Permite memorizar un componente por sus properties, evitando que vuelva a renderizarse si no han cambiado las properties.
- Al actualizar un componente, también se actualizan sus componentes anidados, la mayoría de veces se deja este comportamiento por defecto.
- La memorización puede ser un proceso más pesado que volver a renderizar el componente.
- En general, **no usarlo**.
- Usarlo cuando la renderización se pone lenta, como en listas muy largas, en peticiones a APIs que tienen algún costo por petición, etc.

### useMemo

- Almacena el valor que retorna una función, para crear propiedades computadas.
- Usarlo sólo si el renderizado se vuelve muy lento con gran cantidad de información.
- Por ejemplo, en un campo de búsqueda si mientras se va escribiendo se van actualizando los resultados internamente y si son muchos los resultados que puedan ralentizar la app.

### useCallback
- Almacena la definición de una función.
- Cuando se pasa una función en una prop, hará que se vuelva a renderizar los subcomponentes.
- También cuando la función es dependencia de otro Hook y usa algún estado dependiente en su definición.
- Memoriza las funciones de las dependencias del `effect`.
- Los estados dentro de la función deben ir como dependencias del `callback`.

|memo|useMemo|useCallback|
|:---|:---|:---|
|Memoriza un componente|Memoriza un valor calculado|Memoriza una función, para no volver a definirla en cada render|
|Vuelve a memorizar al cambiar las props|Para propiedades computadas|Usarlo siempre que se pase una función como argumento de un efecto|
|Evita re-renders|Para procesos pesados|Usarlo siempre que se pase una función por props a un componente memorizado.|
|Por defecto, **no usarlo**|Por defecto, **no usarlo**||
|Usar cuando:|||
|- Lista extensa de componentes|||
|- Usar un componente varias veces sea pesado|||
|- Un componente llama a una API|||

### useReducer

- Reducer:
    1. Es una función común y corriente
    1. Debe de ser una función pura
    1. Debe de retornar un nuevo estado
    1. Usualmente sólo recibe dos argumentos:
        - El valor inicial (initialState)
        - La acción a ejecutar
- Función pura:
    1. No debe tener efectos secundarios. (Resolver todo internamente sin llamar a otras funciones)
    1. No debe de realizar tareas asíncronas
    1. Debe de retornar siempre un nuevo estado (No mutar el estado)
    1. No debe de llamar localStorage o sessionStorage
    1. No debe de requerir más que una acción que puede tener un argumento
- Funcionamiento:

![Funcionamiento de Reducer](../assets/Reducer.jpg)

- Reducer *puro*:
	1. Retorna el mismo estado, si se dispara el mismo **action**, con el mismo **payload**.
	1. Los parámetros de entrada (**state**, **action**) no deben ser mutados (alterados). Usar funciones que no modifiquen el valor original (**push**), sino que retornen uno nuevo (**filter**, **find**, **map**, **reduce**)
- Cuándo usar:
	1. Cuando se tiene una lógica compleja que involucra subvalores.
	1. Cuando el próximo estado depende del anterior.
	1. Cuando sobre un estado se realizan muchas acciones distintas para actualizarlo.
- Tener controlado en un sólo lugar todas las acciones que modifican el estado de la aplicación.
- useReducer y useState esencialmente sirven para lo mismo, useState para estados más simples.
- <https://es.reactjs.org/docs/hooks-reference.html#usereducer>

```jsx
// Mutador del estado inicial
// toma el initialState y lo devuelve con alguna modificación para su correcto funcionamiento
const init = (value) => { /* code... */ }

// toma el initialState y después toma el estado previo
// devuelve el nuevo estado
// action es un objeto, una de sus propiedades es type
// reducer es una función pura, no va a interactuar con estados externos
const nameReducer = (state, action) => { return state; }

// sólo 'dispatch' o 'reducer' si son los únicos
// init actuará al principio mutando el initialState, se puede omitir
const [name, nameDispatch] = useReducer(nameReducer, initialState, init);

// objeto action: { type: 'actionName', payload: 'extra data' }
onClick={ () => nameDispatch({type: 'actionName'}) }
```

### Context API

- Para trabajar **estados globales**, que se puedan acceder directamente desde cualquier descendiente del componente.
- `createContext` provee información a la aplicación (variables, estados, funciones) para ser usada en cualquier componente hijo.
- Si algo en `value` cambia, se renderizan todos los componentes hijos.

```jsx
const NameContext = createContext();

const NameProvider = ({ children }) => {
    // data code...
    return (
        <NameContext.Provider value={data}>
            { children }
        </NameContext.Provider>
    );
}

// NameContext es un HOC
```

- `useContext` para los componentes:

```jsx
const data = useContext(NameContext);
```

### Otros Hooks

- `useParams` trae todos los parámetros de las rutas.
- `useLocation` trae todos los parámetros query.

```
?tab=1
?tab=news
?skip=0&limit=10
```

- `useHistory` métodos para navegar entre distintas urls.

```jsx
history.push({
    pathname: '/contact',
    search: '?tab=form',
});
```

### React Router

- `BrowserRouter` busca todas las coincidencias y las renderiza.
- `Switch` renderiza sólo la primera coincidencia. Dentro de un `div`.
- `Route` especifica la ruta y componentes a renderizar.
- Colocar las rutas de la más específica a la más general ó usar `exact`.
- `Link` en vez de `<a>` para que no recargue la aplicación.
- `NavLink` permite usar un `ActiveClassName`.
- `Redirect` redirecciona a otra url.
- `useRouteMatch` almacena la ruta anterior de acceso.

```jsx
// Desestructurar en componentes
<Route {...props} />
```

```jsx
<Route exact path="/" component={HomePage} />	// Sintaxis corta
<Route exact path="/">
    <HomePage />
</Route>

// Provisto por <Route />
// En los componentes hijos provee de la prop: history
history.push('/');      // ir a la página indicada
history.replace('/');   // reemplaza la página actual por la indicada
// Si no, usar el hook useHistory
```

```js
// Enviar el componente por callback
<Route
    { ...rest }
    component={(props) => (
        (isAuthenticated)
        ? (<Component { ...props } />)
        : <Redirect to="/login" />
    )}
/>

// Para almacenar la última página
rest.location.pathname
```

### Estilos en componentes

```jsx
// son objetos
// propiedades en camelCase
const textStyle = {
    color: 'black',
    background: 'white',
}
```

- <https://www.npmjs.com/package/query-string>

```bash
# Para trabajar con los query strings de las url
$ npm install query-string
```

```js
import queryString from 'query-string';

const { search } = useLocation();
const { q = '' } = queryString.parse(search);   // q = '' por si devuelve undefined
```

Trabajar con imágenes

- <https://webpack.js.org/guides/dependency-management/#requirecontext>

```js
// Para contenido estático
import batman from '../../assets/heroes/dc-batman.jpg';

// Para contenido dinámico
// true para que busque en subcarpetas
const heroImages = require.context('../../assets/heroes', true);

// .default para imágenes
<img src={ heroImages(`./${ heroId }.jpg`).default } />
```

Jest no soporta cargas dinámicas con require.context, una posible solución:
<https://stackoverflow.com/a/61137440>

[Top]

<a id="section-4"></a>

## Buenas prácticas, convenciones y complementos

- Nombres de Componentes en `CamelCaseComponent`.
- Manejar los errores de las peticiones a APIs.
- Etiquetas **JSX** entre paréntesis en **return** o **variables**.
- FIXME: Separar componentes **lógicos** e **interfaz**.
- Trabajar primero la interfaz (esquemáticamente al menos) para luego trabajar la lógica.
- No usar el index como key en arreglos ya que es muy volátil.

### Snippets

- `imr`
- `rafce`
- `useState`
- `console.warn`
- `console.error`
- `impt`

TODO: React con clases

[Home] - [Top]

[Top]: 			#header
[Home]: 		../README.md

[TypeScript]:	https://www.typescriptlang.org/
