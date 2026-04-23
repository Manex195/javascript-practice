const numbers = [1, 2, 3];
// map() function for clean looping
const doubled = numbers.map(n => n * 2);
console.log(doubled);

const users = [
  { name: "A", age: 17 },
  { name: "B", age: 25 }
];

const names = users.map(user => user.name);
console.log(names);

// filters also for clean loopsing.
const numbers1 = [1, 2, 3, 4];

const even = numbers1.filter(n => n % 2 === 0);
console.log(even);

const adults = users.filter(user => user.age >= 18);
console.log(adults);

// find() function.
const user = users.find(user => user.age === 17);
console.log(user);

// reduce() the most powerful function.
const sum = numbers1.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("sum total: " + sum);

const totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log("Total age: " + totalAge);

// some() and every() 
const nums = [1, 2, 3];
console.log(nums.some(n => n > 2));

console.log(nums.every(n => n > 0));

