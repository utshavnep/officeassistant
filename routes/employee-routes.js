const {registeruser, login, loggedUser, findById, getall, checkuser, deleteUser, changepassword} = require('../controller/employeecontroller')
const express = require('express')
const {checkUserAuth} = require('../helper/employehelper')
const urouter = express.Router()




urouter.use('/loggeduser', checkUserAuth)



urouter.post('/register',registeruser)
urouter.post('/login', login )
urouter.post('/changepassword', changepassword)
urouter.post('/deleteuser', deleteUser)
urouter.get('/loggeduser', loggedUser)
urouter.get('/usere/:id', findById)
urouter.get('/all', getall)




urouter.post('/checkuserauth', checkuser)
urouter.get('*', function(req,res){
    res.json({message:"error"})
})
module.exports = urouter


