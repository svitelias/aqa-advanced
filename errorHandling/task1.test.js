import axios from 'axios';

const fetchFromWrongUrl = async () => {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/wrong-endpoint');
  } catch (error) {
    throw new Error(`Request failed with status: ${error.response.status}`);
  }
};

describe('Error Handling', () => {
  test('should handle error from wrong URL', async () => {
    await expect(fetchFromWrongUrl()).rejects.toThrow(
      'Request failed with status: 404'
    );
  });
});
