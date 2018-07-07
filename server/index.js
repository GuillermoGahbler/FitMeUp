const express = require('express');
const server = express();
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const authRouter = require('./routes/authRoutes');
const apiRoutes = require('./routes/api-routes');
 
const authorization = require ('./authorization');
const db = require('./models');

server.use(express.static("public"));

server.use(authorization.initialize());
server.use(authorization.session());
server.use("/auth", authRouter);

server.use("/days",apiRoutes);

 
db.sequelize.sync().then(function () {
  console.log('Database looks ok');
  server.listen(PORT, () => {
    console.log(`Site is live. Listening on http://localhost:${PORT}`);
  });
}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!");
});

