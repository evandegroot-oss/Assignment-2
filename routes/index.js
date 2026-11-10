// Imports the Express framework so it can be used to create routes.
var express = require('express');

// Creates a router to organize and manage the website's page routes.
var router = express.Router();

// The root route displays the Home page.
router.get('/', function(req, res, next) {
  res.render('layouts/layout', { title: 'Home', page: 'index' });
});

// Displays the Home page when the user visits /home.
router.get('/home', function(req, res, next) {
  res.render('layouts/layout', { title: 'Home', page: 'index' });
});

// Displays the About Me page.
router.get('/about', function(req, res, next) {
  res.render('layouts/layout', { title: 'About Me', page: 'about' });
});

// Displays the Projects page.
router.get('/projects', function(req, res, next) {
  res.render('layouts/layout', { title: 'Projects', page: 'projects' });
});

// Displays the Contact Me page.
router.get('/contact', function(req, res, next) {
  res.render('layouts/layout', { title: 'Contact Me', page: 'contact' });
});

// Makes the router available to the main Express application.
module.exports = router;
