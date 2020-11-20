const path = require('path');
const express = require('express');
const router = express.Router();

// /admin/users => GET
router.get('/users', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

// /admin/users => POST
router.post('/users', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
