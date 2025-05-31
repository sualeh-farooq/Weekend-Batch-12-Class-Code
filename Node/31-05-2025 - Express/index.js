const express = require("express");
const rateLimiter = require('express-rate-limit')
const userRoutes = require('./routes/users')

require('dotenv').config() // env configure within the app


const app = express();

const limiter = rateLimiter({
  windowMs: 1 * 60 * 1000, 
  limit: 2,
})

app.use(limiter)
app.use(express.json());
app.use('/users' , userRoutes)



app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
