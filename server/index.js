const express = require('express');
const server = express();
const PORT = process.env.PORT || 3001;
const authRouter = require('./routes/authRoutes');
const authorization = require('./authorization');
const db = require('./models/index');

server.use(authorization.initialize());
server.use(authorization.session());
server.use("/auth", authRouter);

db.sequelize.sync({ force: true }).then(function () {
  console.log('Database looks ok');
  server.listen(PORT, () => {
    console.log(`Site is live. Listening on http://localhost:${PORT}`);
  });
}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!");
});

// server.listen(PORT,()=>{
//   console.log(`listening on http://localhost${PORT}`)
// })

