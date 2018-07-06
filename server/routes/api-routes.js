// Requiring our models
var db = require("../models");

module.exports = function(app) {
    app.get('/accounts',function(req,res){
        console.log("inside /accounts route");
        db.Accounts.findAll({
         }).then(function(dbAccount) {
             res.json(dbAccount);
         });
    });
};