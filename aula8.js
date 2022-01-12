const { html2 } = require('./base');

// $1 $2 $3 - <- Retrovisores
// Podemos referenciar o retrovisor com a '\' e o número que queremos selecionar,
// por ex \1

// console.log(html2);

console.log(html2.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g));
