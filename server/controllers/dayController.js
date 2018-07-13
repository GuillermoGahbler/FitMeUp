const {Day} = require('../models')

const getByuserId = (userId, cb)=>{
  return Day
  .findAll({where:{account_id: userId }})
  .then(days=>{
    const sortedDays = days.sort((a,b)=> a.date < b.date).slice(0,7)
   return cb(sortedDays)
  })
}

const create = (data,cb)=>{
return Day.create(data)
.then(day=>cb(day))
}

module.exports = {
  getByuserId:getByuserId,
  create:create
}