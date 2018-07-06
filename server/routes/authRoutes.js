const router = require('express').Router();
const passport = require('../authorization');


router.get('/google', passport.authenticate('google',{
  scope: ['profile','email']
}))

.get("/google/callback",
passport.authenticate('google',{failureRedirect: "/"}),
(req,res,next) => {
  // const id = req.user.user.dataValues.id
  res
  // .cookie('user', req.user.emails[0])
  .redirect('http://localhost:3000/options')
    // .cookie('isLoggedIN',true, {signed: true, maxAge: 1000 * 60 * 60* 10})
    // .cookie('id', id, {signed: true, maxAge: 1000 * 60 * 60 * 10})
    // .redirect(`/users/${id}`)
})

module.exports = router



