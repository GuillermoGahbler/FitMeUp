const router = require("express").Router();
const apiController = require("../controller/apiController");

// Matches with "/accts"
router.route("/accts")
  .get(apiController.getAcct)
  .post(apiController.create);

// Matches with "/accts/:id"
router
  .route("/accts/:id")
  .get(apiController.findById)
  .put(apiController.update)
  .delete(apiController.remove);

router.route("/createDay")
  .get(apiController.createDay)
  .post(apiController.createDay);

router.route("/calculateCalories")
  .get(apiController.calculateCalories)
  .post(apiController.calculateCalories);

router.route("/getNutritionInfo")
.get(apiController.getNutritionInfo);

module.exports = router;