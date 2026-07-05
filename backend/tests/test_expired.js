const http = require('http');

const options = {
  hostname: 'localhost',
  port: 4000,
  path: '/users/profile',
  method: 'GET',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTQ5ZmMxYjAyNTZmYWNmMjRmODA4MGIiLCJpYXQiOjE3ODMyNDA2MDcsImV4cCI6MTc4MzI0NDIwN30.1icYMvgKCaXkcGgTV0oCgOT62MUXC8bXgoovnRNkPX4'
  }
};

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();
