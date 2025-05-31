const express = require('express')
const { getAllUsers, deleteUser, updateUser, createNewUser } = require('../controllers/users')


const router = express.Router()

router.get('/' , getAllUsers )
router.delete('/:id' , deleteUser)
router.put('/:id' , updateUser)
router.post('/:id' , createNewUser)

module.exports = router