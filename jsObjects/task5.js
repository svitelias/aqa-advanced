const users = [
  { name: 'Svitlana', email: 'svitlana.elias@gmail.com', age: 38 },
  { name: 'Tetiana', email: 'tetiana@example.com', age: 30 },
  { name: 'Olena', email: 'olena@example.com', age: 22 }
];

for (const { name, email, age } of users) {
  console.log(name, email, age);
}
