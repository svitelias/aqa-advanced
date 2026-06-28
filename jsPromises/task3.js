const fetchTodo = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return response.json();
};

const fetchUser = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  return response.json();
};

const main = async () => {
  const allResults = await Promise.all([fetchTodo(), fetchUser()]);
  console.log('Promise.all:');
  console.log('Todo:', allResults[0]);
  console.log('User:', allResults[1]);

  const raceResult = await Promise.race([fetchTodo(), fetchUser()]);
  console.log('Promise.race winner:');
  console.log(raceResult);
};

main();
