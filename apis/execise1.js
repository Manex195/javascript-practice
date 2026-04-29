// fetch users name and email

const loadData = async() => {
  try {
    const req = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!req.ok) {
      return Error("Erro status ", req.status);
    }
    const data = await req.json();
    const name_and_email = data.map(user => ({ 
      name: user.name, 
      email: user.email 
    }));
    console.log(name_and_email);
  } catch(err) {
    console.log(err);
  }
};

loadData();