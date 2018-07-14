const router = require('express').Router();
const passport = require('../authorization');


router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

  .get("/google/callback",
    passport.authenticate('google', { failureRedirect: "/" }),
    (req, res, next) => {
      const userId =req.user.dataValues.id
      res.redirect(`/#/accts/${userId}`)

    })

module.exports = router



