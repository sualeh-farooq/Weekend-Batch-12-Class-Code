const getAllUsers= (req, res) =>{
        res.send([{name: 'Henry'}])
}   


module.exports = {getAllUsers}