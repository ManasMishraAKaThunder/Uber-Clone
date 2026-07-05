const http = require('http');

const options = {
  hostname: 'localhost',
  port: 4000,
  path: '/users/profile',
  method: 'GET',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTQ5ZmMxYjAyNTZmYWNmMjRmODA4MGIiLCJpYXQiOjE3ODMyNTY1NTcsImV4cCI6MTc4MzI2MDE1N30.nOVRRZ5rFAJckrjLAyCCtYKgNAnmiFEFeAZY-_XMqCA'
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
