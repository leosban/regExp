const { lookahead } = require('./base');


ExpReg que as ocorrências finalizem em active
console.log(lookahead.match(/.+[^in]active$/gim));


Positive lookahead (frases que tem active)
console.log(lookahead.match(/.+(?=[^in]active)/gim));

Positive lookahead (frases que tem inactive)
console.log(lookahead.match(/.+(?=\s+inactive)/gim));

Negative lookahead (frases que não tem active)
console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

Negative lookahead (frases que não tem active)
console.log(lookahead.match(/^(?!.+inactive).+$/gim));

Positive lookbehind (Frases que começam com ONLINE)
console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim));

Negative lookbehind (Frases que não começam com ONLINE)


