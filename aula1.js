const { texto } = require('./base');

// g - global (encontra todas as ocorrências) - geralmente para achar uma ocorrência
// ou mais
// i - insensitive, ignora letras maiusculas e minusculas
// () - Grupo do que queremos encontrar
// | ou

// Verifica se existe a palavra independente se maiuscula ou minuscula.
const regExp1 = /João/i;

// Podemos usar o metodo test() para verificar se existe a palavra
console.log(regExp1.test(texto));


const regExp2 = /Teve 5 filhos/i;
// Metodo exec() nos retorna um array com algumas informações
console.log(regExp2.exec(texto));

// Usando metodos de dentro do objeto das expressões regulares para encontrar 
// o que foi especificado
const regExp3 = /(maria|joão)(, hoje sua esposa)/i;
const found = regExp3.exec(texto);

if(found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}