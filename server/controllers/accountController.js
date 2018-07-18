const {Account} = require('../models')

const getById = (id,cb) =>{
  return Account.findById(id)
  .then(account =>{
    console.log(account);
    const values = account.dataValues;
    const {id,name,email,google_id,password,createdAt,updatedAt,...user} = values;
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