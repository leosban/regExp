const { alfabeto } = require('./base');

// [abc] - Conjunto, dentro de colchetes

// [-] - Range, sempre mandamos do menor para o maior, não ao contrário
// [min-maxQUALQUERCOISA] - o motor do JS entenderá que queremos, determinado range
// e tb outra coisa qualquer que queremos buscar...
// para negação usamos o circunflexo dentro dos colchetes

console.log(alfabeto);

// Se quisermos achar a sequência do conjunto 1 ou mais vezes, 
// adicionamos o '+' junto com a expressão
console.log(alfabeto.match(/[abc123]+/g));

// Uso do '^' para negar, ou seja, não achar o que estiver dentro do conjunto
console.log(alfabeto.match(/[^abc123]/g));

// Uso do range, para achar um determinado intervalo
console.log(alfabeto.match(/[0-9]/g));

// Podemos combinar vários ranges juntos
// É possível usar a negação '^' também
// Podemos incluir dentro do conjunto as letras acentuadas se quisermos achar
console.log(alfabeto.match(/[a-zA-z0-9ãç]+/g));

// Podemos encontrar caracteres unicode
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g));

// Podemos encontrar um range de letras acentuadas tb de acordo com a tabela
// que podemos pesquisar na internet

// '\w' Para encontrar correspondências alfanúmericas de qualquer caractere alfanúmerico
// incluindo underline. Equivale [a-zA-z0-9_].
// Para negação, usamos '\W' em maiusculo;
console.log(alfabeto.match(/\w/g));

// Podemos substituir o [0-9] por '\d'
// Para negar, usamos o '/D' com o D em maiusculo
console.log(alfabeto.match(/\d+/g));

// Para acharmos qualquer tipo de espaço em branco, usamos /s
console.log(alfabeto.match(/\s+/g));