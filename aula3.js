const { texto, arquivos } = require('./base');

// Tipos de quantificadores
// * -> (opcionais) 0 ou n vezes {0,}
// + -> (obrigatório) 1 ou n vezes {1,}
// ? -> (opcionais) 0 ou 1 {0,1}
// \ -> Caractere de escape, não conflita com o meta da engine JS
// {n,m} -> minimo e maximo de ocorrências
// {10,} no minimo 10 ocorrências
// {,10} de 0 a 10 ocorrências
// {5, 10} de 5 a 10 ocorrências
// {1} -> Quantificador especifico para nos mostrar uma vez só

// console.log(texto);

// Quantificador encontra o nome João com a primeira letra 'o' uma ou mais vezes
// const regExp1 = /Jo+ão+/gi;

// console.log(texto.match(regExp1));

// Variável com regExp para encontrar o ponto literal 
// const regExp2 = /\.jpg/gi

// Variavel com regExp combinada para encontrar determinados tipos de arquivos
// Usamos os quantificadores opcionais para exibir 0 ou 1 vez o que procuramos encontrar
// const regExp = /\.jpe?g/gi

// Podemos usar quantificadores num grupo tb
// e combinar várias coisas, para sermos mais específicos
const regExp = /\.((jp|JP)(e|E)?(g|G))/g


for (const arquivo of arquivos) {
  // Variavel para armazenar o que combina com a regExp
  const valido = arquivo.match(regExp);
  // Condição para verificar se há algo diferente de válido, pois caso haja
  // não vai ser exibido
  // if (!valido) continue;
  // Imprime o resultado
  console.log(arquivo, valido);
}
