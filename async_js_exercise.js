// Exercise 1.
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello world!");
  }, 2000);
});



// Exercise 2.
const exercise2 = async() => {
  try{
    const req = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!req.ok) {
      return new Error("Error " + req.status);
    } 
    const data = await req.json()
    const titles = data.map(d => d.title);
    console.log(titles);
  } catch(err) {
    console.log(err);
  }
}


exercise2();

// Exercise 4.
const getUserData = async(id) => {
  try {
    const req = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!req.ok) {
      return new Error("Error: " + req.status);
    }
    const data = await req.json();
    console.log(data.name + " has email: " + data.email);
  } catch(err) {
    console.log(err);
  }
}

getUserData(5);

