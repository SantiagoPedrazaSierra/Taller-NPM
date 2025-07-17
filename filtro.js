// filtro.js
const Filter = require('bad-words');

const filter = new Filter();
filter.addWords('pendejo', 'cabrón', 'estúpido', 'tonto', 'idiota');

const textoOriginal = "Eres un pendejo tonto pero muy listo";
const textoFiltrado = filter.clean(textoOriginal);

console.log("Texto original:", textoOriginal);
console.log("Texto filtrado:", textoFiltrado);

