export default function createRequest(method, data, action) {
  if (method !== 'POST') return;

  const url = `http://localhost:5050?method=${action}`;
  const options = {
    method,
    body: data,
  };

  let responseData;
  fetch(url, options)
    .then((response) => {
      if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
      return response.json();
    })
    .then((result) => {
      responseData = result;
      // console.log('responseData', result);
      // return result;
    });

  console.log('responseData', responseData);
}
