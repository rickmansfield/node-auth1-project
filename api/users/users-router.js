const router = require('express').Router();
const { restricted } = require('../auth/auth-middleware');

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
  router.get('/', restricted, (req, res, next) => {
    res.json('users');
  });

  module.exports = router;
