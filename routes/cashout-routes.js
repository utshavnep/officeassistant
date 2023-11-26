const {requestforcashout, cashout} = require('../controller/cashoutcontroller')
const express = require('express')
const corouter = express.Router()







corouter.post('/request',requestforcashout)
corouter.post('/details', cashout )
corouter.get('*', function(req,res){
    res.json({message:"error"})
})
module.exports = corouter


