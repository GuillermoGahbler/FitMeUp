const router = require("express").Router();
const {accountController, dayController} = require('../controllers')

router

.get('/accts/:id', (req, res,next)=>{
  accountController.getById(req.params.id, (data)=>{
    res.json(data)
  })
})

.put('/accts/:id', (req,res,next)=>{
  accountController
    .updateAccount(req.params.id,req.body,(updatedAccount)=>{
      res.json(updatedAccount);
    })
})


.get('/days/:userId', (req, res, next)=>{
 dayController.getByuserId(req.params.userId, (data)=>{
   res.json(data)
 })
})

.post('/days',(req,res,next)=>{
  dayController.create(req.body,(day)=>{
    res.json(day)
  })
})

// const apiController = require("../controller/apiController");

 
// router.route("/accts")
//   .get(apiController.getAcct)
//   .post(apiController.create);

 
// router
//   .route("/accts/:id")
//   .get(apiController.findById)
//   .put(apiController.update)
//   .delete(apiController.remove);

// router.route("/createDay")
//   .get(apiController.createDay)
//   .post(apiController.createDay);
  
// router.route("/calculateCalories")
//   .get(apiController.calculateCalories)
//   .post(apiController.calculateCalories);



module.exports = router;