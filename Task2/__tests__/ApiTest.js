import { getUserTest } from './Testing/user';

  test('API Test', () => {
    const response = { json: jest.fn().mockResolvedValueOnce() };
    global.fetch = jest.fn().mockResolvedValueOnce(response);

    return getUserTest().then((data) => {
      console.log(JSON.stringify(data));
      //expect(data).toEqual();
    });
  });