const person = {
  firstName: 'Svitlana',
  lastName: 'Elias',
  age: 25
};

person.email = 'svitlana.elias@gmail.com';
delete person.age;

console.log(person);
