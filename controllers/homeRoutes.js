const router = require('express').Router();
const path = require('path');
const { Info } = require('../models');
const withAuth = require('../utils/auth');
const exphbs = require('express-handlebars');

router.get('/', async (req, res) => {
  res.render('home');
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/profile', withAuth, (req, res) => {
  res.render('profile', {logged_in: req.session.logged_in});
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
