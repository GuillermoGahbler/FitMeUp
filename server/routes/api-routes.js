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


module.exports = router;