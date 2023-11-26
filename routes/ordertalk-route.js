const {addorderinfo} = require('../controller/ordertalkcontroller')
const express = require('express')
const otrouter = express.Router()








otrouter.post('/addorderinfo', addorderinfo )
otrouter.get('*', function(req,res){
    res.json({message:"error"})
})
module.exports = otrouter


