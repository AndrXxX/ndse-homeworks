const express = require('express');
const router = express.Router();
const passport = require( 'passport');
const handlers = require('./handlers');
const signupMiddleware = require('../../middleware/signup');
const authMiddleware = require('../../middleware/apiAuth');

router.post('/login',
  passport.authenticate('local'),
  handlers.user.login,
);

router.post('/signup',
  signupMiddleware,
  handlers.user.signup,
);

router.post('/logout',
  handlers.user.logout,
);

router.get('/me',
  authMiddleware,
  handlers.user.info,
);

module.exports = router;
