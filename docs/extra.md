# Complementos
<a id="header"></a>

1. [Códigos JS](#section-1)
1. [Códigos CSS](#section-2)

[Home]

<a id="section-1"></a>

## Códigos JS

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

[Top]

<a id="section-2"></a>

## Códigos CSS

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

```css
/* Class name:
        folderName__category */
```

- <https://breakingbadapi.com/>
- <https://cdnjs.com/libraries/font-awesome>

[Home] - [Top]

[Top]: 	#header
[Home]: ../README.md
