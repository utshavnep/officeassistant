const {addExpense} = require('../controller/expensecontroller')
const express = require('express')
const exrouter = express.Router()








exrouter.post('/addexpense', addExpense )
exrouter.get('*', function(req,res){
    res.json({message:"error"})
})
module.exports = exrouter


