# Jest

## Índice

1. [Conceptos]()
1. [Empezando]()
1. [Jest]()
    - [Pruebas asíncronas]()
    - [Testeo de componentes]()
1. [Enzyme]()
    - [Testeo de componentes]()
    - [Custom hooks]()
    - [Rutas]()
    - [Simular useHistory]()

## Conceptos

Tipos de pruebas:
- **Pruebas Unitarias** (*Unit testing*): enfocadas en pequeñas funcionalidades.
- **Pruebas de integración**: enfocadas en cómo reaccionan varias piezas en conjunto.

Características de las pruebas:
- Fáciles de leer y escribir
- Rápidas y confiables
- Principalmente unitarias

**Patrón AAA**:
- **Arrange** (*Arreglar*): Preparamos el estado inicial (*sujeto a probar*):
    - Inicializamos variables
    - Importaciones necesarias
- **Act** (*Actuar*): Aplicamos acciones o estímulos al sujeto de pruebas:
    - Llamar métodos
    - Simular clicks
    - Realizar acciones sobre el paso anterior
- **Assert** (*Afirmar*): Observar el comportamiento resultante:
    - Son los resultados esperados, p.e. Que algo cambie, algo incremente o bien que nada suceda.

Mitos:
- Hacen que mi aplicación no tenga errores
- Las pruebas no pueden fallar
- Hacen más lenta mi aplicación
- Es una pérdida de tiempo
- Hay que probar todo

## Empezando

Organización:

```
src/
|
|— tests/
|   |
|   |-- demo.test.js
|
|— setupTests.js
```

En `tests/`:
- Recomendable seguir la estructura del proyecto
- Cada archivo se corresponde con un **test-suite**

Correr testeo:

```bash
npm run test

# pruebas de archivos específicos: w > p > regex
# ejecutar todas las pruebas: w > a
```

## Jest

```js
// Si no aparecen las ayudas o autocompletados
import '@testing-library/jest-dom';
```

```js
// Agrupar pruebas
describe('Group title', () => {
  // ...
  // tests
  // ...
});
```

```js
test('should be true', () => {
    // ...
    throw new Error ('Error message');
    // ...
});
```

```js
// value1 === value2 ?
// Se espera que value1 sea igual a value2
expect(value1).toBe(value2);

// Los objetos no son iguales, dirección de memoria diferente:
// {} === {} is false
// Similar en arrays
expect(user).toEqual(testUser);

// Comprobando el tipo
expect(typeof number).toBe('number');
```

### Pruebas asíncronas

```js
test('', (done) => {
    asyncFunction()
        .then(response => {
            // expects...
            done(); // Hasta aquí se ejecuta la prueba
        });
});
```

```js
test('', async () => {
    const value = await asyncFunction();

    expect(typeof value).toBe('string');
});
```

### Testeo de componentes

Usar archivo `setupTests.js` para expandir el `expect()`.

```js
// Si se añadió posterior a la carga de Jest, volver a iniciar Jest
import '@testing-library/jest-dom/extend-expect';
```

```js
// Para usar los componentes en el test
import { render } from "@testing-library/react";

const wrapper = render(<App welcome={ welcome } />);
expect(wrapper.getByText(welcome)).toBeInTheDocument();

// o

const { getByText } = render(<App welcome={ welcome } />);
expect(getByText(welcome)).toBeInTheDocument();
```

## Enzyme

