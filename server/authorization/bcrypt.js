const bcrypt = require('bcrypt')
const { Account } = require('../models')
const saltRounds = 10;

const hashNCheck =(req,res,next)=>{
  Account.findOne({where: {email: req.body.email}})
    .then(acct=>{
      if (acct) {
        bcrypt.compare(req.body.password, acct.password, (err, res) => {
          if(res) req.account_id = acct.id;
          next();
        });
      } else {
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
          req.body.password = hash;
          next()
        });
      }
  })
};
module.exports = {
  hashNCheck: hashNCheck
}