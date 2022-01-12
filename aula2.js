const { texto } = require('./base');

const regExp3 = /João|Maria/gi;

// Math usado para encontrar o que está exatamente descrito na expressão
console.log(texto.match(regExp3));

// Replace usado para trocar uma coisa pela outra na string, mas precisa ser estritamente igual
// Porém é mais interessante usar as regExp, conforme abaixo
console.log(texto.replace(/João/gi, 'Leônidas'));

// Podemos fazer alterações na string através dos grupos, com os métodos abaixo
// Sendo o número '1' representando um grupo, caso houvesse mais grupos seriam
// adicionados $2, $3, $4 e assim por diante
console.log(texto.replace(/(João|Maria)/gi, '"$1"'));

// Podemos adicionar tags HTML
console.log(texto.replace(/(João|Maria)/gi, '<b>$1</b>'));

// Podemos usar funções se quisermos que nos retorne algo
// Usamos toUpperCase() para transforma a ocorrência que queremos encontrar 
// em letras maiusculas.
console.log(texto.replace(/(João|Maria)/gi, function(input) {
  return input.toUpperCase();
}));