Documentación e instalación:
- [Adaptador](https://github.com/wojtekmaj/enzyme-adapter-react-17) a React 17
- [Enzyme](https://enzymejs.github.io/enzyme/)
- [Enzyme to JSON](https://www.npmjs.com/package/enzyme-to-json)

```bash
npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
npm install --save-dev enzyme-to-json
```

En `setupTests.js`:

```js
// Para enzyme
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
```

```js
// Para enzyme-to-json
import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
```

### Testeo de componentes

El primer test puede mostrar error, presionar `u` para actualizar el snapshot.

```js
import { shallow } from 'enzyme';

// equivalente a render()
const wrapper = shallow(<App />);
// se creará la carpeta __snapshots__
// no modificar nada en ella
expect(wrapper).toMatchSnapshot();
```

```js
// equivalente a .queryselector('p')
const paragraphText = wrapper.find('p').text();

// cuando se tienen varios elementos (array)
const button1 = wrapper.find('button').at(0);

// ver el html
button1.html();

// simular eventos
wrapper.find('button').at(0).simulate('click');
wrapper.find('button').prop('onClick')();
```

Los tests se ejecutan de manera secuencial.

```js
// Para no perder el intellisense
let wrapper = shallow(<CounterApp />);

beforeEach(() => {
    // código que se ejecutará antes de cada prueba
    wrapper = shallow(<CounterApp />);
});
```

```js
// Para ver los atributos de un elemento
wrapper.find('elem').props().atributte();
// ó
wrapper.find('elem').prop('atributte');

// Si posee una clase
const className = div.prop('className');
expect(className.includes('animate__fadeIn')).toBe(true);
// ó
expect(div.hasClass('animate__fadeIn')).toBe(true);

// Existencia de un elemento
expect( wrapper.find('p').exists() ).toBe(false);

// Simular cambios en input
// El segundo argumento es el valor del evento 'e'
const value = 'Hello world!';
input.simulate('change', { target: { value: value } });
```

```js
// Función por defecto de jest
const setCategories = jest.fn();

// Si la función fue llamada al menos una vez
expect(setCategories).toHaveBeenCalled();
// Si la función fue llamada un número de veces
expect(setCategories).toHaveBeenCalledTimes(number);
// Si la función no fue llamada
expect(setCategories).not.toHaveBeenCalled();
// Si la función fue llamada con argumentos
// Por ejemplo tipo función
expect(setCategories).toHaveBeenCalledWidth( expect.any(Function) );

// Simular submit
.simulate('submit');

// Limpiar todas las simulaciones
jest.clearAllMocks();
```

### Custom hooks

```js
// Fingir cualquier llamado al archivo y controlar lo que devuelve
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

// Simular el valor devuelto
useFetchGifs.mockReturnValue(value)

// Importante el orden de obtener los elementos del componente y hacer las simulaciones.
```

Documentación e instalación:
- [React Hooks Testing Library](https://react-hooks-testing-library.com/)

```bash
# if you're using npm
npm install --save-dev @testing-library/react-hooks
# if you're using yarn
yarn add --dev @testing-library/react-hooks
```

```js
// Para custom hooks:
import { renderHook } from '@testing-library/react-hooks';

const { result } = renderHook(() => useFetchGifs('Megadeth'));
const { data, loading } = result.current;

// Esperar por el siguiente cambio en el componente
// Pueden surgir problemas al desmontarse antes de tiempo el componente
const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Megadeth'));
await waitForNextUpdate();
```

```js
// Para funciones en custom hooks:
expect(typeof result.current.functionName).toBe('function');

// Ejecutar funciones de custom hooks;
import { act } from '@testing-library/react-hooks';

act(() => {
    // Funciones...
    // No se puede ejecutar la misma función más de dos veces
    // Lo considera sólo una vez
});

// Para corregir el problema del timeout
await waitForNextUpdate({ timeout: false});
```

```js
// Pruebas en renderizaciones
expect(wrapper.find('blockquote p:first-child').text().trim()).toBe('Hello world!');

// Para comprobar si tiene los respectivos argumentos
expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual( expect.any(Function) );

// Llamado a funciones con e.preventDefault()
const formSubmit = wrapper.find('form').prop('onSubmit');
formSubmit( { preventDefault(){} } );

// Verificar el llamado con ciertos argumentos
expect(handleAddTodo).toHaveBeenCalledWith({
    id: expect.any(Number),
    description: value,
    done: false,
});

// Para funciones comprobar si se han llamado o verificar el resultado de sus efectos
```

```js
// Shallow renderiza el componente aislado
// Mount renderiza el componente con todos sus hijos
const wrapper = mount(<TodoApp />);

// Ejecutar funciones que actualizan estados del componente
import { act } from '@testing-library/react';

act(() => {
    // Funciones...
});

// Mock de LocalStorage
Storage.prototype.setItem = jest.fn(() => {});
expect(localStorage.setItem).toHaveBeenCalledTimes(2);

// También se puede usar localStorage directamente, aunque hay que tener cuidado de donde llamarlo
localStorage.setItem('lastPath', '/dc');

// Pruebas con contextos
const wrapper = shallow(
    <UserContext.Provider value={ user }>
        <HomeScreen />
    </UserContext.Provider>
);
// shallow sólo renderiza el componente padre, usar mount
```

### Rutas

No se puede probar `<Route>` fuera de un `<Router>`

```js
// Usar con mount
// Para solucionar:
<MemoryRouter>
    <PrivateRoute />
<MemoryRouter/>
```

```js
<Redirect /> // devuelve un string vacío
```

### Simular useHistory

```js
// Si sale error 'is not a function' añadirla al mock
const historyMock = {
    location: {},
    push: jest.fn(),
    listen: jest.fn(),
    replace: jest.fn(),
    createHref: jest.fn(),
};

const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
            <Router history={ historyMock }>
                <Navbar />
            </Router>
        </MemoryRouter>
    </AuthContext.Provider>
);

// Recomendable limpiar los mocks
afterEach(() => {
    jest.clearAllMocks();
});

// Enviar parámetros y history
const wrapper = mount(
    <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
            path="/hero/:heroId"
            component={ () => <HeroeScreen history={ historyMock } /> } />
    </MemoryRouter>
);
```

---

## Good practices

1. Ending codeline with semi-colon `;`
2. Solve all errors or warnings showed in console
3. Ending list of properties in an object with comma `,`
4. Do not use special characters in names like á, ñ, etc
5. Component names: UpperCamelCase
6. Sort CSS rules alphabetically

## Tecnologías

- [React](https://reactjs.org/)
- [Babel](https://babeljs.io/)
- [Create React App](https://create-react-app.dev/)

## Shortcuts

- `F2` change all reference names
- `clg` console.log()
- `imp` import ... from ...
- `exp` export default
- `imr` import react
- `rafcp`
- `test`
- `desc`
