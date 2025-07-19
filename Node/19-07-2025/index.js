const express = require('express')

const PrismaClient = require('@prisma/client')


const app = express()

const prisma = new PrismaClient()


app.listen(5000 , ()=> {
    console.log(`Server is running on PORT 5000`)
})