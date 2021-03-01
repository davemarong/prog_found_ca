// question 1
let string = "string";
// question 2
const person = {
  name: "Tidus",
  skill: "player",
};
// question 3
let outOfStock = true;
if (outOfStock == true) {
  console.log("Out of stock");
} else if (outOfStock == false) {
  console.log("In stock");
}
// question 4
let array = [0, 1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  console.log(i);
}
// question 5
for (let i = 15; i <= 25; i++) {
  console.log(i);
}
// question 6
for (let i = 15; i <= 25; i++) {
  if (i == 20) {
    console.log(i);
  }
}
// question 7
const pokemon = [
  {
    name: "Magikarp",
    level: 1,
    skilled: false,
  },
  {
    name: "Kadabra",
    level: 50,
    skilled: true,
  },
];
for (let i = 0; i < pokemon.length; i++) {
  console.log(pokemon[i].level);
  console.log(pokemon[i].skilled);
}
// question 8
let whatIDontLike = (nastyIngredient) => {
  console.log(`I dont like ${nastyIngredient}`);
};
whatIDontLike("pickles");
// question 9
let subtract = (x, y) => {
  console.log(x - y);
};
subtract(100, 10);
// question 10
let notSoEmptyArray = [];
let pushArray = (item) => {
  notSoEmptyArray.push(item);
};
pushArray("Hello world");
