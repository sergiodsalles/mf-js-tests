/**
 * Write a Javascript code that read a string and returns on the console the inverse of it.
 * Example:
 *      "Michele" should returns "elehciM"
 */
let nomeInverso = "";
const nome = "Michele";
console.log(nome.length);

for (let i = nome.length - 1; i >= 0; i--) {
  nomeInverso += nome[i];
}

console.log("O nome invertido é ", nomeInverso);
