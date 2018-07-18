const { Week } = require('../models')

const getByAccount = (account_id, cb) => {
  return Week.findAll({ where: { account_id: account_id } })
    .then(weeks => {
      const sortedWeeks = weeks.sort((a,b) =>a.updatedAt > b.updatedAt)   
      cb(sortedWeeks)
    })

}

const create = (week, cb) => Week.create(week).then(week => cb(week))




module.exports = {
  getByAccount: getByAccount,
  create: create
}