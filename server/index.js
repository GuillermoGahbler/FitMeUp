const express = require('express');
var bodyParser = require("body-parser");

const server = express();
const PORT = process.env.PORT || 3001;
const authRouter = require('./routes/authRoutes');
const apiRoutes = require('./routes/api-routes');
const authorization = require ('./authorization');
const db = require('./models');

server.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
  next();
})



// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
server.use(bodyParser.json());

server.use(express.static("public"));

server.use(authorization.initialize());
server.use(authorization.session());
server.use("/auth", authRouter);
server.use(apiRoutes);



db.sequelize.sync().then(function () {
  console.log('Database looks ok');
  server.listen(PORT, () => {
    console.log(`Site is live. Listening on http://localhost:${PORT}`);
  });
}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!");
});

