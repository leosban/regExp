const { cpfs2 } = require('./base');

// ^ -> No começo da expressão, signifca: começa com
// [^] -> Dentro de um conjunto, significa negação
// $ -> Significa, termina com
// m -> multiline: faz a checagem por linha

const cpf = '254.224.877-45';

// Começa com e termina com, deixa nossa expressão bem mais especifica,
// porém não funcionaria em todos os casos
const cpfRegExp = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm;

console.log(cpfs2.match(cpfRegExp));