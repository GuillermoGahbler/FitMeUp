const {Account} = require('../models')

const getById = (id,cb) =>{
  return Account.findById(id)
  .then(account =>{
    const values = account.dataValues;

    const {id,name,email,google_id,createdAt,updatedAt,...user} = values;
    console.log(user)
    cb(user)
})
}
module.exports = {
  getById:getById

}