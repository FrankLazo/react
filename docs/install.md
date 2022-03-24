# Instalaciones
<a id="header"></a>

[Home]

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
npm install react-router-dom    # or
yarn add react-router-dom

# Version 5
npm install react-router-dom@5.3.0
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

Instalación de Node Sass

```bash
npm install node-sass
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
- <https://animate.style/>
- <https://www.npmjs.com/package/http-server>
- <https://docs.github.com/en/enterprise/2.13/user/articles/setting-your-username-in-git>
- Renombrar build como `docs` para crear un github page.
- Si surgen errores, cambiar la direccion de los recursos en `index.html` en `docs` (Ayudarse de `Format document`)

[Home] - [Top]

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

[Chrome]:                   https://www.google.com/intl/es-419/chrome/
[React Developer Tools]:    https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es
[Redux DevTools]:           https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es
[Postman]:                  https://www.postman.com/
[Mongo Compass]:            https://www.mongodb.com/try/download/compass

[Top]: 					    #header
[Home]: 					../README.md
