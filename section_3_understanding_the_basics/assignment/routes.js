const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Welcome</title></head>');
    res.write(
      '<body><h1>Hello my friend!</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      res.statusCode = 302;
      res.setHeader('Location', '/');
      console.log(message);
      return res.end();
    });
  }

  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Welcome</title></head>');
    res.write(
      '<body><h1>List of users!</h1><ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li></ul></body>'
    );
    res.write('</html>');
    return res.end();
  }
};

module.exports.handler = requestHandler;
