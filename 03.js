const prompt = require("readline-sync");

const idade = prompt.question("Qual é a sua idade?");
const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);
console.log("O usúario tem", idade, "anos de idade", typeof idade);

// Coerção Explícita (Conversão Manual)
console.log(Number("X")); //NaN : Not a Number
console.log(String(10));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(2));
console.log(Boolean(-1));

// Coersão Implícita
console.log(1 + "1");
console.log(10 - "5");
console.log(10 * "5");
