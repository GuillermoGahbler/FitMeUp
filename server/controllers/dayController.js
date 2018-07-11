const {Day} = require('../models')

const getByuserId = (userId, cb)=>{
  return Day.findAll({where:{account_id: userId } })
  .then(days=>cb(days))
}

module.exports = {
  getByuserId:getByuserId
}