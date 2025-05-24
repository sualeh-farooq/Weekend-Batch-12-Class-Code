const express = require("express");
const userRoutes = require('./routes/users')

const app = express();

app.get("/", (req, res) => {
  res.send("Server is Running Properly in Port 500");
});


app.use('/users' , userRoutes)

app.use((req, res, next) => {
  req.user = "John";
  next();
});

app.use((req, res, next) => {
  console.log(req.user);
});

app.listen(5000, () => {
  console.log("Server is Running on Port 5000");
});
