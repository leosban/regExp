const { html } = require('./base');


// regExp para encontrar uma tag html
const regExp = /<.+>.+<\/.+>/g; // Quantificadores greedy
const regExpNonGreedy = /<.+?>.+?<\/.+?>/g; // Quantificadores non-greedy

console.log(html.match(regExp));

console.log(html.match(regExpNonGreedy));

console.log(html);
