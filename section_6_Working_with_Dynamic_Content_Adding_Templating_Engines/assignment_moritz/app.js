const bodyParser = require('body-parser');
const express = require('express');

const app = express();

// set templating/view engine to EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.render('index', {
    pageTitle: 'Add user name',
  });
});

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
