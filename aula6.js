const { cpfs, ips } = require('./base');

// console.log(cpfs);


// expReg para capturar os cpfs
console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g));

// expReg para capturar os cpfs refatorada
// console.log(cpfs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g));

// Precisamos do range 250 - 255
// Usamos a expressão 25[0-5]

// Precisamos do range 200 - 249
// Usamos a expressão 2[0-4][0-9]

// Precisamos do range 100 - 199
// Usamos a expressão 1\d{2}

// Precisamos do range 10 - 99
// [1-9]\d

// Precisamos do range 0 - 9
// \d

// ^ -> No começo da expressão, signifca: começa com
// $ -> Significa, termina com


// Expressão regular para captura dos ips
const ipRegExp = /((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)/g;


// for (let i = 0; i <= 255; i++) {
//   const ip = `${i}.${i}.${i}.${i}`;
//   console.log(ip, ip.match(ipRegExp));
// }

console.log(ips.match(ipRegExp));