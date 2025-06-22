const express = require('express')
const mongoose = require('./db/config')
const User = require('./models/users')
const authRoutes = require('./routes/auth')
const verifyToken = require('./middleware/auth')

require('dotenv').config()
const app = express()
app.use(express.json())



mongoose.connection.on("open" , ()=>{
    console.log(`MongoDB Database Connected`)
})


app.post('/api/user/create'  , async (req , res) => {
   try {
    const data = await User(req.body)
    data.save()
    return res.send({success: true , message: 'User Added Successfully'})
   
} catch (error) {
    console.log(error)
    return res.send({success: false, error: error})
   }

})



app.put('/api/user/update/:id'  , async(req , res) => {
    try {
        const {id} = req.params
        const {email} = req.body
        const data = await User.findByIdAndUpdate(id , {email} )
        console.log('data:::' , data)
        return res.send({message: 'user updated successfully' , user: data})

    } catch (error) {
        
    }
})




app.get('/api/user/get'   , verifyToken ,    async (req,res)=>{
    try {
            const data = await User.find()
            console.log(data)
            return res.send({success: true, users: data})

    } catch (error) {
        
    }
})



app.use('/auth' ,  authRoutes)



app.listen(5000 , () => {
    console.log(`Server is Running on Port 5000`)
})