# Jest

## Pruebas unitarias y de integración

- **Pruebas Unitarias** (Unit testing): enfocadas en pequeñas funcionalidades.
- **Pruebas de integración**: enfocadas en cómo reaccionan varias piezas en conjunto.
- Características de las pruebas:
    - Fáciles de leer y escribir
    - Rápidas y confiables
    - Principalmente unitarias
- **Patrón AAA**:
    - **Arrange** (*Arreglar*): Preparamos el estado inicial (*sujeto a probar*):
        - Inicializamos variables
        - Importaciones necesarias
    - **Act** (*Actuar*): Aplicamos acciones o estímulos al sujeto de pruebas:
        - Llamar métodos
        - Simular clicks
        - Realizar acciones sobre el paso anterior
    - **Assert** (*Afirmar*): Observar el comportamiento resultante:
        - Son los resultados esperados, p.e. Que algo cambie, algo incremente o bien que nada suceda.
- Mitos:
    - Hacen que mi aplicación no tenga errores
    - Las pruebas no pueden fallar
    - Hacen más lenta mi aplicación
    - Es una pérdida de tiempo
    - Hay que probar todo

## Organización

```
src/
|-- tests
    |-- demo.test.js
```

- Va a leer todos los archivos `.test.js`
- Llamados **test-suite**

```bash
npm run test
```

## Jest

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
```

```js
// Agrupar pruebas

describe('Group title', () => {
  // tests
});
```

- Ordenar las carpetas de los tests de manera similar a la estructura del proyecto.
- Pruebas de archivos específicos: `w` > `p` > `regex`
- Si no aparecen las ayudas o autocompletados:

```js
import '@testing-library/jest-dom';
```

- Para ejecutar todas las pruebas: `w` > `a`
- Los objetos no son iguales, dirección de memoria diferente: `{} === {}` is `false`, usar:

```js
// similar para arrays
expect(user).toEqual(testUser);
```

- `typeof` name

```js
expect(typeof number).toBe('number');
```

- Para pruebas asíncronas:

```js
test('', (done) => {
    asyncFunction()
        .then(response => {
            // expects...
            done(); // Hasta aquí se ejecuta la prueba
        })
});
```

```js
test('', async () => {
    const value = await asyncFunction();

    expect(typeof value).toBe('string');
});
```

Al testear componentes, usar archivo src/`setupTests.js` para expandir el `expect()`
Si se añadió posterior a la carga de Jest, volver a iniciar Jest

```js
import '@testing-library/jest-dom/extend-expect';
```

Para usar los componentes en el test

```js
import { render } from "@testing-library/react";

const wrapper = render(<App welcome={ welcome } />);
wrapper.getByText()

// o

const { getByText } = render(<App welcome={ welcome } />);
expect(getByText(welcome)).toBeInTheDocument();
```

## Enzyme

- [Adaptador](https://github.com/wojtekmaj/enzyme-adapter-react-17) a React 17
- [Enzyme](https://enzymejs.github.io/enzyme/)
- [Enzyme to JSON](https://www.npmjs.com/package/enzyme-to-json)

```bash
npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
npm install --save-dev enzyme-to-json
```

- Pegar en `setupTests.js`

```js
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
```

```js
import { shallow } from 'enzyme';

// equivalente a render()
const wrapper = shallow(<App />);
expect(wrapper).toMatchSnapshot();
// se creará la carpeta __snapshots__
// no modificar nada en ella
```

Enzyme to JSON

```js
import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
```

- En el primer test mostrará error, presionar `u` para actualizar el snapshot, que será con quien se comparará futuros snapshots del componente.

```js
// equivalente a .queryselector('p')
const paragraphText = wrapper.find('p').text();

// cuando se tienen varios elementos (array)
const button1 = wrapper.find('button').at(0);

// ver el html
button1.html();

// simular eventos
wrapper.find('button').at(0).simulate('click');
```

- Los tests se ejecutan de manera secuencial.

```js
// Para no perder el intellisense
let wrapper = shallow(<CounterApp />);

beforeEach(() => {
    // código que se ejecutará antes de cada prueba
    wrapper = shallow(<CounterApp />);
});
```

### Good practices

1. Ending codeline with semi-colon `;`
2. Solve all errors or warnings showed in console
3. Ending list of properties in an object with comma `,`
4. Do not use special characters in names like á, ñ, etc
5. Component names: UpperCamelCase
6. Sort CSS rules alphabetically

### Tecnologías

- [React](https://reactjs.org/)
- [Babel](https://babeljs.io/)
- [Create React App](https://create-react-app.dev/)

### Shortcuts

- `F2` change all reference names
- `clg` console.log()
- `imp` import ... from ...
- `exp` export default
- `imr` import react
- `rafcp`
- `test`
- `desc`
