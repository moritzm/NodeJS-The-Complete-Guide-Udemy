const http = require('http');
const express = require('express');

const app = express();

// app.use('/', (req, res, next) => {
//   console.log('This will always run!');
//   next();
// });

// app.use('/', (req, res, next) => {
//   console.log('This is another middleware.');
//   res.send('<h1>Hello to my server!</h1>');
// });

app.use('/add-user', (req, res, next) => {
  console.log('Add user endpoint is called!');
  res.send('<h1>You are in the add user endpoint!</h1>');
});

app.use('/', (req, res, next) => {
  console.log('Default middleware.');
  res.send('<h1>Hello to my server!</h1>');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
