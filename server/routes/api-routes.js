const router = require("express").Router();
const { accountController, dayController } = require('../controllers')
const { account } = require('../calculations')
const { bcrypt } = require('../authorization')

router

  .get('/accts/:id', (req, res, next) => {
    accountController.getById(req.params.id, (data) => {
      res.json(data)
    })
  })

  .put('/accts/:id', account.calculatedStats, (req, res, next) => {
    accountController
      .updateAccount(req.params.id, req.body, (updatedAccount) => {
        res.json(updatedAccount);
      })
  })


  .get('/days/:userId', (req, res, next) => {
    dayController.getByuserId(req.params.userId, (data) => {
      res.json(data)
    })
  })

  .post('/days', (req, res, next) => {
    dayController.create(req.body, (day) => {
      res.json(day)
    })
  })

  // bcrypt post below
  .post("/accts", bcrypt.hashNCheck, (req, res, next) => {
    if (req.account_id) res.json({ id: req.account_id });
    else accountController.create(req.body, (acct) => res.json({ id: acct.id }))
  })





module.exports = router