// Requiring our models
var db = require("../models");
var moment = require("moment");

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
        var date = req.body.date;
        var calories = req.body.calories;
        db.Day.create({
            date : date,
            calories :calories,
            AccountId : 1 //this needs to be replaced with real account number that should come from req.body
        }).then(function(dbDay) {
            console.log("day created successfully");
            res.json(dbDay);
        })
        .catch(function(err){
            console.log("createDay error");
            res.status(422).json(err);
        });
    },
    getNutritionInfo : function(req,res){
        console.log("getNutritionInfo route");
        db.Day.findAll({ 
            where : { date: moment().format("MM-DD-YYYY") }
        }, 
        {
            attributes: ['protein','carbs','fat'] 
        },{
            limit : 1
        })
        .then(function(obj){
            res.json(obj);
        });
    },
    calculateCalories : function(req,res) {
        //input will be protein,fats,carbs and create calories using those input
        console.log("calculateCalories route");
        //console.log(req.body);
        const carbsCalories = req.body.carbs * 4;
        const proteinCalories = req.body.protein * 4;
        const fatsCalories = req.body.fats * 9;
        const totalCalorieCount = carbsCalories + proteinCalories + fatsCalories;
        console.log("totalCalories: " + totalCalorieCount);
        db.Day.findOne({where: {date: req.body.date}})
        .then(function(obj) {
            console.log(obj);
            if(obj) {
                console.log("found");
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
                console.log("creating");
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
        db.Account.findOne({ where : {id: req.params.id} }).then(dbAccount => res.json(dbAccount ))
        .catch(err => res.status(422).json(err));
    },
    update : function(req,res) {
      console.log("apiController.update ");
      const data = req.body;
      console.log(data);
      const where = {where: {id: req.params.id}};
      if(data.bodyFat == null){
          console.log("need to calculate bodyFat");
        if(data.gender=="male"){
            data.bodyFat = (86.01 * Math.log10(parseFloat(data.waist) - parseFloat(data.neck))) - (70.041 * Math.log10(data.height)) + 36.76;
        }
        else{
            data.bodyFat = (163.205 * Math.log10(parseFloat(data.waist) + parseFloat(data.hip) - parseFloat(data.neck)) - 97.684 * Math.log10(data.height) - 78.387);
        }
        console.log("calculated body fat %: " + data.bodyFat);
    }   
        db.Account.update(data, where).then(data=>res.json(data));
    },
    remove : function(req,res) {
        console.log("api delete");
    },
    findById : function(req,res) {
        console.log("api findById");
        db.Account.findOne({ where : {id: req.params.id} }).then(dbAccount => res.json(dbAccount ))
        .catch(err => res.status(422).json(err));
    }
}