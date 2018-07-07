// Requiring our models
var db = require("../models");

module.exports = {
    create: function(req, res) {
        console.log("create");
        db.Days
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    getAcct : function(req,res) {
        console.log("getAcct route");
        db.Account.findAll({ }).then(dbAccount => res.json(dbAccount ))
        .catch(err => res.status(422).json(err));
    },
    update : function(req,res) {
        console.log("api update");
    },
    remove : function(req,res) {
        console.log("api delete");
    },
    findById : function(req,res) {
        console.log("api findById");
    }
}