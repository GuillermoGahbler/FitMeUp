const express = require('express');
const server = express();
const PORT = process.env.PORT || 3001

server.use((req,res,next)=>{
  res.send('This is the home demo route')
})

server.listen(PORT,()=>{
  console.log(`listening on http://localhost${PORT}`)
})