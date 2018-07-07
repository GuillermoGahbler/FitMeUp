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
        console.log(req.body);
    },
    calculateCalories : function(req,res) {
        //input will be protein,fats,carbs and create calories using those input
        console.log("calculateCalories route");
        console.log(req.body);
        var fat = req.body.fat * 9;
        var carbs = req.body.carbs * 4;
        var protein = req.body.protein * 4;
        var totalCalories = fat + carbs + protein;

        /*db.Days.create().then(dbDay => res.json(dbDay))
        .catch(err => res.status(422).json(err));*/
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