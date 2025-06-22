const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/users')

const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = async (req , res , next) =>{


    try {
            const authHeader = req.headers.authorization


            if(!authHeader || !authHeader.startsWith('Bearer ')){
                return res.status(404).send({message: 'Unauthorized! Access Denied'})
            }

            const token = authHeader.split(' ')[1]

            const decoded = jwt.verify(token , JWT_SECRET)
            
            const userExist = await User.findById(decoded.userId).select("-password")

            if(!userExist) {
                return res.send({message: 'User not found'})
            }
        
            req.user = userExist

            next()


    } catch (error) {
        return res.send({message: 'Invalid Token'})
    }

}

module.exports = verifyToken