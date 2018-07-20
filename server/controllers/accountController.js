const {Account} = require('../models')

const getById = (account_id,cb) =>{
  return Account.findById(account_id)
  .then(account =>{

    cb({})
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