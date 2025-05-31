const express = require('express')
const { getAllUsers } =  require('../controllers/users')
 
const router = express.Router()




router.get('/get' , getAllUsers )

module.exports = router