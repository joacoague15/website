Democracia en Red
=================

Organization website for the Democracia en Red foundation

---

Para correr el front local:
```
npm ci
npm run devi
```

(el comando [`ci`](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable) instala directo del `package-lock.json`, las siglas son de *continuous integration*)

Para correr con la api:
```
export MAILGUN_API_KEY=-
export MEDIUM_URL=https://medium.com/multitudes
export MEDIUM_URL_CASOS=https://medium.com/multitudes/casos/home
npm run dev
```

# Challenge
Este desafío está dividido en:
* Requerimientos
* Codigo
* Sugerencias

## Requerimientos
La manera de correr la aplicación es igual a antes. </br>
Fue incorporada la librería [Axios](https://github.com/axios/axios) que permite hacer HTTP Requests de manera sencilla y facilitando algunos conceptos de Fetch() </br></br>
Para instalar Axios axios v0.21.1 debemos escribir:
```
npm install
```
Ya está, ahora podemos pasar a la aplicación en sí.

## Codigo
### Sobre el Backend
En Nodejs se hicieron dos APIS: _posts_ y _getBonus_ </br>
* _posts_ realiza una request a https://jsonplaceholder.typicode.com/posts y filtra ese resultado para que responda con un Array de máximo 4 elementos con userId 6.
* _getBonus_ es la API del ejercicio de bonus, que tambien hace request a https://jsonplaceholder.typicode.com/posts pero filtra los posts de userId 6 pero sin limitar la cantidad máxima.

### Sobre el Frontend
Se utilizaron componentes funcionales para incorporar el nuevo concepto de React que son los [Hooks](https://es.reactjs.org/docs/hooks-intro.html)

Dentro de sections/index/containers se realizaron dos componentes:
* _Posts.js_ consume la API de _posts_ y guarda la respuesta en un [state](https://es.reactjs.org/docs/hooks-state.html) para luego mapear y renderizarlo. Además hay state que es básicamente un booleano para mostrar(true)/esconder(false) el otro componente, _SearchPosts.js_
* _SearchPosts.js_ consume la API de _getBonus_ y, a partir del input del usuario, chequeamos si lo buscado está en algún título y se renderiza. También se hace otro request a https://jsonplaceholder.typicode.com/users/{id} para traer información sobre el usuario que hizo el/los post/s. 

## Sugerencias
Algunos cambios que hice o podrían hacerse en la App.</br>
### Diseño
* Algunos títulos eran de color blanco con fondo blanco, así que cambié todos los títulos por el mismo violeta que en el Navbar</br>
* Los logos del footer eran de color negro con fondo negro y opté por hacerlos blancos y cambiar el hover por el color característico de cada aplicación. </br>

### Elementos deprecados
#### Nodejs:
* _request_ está obsoleto. En este momento [Axios]((https://github.com/axios/axios)) podría reemplazarlo en todas sus instancias.

#### Reactjs:
* componentWillMount() está deprecado y se reconoce ahora como inseguro. La nueva implementación de [Async Rendering](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html) soluciona este problema.
* componentWillReceiveProps() también está deprecado. Hay varias [maneras](https://stackoverflow.com/questions/59143054/how-to-replace-this-componentwillreceiveprops) de reemplazarlo.
* componentWillUpdate() debería cambiarse por [comoponentDidUpdate](https://www.educba.com/react-componentdidmount/).

### ¿Qué cosas podría seguir trabajando?
* Podría actualizar los paquetes desactualizados.
* Podría resolver los problemas con los conceptos deprecados de React, entre otros errores.
* Implementar Axios a todos la app, en lugar de _Request_. 

##### Eso sería todo. Siempre estoy abierto a dudas y sugerencias sobre el proyecto.



