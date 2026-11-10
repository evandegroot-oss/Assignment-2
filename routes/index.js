var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layouts/layout', { title: 'Home', page: 'index' });
});

/* GET home page using /home. */
router.get('/home', function(req, res, next) {
  res.render('layouts/layout', { title: 'Home', page: 'index' });
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('layouts/layout', { title: 'About Me', page: 'about' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('layouts/layout', { title: 'Projects', page: 'projects' });
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('layouts/layout', { title: 'Contact Me', page: 'contact' });
});

module.exports = router;
