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
    createDay : function(req,res) {
        //input will be calories
        console.log("createDay route");
        console.log(req);
        //console.log(req.body);
        console.log(req.params);

    },
    calculateCalories : function(req,res) {
        //input will be protein,fats,carbs and create calories using those input
        console.log("calculateCalories route");
        console.log(req.body);
        //console.log(req);
        //console.log(req.body);

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