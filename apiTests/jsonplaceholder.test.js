import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Axios interceptors для логування
axios.interceptors.request.use((config) => {
  console.log(`REQUEST: ${config.method.toUpperCase()} ${config.url}`);
  return config;
});

axios.interceptors.response.use((response) => {
  console.log(`RESPONSE: ${response.status} ${response.config.url}`);
  return response;
});

describe('JSONPlaceholder API Tests', () => {

  // GET запити
  test('GET /posts - should return array of posts', async () => {
    const response = await axios.get(`${BASE_URL}/posts`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('title');
    expect(response.data[0]).toHaveProperty('body');
    expect(response.data[0]).toHaveProperty('userId');
  });

  test('GET /posts/1 - should return single post', async () => {
    const response = await axios.get(`${BASE_URL}/posts/1`);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(typeof response.data.title).toBe('string');
    expect(typeof response.data.body).toBe('string');
    expect(typeof response.data.userId).toBe('number');
  });

  test('GET /users/1 - should return single user', async () => {
    const response = await axios.get(`${BASE_URL}/users/1`);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(typeof response.data.name).toBe('string');
    expect(typeof response.data.email).toBe('string');
    expect(response.data).toHaveProperty('address');
  });

  // POST запити
  test('POST /posts - should create new post', async () => {
    const newPost = {
      title: 'Test Post',
      body: 'This is a test post',
      userId: 1,
    };
    const response = await axios.post(`${BASE_URL}/posts`, newPost);
    expect(response.status).toBe(201);
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
    expect(response.data).toHaveProperty('id');
  });

  test('POST /todos - should create new todo', async () => {
    const newTodo = {
      title: 'Test Todo',
      completed: false,
      userId: 1,
    };
    const response = await axios.post(`${BASE_URL}/todos`, newTodo);
    expect(response.status).toBe(201);
    expect(response.data.title).toBe(newTodo.title);
    expect(response.data.completed).toBe(false);
    expect(response.data).toHaveProperty('id');
  });

});
