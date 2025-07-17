// filtro.js
const Filter = require('bad-words');
const customFilter = new Filter({ placeholder: 'x' });

// Añade palabras personalizadas en español
customFilter.addWords('pendejo', 'cabrón', 'estúpido', 'tonto', 'idiota');

// Texto a filtrar
const textoUsuario = "¡Eres un pendejo y un tonto, pero listo!";

// Aplicar filtro
const textoLimpio = customFilter.clean(textoUsuario);

console.log("Texto original: ", textoUsuario);
console.log("Texto filtrado: ", textoLimpio);