const express = require('express');
const server = express();
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const authRouter = require('./routes/authRoutes');
const authorization = require ('./authorization');
const db = require('./models');

server.use(express.static("public"));
require('./routes/api-routes.js')(server);

server.use(authorization.initialize());
server.use(authorization.session());
server.use("/auth", authRouter);

//server.use(cors());

db.sequelize.sync().then(function() {
  server.listen(PORT,()=>{
    console.log(`listening on http://localhost:${PORT}`)
  })
  
});

