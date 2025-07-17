
# 🧼 Filtro de Palabras Ofensivas en Node.js

Este proyecto fue desarrollado por **Santiago Pedraza** con el objetivo de censurar palabras ofensivas dentro de textos utilizando el paquete `bad-words`.

## 📦 Tecnologías Utilizadas

- **Node.js**
- **npm**
- **bad-words v3.0.4** (versión compatible con `require()`)

---

## 🚀 Instalación

1. Clona este repositorio o crea tu carpeta de proyecto:

```bash
git clone https://github.com/SantiagoPedrazaSierra/Taller-NPM.git
cd Taller-NPM
````

2. Inicializa tu proyecto (si aún no lo has hecho):

```bash
npm init -y
```

3. Instala la versión compatible del paquete `bad-words`:

```bash
npm install bad-words@3.0.4
```

---

## 📁 Estructura del Proyecto

```
Taller-NPM/
├── filtro.js
├── package.json
└── README.md
```

---

## 📄 Código Principal (`filtro.js`)

```js
const Filter = require('bad-words');

const filter = new Filter();
filter.addWords('pendejo', 'cabrón', 'estúpido', 'tonto', 'idiota');

const textoOriginal = "Eres un pendejo pero muy listo";
const textoFiltrado = filter.clean(textoOriginal);

console.log("Texto original:", textoOriginal);
console.log("Texto filtrado:", textoFiltrado);
console.log("Palabras en filtro:", filter.list);
```

---

## ✅ ¿Qué hace este proyecto?

* Crea una instancia de `bad-words`.
* Agrega palabras ofensivas personalizadas a la lista por defecto.
* Filtra un texto de ejemplo.
* Muestra el texto original, el censurado y la lista activa de palabras ofensivas.

---

## 📤 Ejecución

Ejecuta el script con Node.js:

```bash
node filtro.js
```

### 📌 Resultado esperado:

```
Texto original: Eres un pendejo pero muy listo
Texto filtrado: Eres un xxxxxxx pero muy listo
Palabras en filtro: [ 'pendejo', 'cabrón', 'estúpido', 'tonto', 'idiota' ]
```



