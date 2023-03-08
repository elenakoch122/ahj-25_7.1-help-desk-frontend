export default async function createRequest(options) {
  if (options.method === 'GET') {
    const result = await fetch(`http://localhost:5050/?method=${options.action}`);
    const json = await result.json();
    console.log(json);
  }

  if (options.method === 'POST') {
    const result = await fetch(`http://localhost:5050/?method=${options.action}`, {
      method: options.method,
      body: options.data,
    });
    const json = await result.json();
    console.log(json);
    options.callback(json);
  }

  if (options.method === 'DELETE') {
    const result = await fetch(`http://localhost:5050/?method=${options.action}&id=${options.data}`, {
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await result.json();
    console.log(json);
  }
}


/*export default async function createRequest(method, data, action) {
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
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await result.json();
    console.log(json);
  }
}*/
