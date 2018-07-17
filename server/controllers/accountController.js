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



 

const updateAccount = (accountId,data,cb) =>{
 return Account.update(data,{where:{id:accountId}})
 .then(updateAccount => cb(updateAccount))
}


const create = (acct,cb) => Account.create(acct).then(acct=>cb(acct)) 




module.exports = {
  getById:getById, 
  updateAccount: updateAccount,
  create : create
}