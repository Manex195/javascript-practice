// Exercise-1
const student = {
  name: "jack",
  id: 101,
  marks: [80, 90, 70]
};

const { name, id, marks: [mark_1, mark_2, mark_3] } = student;

console.log(name + " got mark on first subject " + mark_1);

const updateStudent = {
  ...student,
  grade: "A"
};


console.log(student.address?.city);

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj))