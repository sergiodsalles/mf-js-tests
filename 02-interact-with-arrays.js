/**
 * Given two lists representing a shopping list and the prices respectively.
 * Print on the console a friendly message with each item and the respective price.
 * Obs: The item and its price is on the same position of the list (array).
 *
 * Example of console output:
 *
 * Your shopping list is:
 * Acer Laptop - $ 2900
 * Pacco Bottle - $ 190.60
 * ...
 *
 */

const items = [
  "Acer Laptop",
  "Pacco Bottle",
  "Microsoft Mouse",
  "Alexa Echo Dot 4",
];
const prices = [2900, 190.6, 59.9, 399.9];

// Write your code here.
let descricao = "";
console.log("Your shopping list is ");
for (let i = 0; i < 4; i++) {
  descricao = `${items[i]} - ${prices[i]}`;
  console.log(descricao);
}
