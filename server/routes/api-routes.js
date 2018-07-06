// Requiring our models
var db = require("../models");

module.exports = function(app) {
    app.get('/account',function(req,res){
        console.log("inside /accounts route");
        db.Account.findAll({
         }).then(function(dbAccount) {
             res.json(dbAccount);
         });
    });
};