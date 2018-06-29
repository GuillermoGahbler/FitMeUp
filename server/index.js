const express = require('express');
const server = express();
const PORT = process.env.PORT || 3001;
const authRouter = require('./routes/authRoutes');
const authorization = require ('./authorization');

server.use(authorization.initialize());
server.use(authorization.session());
server.use("/auth", authRouter);

server.listen(PORT,()=>{
  console.log(`listening on http://localhost${PORT}`)
})

