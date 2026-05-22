
const promptSync = require('prompt-sync')();

const nome = promptSync('Digite seu nome: ');
console.log(`Olá, ${nome}!`);