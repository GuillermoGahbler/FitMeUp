const router = require('express').Router();
const {authorization} = require('../authorization');


router.get('/google', authorization.authenticate('google', {
  scope: ['profile', 'email']
}))

  .get("/google/callback",
    authorization.authenticate('google', { failureRedirect: "/" }),
    (req, res, next) => {
      const userId =req.user.dataValues.id
      res.redirect(`/#/accts/${userId}`)

    })

module.exports = router



