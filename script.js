// 1 пимер
const years = { currentYear: 2023, prevousYear: 2022 };
console.log(_.isMatch(years, { currentYear: 2023 })); 
console.log(_.isMatch(years, { currentYear: 2022 })); 

// 2 пример
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 81, points: 48, online: true },
];

console.log(_.isObject(players, (player) => player));

// 3 пример
const numbers = [4, 2, 5, 8];
console.log(_.max(numbers));

// 4 пример
const randomNumber = 20;
console.log(_.random(randomNumber));

// 5 пример

console.log(_.add(4, 5));

// 6 пример

const textToUpperCase = "javascript";
const readyText = _.toUpper(textToUpperCase);
console.log(readyText);
console.log(_.lowerFirst(readyText));

// 7 пример
console.log(_.isBoolean(readyText));
console.log(_.isBoolean(false));

// 8 пример
console.log(_.isEqual(players, (player) => player));

// 9 пример
const ltNumbers1 = (1, 3);
const ltNumbers2 = (3, 3);
console.log(_.lt(ltNumbers1));
console.log(_.lt(ltNumbers2));

// 10 пример

console.log(_.mean(numbers));
