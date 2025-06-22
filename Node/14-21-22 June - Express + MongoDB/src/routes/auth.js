const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const User = require("../models/users");
const bcrypt = require("bcryptjs");
require('dotenv').config()


const JWT_SECRET = process.env.JWT_SECRET;


const generateToken = (userId) => {
    console.log(`userId:::` , userId)
    console.log(`JWT` , JWT_SECRET)
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "2d" });
};

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !password || !email) {
      return res.send({ message: "All fields are required" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);


    const data = await new User({ email, username, password: hashedPassword });
    await data.save();

    return res.send({ message: "user created succesfully", user: data });
  } catch (error) {
    console.log("error::::", error);
    if (error?.errorResponse?.errmsg.includes("duplicate key error")) {
      return res.send({ message: "Email already registered" });
    }
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const emailExist = await User.findOne({ email });
  
    if (!emailExist) {
      return res.status(401).send({ message: "Account Not Found" });
    }
  
    const isMatch = await bcrypt.compare(password, emailExist.password);
  
    if (!isMatch) {
      return res.send({ message: "Password Incorrect" });
    }
    console.log('Code is running , Pasword Matched .....')

    const token = generateToken(emailExist._id);

  
    console.log(`Token:::` , token)
  

    res.cookie('token' ,  token , {
        secure: true,
        maxAge: 2 * 24 * 60 * 60 * 1000
    })
  
    return res.send({
      message: "Login Success",
      user: { email: emailExist.email, username: emailExist?.username },
      token: token,
    });
  } catch(error) {
    return res.status(300).send({message: 'Login Failed' , error: error})
  }
});

module.exports = router;
