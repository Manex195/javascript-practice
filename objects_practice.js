const user = { user_name: "John", user_age: 25 };

// const name = user.name;
// const age = user.age;

// Destructuring (for Cleaner code.)

const { user_name, user_age } = user;

console.log(user_name + " is " + user_age + " years old.")

// Nested Destructuring.

const new_user = {
  name: "John",
  address: {
    city: "Dhaka"
  }
};

const { name, address: { city } } = new_user;

console.log(name + " lives in " + city)

// Spread operator userd for copyiing abnd updating objects. (...)

const updateUser = {
  ...user,
  user_age: 26
}

console.log(updateUser.user_name + " is " + updateUser.user_age + " years old.")

// Object methods.
console.log(Object.keys(updateUser))
console.log(Object.values(updateUser))
console.log(Object.entries(new_user))

const anotherUser = {}

console.log(anotherUser.address?.city) // undefined.
console.log(new_user.address?.city) // Dhaka

const p_users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 }
]

const names = p_users.map(({ name }) => name)

console.log(names)