export default async function createRequest(method, data, action) {
  if (method === 'GET') {
    const result = await fetch(`http://localhost:5050/?method=${action}`);
    const json = await result.json();
    console.log(json);
  }

  if (method === 'POST') {
    const result = await fetch(`http://localhost:5050/?method=${action}`, {
      method,
      body: data,
    });
    const json = await result.json();
    console.log(json);
  }

  if (method === 'DELETE') {
    const result = await fetch(`http://localhost:5050/?method=${action}&id=${data}`, {
      method,
      // body: data,
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // },
    });
    const json = await result.json();
    console.log(json);
  }



  /*if (method !== 'POST') return;

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

  console.log('responseData', responseData);*/
}
