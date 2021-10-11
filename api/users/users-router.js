const router = require('express').Router();
const { restricted } = require('../auth/auth-middleware');
const User = require('./users-model');

/**
  [GET] /api/users

  This endpoint is RESTRICTED: only authenticated clients
  should have access.

  response:
  status 200
  [
    {
      "user_id": 1,
      "username": "bob"
    },
    // etc
  ]

  response on non-authenticated:
  status 401
  {
    "message": "You shall not pass!"
  }
 */
  // router.get("/", restricted, (req, res, next) => {
  //   Users.find()
  //     .then(users => {
  //       res.status(200).json(users);
  //     })
  //     .catch(next);
  // });
  
  //STUB TO TEST
  router.get('/', restricted, async (req, res, next) => {
    try {
      const users = await User.find();
      res.json(users); //status code defaults to 200
    } catch (error) {
      next(error);
    }
  });

  module.exports = router;
