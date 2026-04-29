// Exercise 1
const numbers = [5, 10, 15, 20];

const doubled = numbers.map(n => n * 2);
const greaterTen = numbers.filter(n => n > 10);
const numberF = numbers.find(n => n === 15);
console.log("Doubled:", doubled);
console.log("greater than 10:", greaterTen)
console.log("Number equal 15:", numberF);

// Exercise 2
const users = [
  { name: "John", age: 17 },
  { name: "Jane", age: 22 },
  { name: "Mark", age: 19 }
];

const names = users.map(user => user.name);
console.log("Names:", names);
const greaterEighteen = users.filter(user => user.age >= 18);
console.log("Age greater than 18:", greaterEighteen);
const jane = users.find(user => user.name === "jane");
console.log("user named jane:", jane);
// checking if any user is under 18.
console.log(users.some(user => user.age < 18));
// checking if all users are adult.
console.log(users.every(user => user.age >= 18));


// Exercise 3
const number1 = [1, 2, 3, 4, 5];

const sum = number1.reduce((acc, curr) => acc + curr, 0);
console.log("Total sum:", sum);
const product = number1.reduce((mul, curr) => mul * curr, 1);
console.log("Product:", product);


// Exercise 4.
const orders = [
  { id: 1, amount: 100 },
  { id: 2, amount: 200 },
  { id: 3, amount: 150 }
];

const revenue = orders.reduce((acc, curr) => acc + curr.amount, 0);
console.log("Total revenue:", revenue);