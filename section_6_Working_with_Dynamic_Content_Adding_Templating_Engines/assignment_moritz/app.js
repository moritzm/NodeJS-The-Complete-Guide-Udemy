const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const users = [];
// set templating/view engine to EJS
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.render('index', {
    pageTitle: 'Add user name',
  });
});

app.get('/users', (req, res, next) => {
  res.render('users', {
    pageTitle: 'User',
    users: users,
  });
});

app.post('/add-user', (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect('/users');
});

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
