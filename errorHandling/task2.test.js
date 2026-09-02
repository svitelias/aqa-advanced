import axios from 'axios';

const fetchWithHeadersAndParams = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Custom-Header': 'my-custom-value',
      },
      params: {
        userId: 1,
        _limit: 3,
      },
    }
  );
  return response;
};

describe('Request Headers and Params', () => {
  test('should send request with custom headers and params', async () => {
    const response = await fetchWithHeadersAndParams();

    expect(response.status).toBe(200);
    expect(response.config.headers['Content-Type']).toBe('application/json');
    expect(response.config.headers['X-Custom-Header']).toBe('my-custom-value');
    expect(response.config.params.userId).toBe(1);
    expect(response.config.params._limit).toBe(3);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeLessThanOrEqual(3);
  });
});
