const {addpaymentinput} = require('../controller/paymentinputcontroller')
const express = require('express')
const pirouter = express.Router()








pirouter.post('/addpaymentinput', addpaymentinput )
pirouter.get('*', function(req,res){
    res.json({message:"error"})
})
module.exports = pirouter


