console.log("Start");

setTimeout(() => {
  console.log("Data loaded");
}, 2000);

console.log("End");


// Callback.
function fetchData(callback) {
  setTimeout(() => {
    callback("Data recieved");
  }, 2000);
}

fetchData((data) => {
  console.log(data);
});

// Promise the modern way.
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!")
  }, 2000);
});

promise.then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
});

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


const fetchUser = async() => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch(error) {
    console.log(error);
  }
};

fetchUser();