// Requiring our models
var db = require("../models");
const router = require('express').Router();


router.get('/accounts',function(req,res){
    console.log("inside /accounts route");
    db.Accounts.findAll({
        }).then(function(dbAccount) {
            res.json(dbAccount);
        });
});

router.get('/days',function(req,res){
    console.log("inside /days route");
    db.Days.findAll({

    }).then(function(dbDays){
        res.json(dbDays);
    });
});

module.exports = router;