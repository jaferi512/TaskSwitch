export async function getUserTest() {
  try {
    const response = await fetch('https://api.agify.io/?name=m', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    });
    return await response.json();
  } catch (reject) {
    return console.log(reject);
  }
}