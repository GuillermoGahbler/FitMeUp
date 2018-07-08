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
        const carbsCalories = req.body.carbs * 4;
        const proteinCalories = req.body.protein * 4;
        const fatsCalories = req.body.fats * 9;
        const totalCalorieCount = carbsCalories + proteinCalories + fatsCalories;
        db.Day.findOne({where: {date: req.body.date}})
        .then(function(obj) {
            console.log(obj);
            if(obj) {
                db.Day.update({
                    date: req.body.date,
                    carbs: carbsCalories,
                    protein: proteinCalories,
                    fat: fatsCalories,
                    calories: totalCalorieCount
                }).success(function(obj) {
                    console.log(obj);
                });
            } else {
                db.Day.create({
                    AccountId: 1,
                    date: req.body.date,
                    carbs: carbsCalories,
                    protein: proteinCalories,
                    fat: fatsCalories,
                    calories: totalCalorieCount
                }).then(function (obj){
                    console.log(obj);
                })
            }
        })
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