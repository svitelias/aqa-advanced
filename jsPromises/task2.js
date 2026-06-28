const fetchTodo = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json());
};

const fetchUser = () => {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json());
};

const allResults = Promise.all([fetchTodo(), fetchUser()]);
allResults
  .then((results) => {
    console.log('Promise.all:');
    console.log('Todo:', results[0]);
    console.log('User:', results[1]);
  })
  .catch((error) => console.log('Error:', error.message));

const raceResult = Promise.race([fetchTodo(), fetchUser()]);
raceResult
  .then((result) => {
    console.log('Promise.race winner:');
    console.log(result);
  })
  .catch((error) => console.log('Error:', error.message));
