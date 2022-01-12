// Encontra todas a palavras
const palavrasRegEx = /([\wÀ-ú]+)/gim;

// Tirar números da string
const naoNumerosRegEx = /\D/;

// Valida IP
const ipRegEx = /((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)/g;

// Checagem do formato CPF
const cpfRegEx = /(?:\d{3}\.){2}\d{3}-\d{2}/gim;

// Valida telefones
const telRegEx = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g;

// Validar senhas fortes
const senhasFortesRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\]\)]).{8,}$/;

// Validar emails
const emailsRegEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;

const permissivaEmailsRegEx = /[^\s]+@[^\s]+\.[^\s]+(\w+)*/gim;


