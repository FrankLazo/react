# React JS
<a id="header"></a>

Este repositorio contiene diferentes prácticas relacionadas con [React]: códigos, enlaces a las aplicaciones y algunas notas sobre las tecnologías usadas.

## Índice

1. [Prácticas](#section-1)
1. [Instalaciones](#section-2)
1. [Estructura de archivos](#section-3)
1. [Definiciones](#section-4)
1. [Elementos](#section-5)
1. [Buenas prácticas, convenciones y complementos](#section-6)

---
<a id="section-1"></a>

## Prácticas

Los ejercicios están ordenados del más actual al más antiguo.

### Prácticas #1

Ejercicios hechos en el curso de [Luis Cabrera] en la plataforma [Youtube].

- [Router App](https://router-react-lazodev.netlify.app)
- [Global State App](https://globalstate-react-lazodev.netlify.app)
- [useReducer App](https://usereducer-react-lazodev.netlify.app)
- [Context App](https://context-react-lazodev.netlify.app)
- [Modal App](https://modal-react-lazodev.netlify.app)
- [Custom Hooks App](https://customhooks-react-lazodev.netlify.app)
- [Memorize App](https://memorize-react-lazodev.netlify.app)
- [useRef App](https://useref-react-lazodev.netlify.app)
- [useEffect App](https://useeffect-react-lazodev.netlify.app)
- [useState App](https://usestate-react-lazodev.netlify.app)
- [Dogs App](https://dogs-react-lazodev.netlify.app)
- [Breaking Bad App](https://breakingbad-react-lazodev.netlify.app)
- [Todo App](https://todo-react-lazodev.netlify.app)

[Index]

---
<a id="section-2"></a>

## Instalaciones

Verificación de instalación de [Node], [npm] y [Git]:

```bash
node --version
npm  --version
git  --version
```

Actualización de [npm] y [Git]:

```bash
npm install -g npm@latest
git update-git-for windows
```

Borrar caché de [npm] para evitar descargas antiguas de [React]:

```bash
npm cache clean --force
```

Crear proyecto en [React]:

- Usar [Create React App] de manera global (Más rápido)

```bash
npm install -g create-react-app             # CLI para React
create-react-app nombre-carpeta-proyecto
```

- Usar [Create React App] con `npx` (Descarga actualizada)

```bash
npx create-react-app nombre-carpeta-proyecto
npx create-react-app nombre-carpeta-proyecto --use-npm				# Por defecto usará yarn
npx create-react-app nombre-carpeta-proyecto --template typescript	# Por defecto usará JS
```

Iniciar servidor local:

```bash
npm start
yarn start	# más rápido
```

Instalación de [React Router]:

```bash
yarn add react-router-dom
```

Instalación de frameworks o utilidades CSS:
[Sass] - [Bulma] - [Styled Components] - [Material UI]

```bash
npm i sass
npm install bulma
npm install --save styled-components
npm install @material-ui/core
npm install @material-ui/icons  # Para el uso de íconos
```

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

Verificación de instalación de [Material UI]:

```bash
npm list @material-ui/core
```

Instalación de utilidades en [Chrome]:

- [React Developer Tools]
- [Redux DevTools]

Otras instalaciones:

- [Postman]
- [Mongo Compass]

[Index]

---
<a id="section-3"></a>

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

[Index]

---
<a id="section-4"></a>

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

[Index]

---
<a id="section-5"></a>

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

### useRef

- Permite interactuar con el DOM real directamente.
- `Referencia mutable` variable cuyo valor será persistente a lo largo de los renders, cuando cambie de valor no causará renderización.
- No usarlo para modificar valores relacionados a estados, ya que no pasan por el DOM de React.
- Para hacer uso de funciones o eventos del DOM que no se pueden usar con React: `.focus()`, `.select()`, `.play()`, `.pause()`, etc.
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

- Reducer *puro*:
	1. Retorna el mismo estado, si se dispara el mismo **action**, con el mismo **payload**.
	1. Los parámetros de entrada (**state**, **action**) no deben ser mutados (alterados). Usar funciones que no modifiquen el valor original (**push**), sino que retornen uno nuevo (**filter**, **find**, **map**, **reduce**)
- Cuándo usar:
	1. Cuando se tiene una lógica compleja que involucra subvalores.
	1. Cuando el próximo estado depende del anterior.
	1. Cuando sobre un estado se realizan muchas acciones distintas para actualizarlo.

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
- `Switch` renderiza sólo la primera coincidencia.
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

[Index]

---
<a id="section-6"></a>

## Buenas prácticas, convenciones y complementos

- Nombres de Componentes en `CamelCaseComponent`.
- Manejar los errores de las peticiones a APIs.
- Etiquetas **JSX** entre paréntesis en **return** o **variables**.
- FIXME: Separar componentes **lógicos** e **interfaz**.
- Trabajar primero la interfaz (esquemáticamente al menos) para luego trabajar la lógica.

### Snippets

- `imr`
- `rafce`
- `useState`
- `console.warn`
- `console.error`

### Códigos JS

```jsx
// Funciones sin un `return` definido, devuelve `undefined`
// Para evitar sobrescribir la definición de una función:
const functionName = function( name ) {
    return `Hello ${ name }!`;
}

// Arrow functions: se pueden simplificar:
const functionName = name => `Hello ${ name }!`;

// uso de OR, si el primer elemento es falso o no existe, se usará el segundo
const [todos, setTodos] = useState(localTodos || initialTodos);
const literal = `${todo.completed || 'is-light'}`;

// uso de AND, si el primer elemento es verdadero o existe, se usará el segundo
{
    error &&
    (
        <div className="notification is-danger is-light mt-4">
            {error}
        </div>
    )
}

// usar OPERADOR TERNARIO
// los booleanos no se imprimen, usar boolean.toString()
{
    condition
    ? ( </> )
    : ( </> )
}

// para evitar errores al acceder a una propiedad no definida o no existente
// devolverá simplemente undefined y ya no buscará el resto de propiedades
objectName?.prop?.prop;

// copiar al portapapeles
document.exexCommand('copy');

// valor de retorno al desestructurar
// OBJECT:          No importa la posición del valor                - Usar alias para cambiar el nombre
// ARRAY:           Necesario marcar la posición del valor con ','  - No es necesario alias.
//                                                                  - Cuando se use más de dos veces el mismo hook y se desee con diferentes alias.
// SINGLE VARIABLE:	Cuando se retorna un solo valor
const { name: newName, age, features: { habilities, clothes } } = objectName;

// Los componentes son objetos en sí, y sus atributos son propiedades de ellos
const myComp = (props) => {
    return (
        <customComp {...props} newProp="" />
    );
}

// Evita errores de sintaxis y permite reutilizarlos en diferentes reducer
// Para usar en switches
const types = {
    increment: 'increment',
    decrement: 'decrement',
    reset: 	   'reset',
}

// devuelve booleano
!!user;

// alias para que sea usado como componente
// resto de propiedades: ...rest
const PrivateRouter = ({ component: Component, ...rest }) => { /* code... */ }

// .filter
// .map
// .find
// .includes
// Potencias: `2 ** 3` equivalente a *2 al cubo*.
```

### Códigos CSS

```jsx
// CSS: objectFit - objectPosition

// sintaxis básica de styled-components
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    // background: #F56236;
    outline: none;
    border: none;
    padding: .5rem;

    ${props =>
        props.primary &&
        css`
            background: #F56236;
            color: white;
        `};
`

const Button = ({ children }) => {
    return (
        <StyledButton>Normal Button { children }</StyledButton>
        <StyledButton primary>Primary Button{ children }</StyledButton>
    );
}

// para usar styled-components con Material-UI
import Button from '@material-ui/core/Button';
import styled, { css } from 'styled-components';
import { StylesProvider } from '@material-ui/styles';

const StyledButton = styled(({warning, ...rest}) => (
    <Button {...rest}></Button>
    ))`
    background-color: #88FCA3;

    ${props =>
        props.warning &&
        css`
            background-color: #FCE788;
        `}
`;

// por defecto los estilos de MUI se ubican al final de todos, ganando prioridad
<StylesProvider injectFirst>
    <StyledButton warning> My Button </StyledButton>
</StylesProvider>
```

TODO: React con clases

[React]:                    https://reactjs.org/
[Node]:                     https://nodejs.org/en/
[npm]:                      https://www.npmjs.com/
[Git]:                      https://git-scm.com/
[Create React App]:         https://create-react-app.dev/
[React Router]:		        https://reactrouter.com/
[Sass]: 			        https://sass-lang.com/
[Bulma]: 			        https://bulma.io/
[Styled Components]:      	https://styled-components.com/
[Material UI]:      		https://material-ui.com/
[TypeScript]:				https://www.typescriptlang.org/

[Chrome]:                   https://www.google.com/intl/es-419/chrome/
[React Developer Tools]:    https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es
[Redux DevTools]:           https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es
[Postman]:                  https://www.postman.com/
[Mongo Compass]:            https://www.mongodb.com/try/download/compass

[Youtube]:					https://www.youtube.com/
[Luis Cabrera]:				https://www.youtube.com/playlist?list=PLdcAPGja1uw1fmhVo-obnAXEXPqYQ9HLy

[Index]: 					#header
