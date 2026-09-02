import axios from 'axios';
import { jest } from '@jest/globals';

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

describe('Mocking Axios in Jest', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should return mocked data on success', async () => {
    const mockedData = { id: 1, title: 'Mocked Post' };
    jest.spyOn(axios, 'get').mockResolvedValue({ data: mockedData, status: 200 });

    const result = await fetchData('https://jsonplaceholder.typicode.com/posts/1');

    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    expect(result).toEqual(mockedData);
  });

  test('should handle mocked error on failure', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue(new Error('Network Error'));

    await expect(
      fetchData('https://jsonplaceholder.typicode.com/posts/1')
    ).rejects.toThrow('Network Error');
  });
});
