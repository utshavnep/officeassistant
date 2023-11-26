const {askforleave, seeleavedetails} = require('../controller/leavecontroller')
const express = require('express')
const lrouter = express.Router()








lrouter.post('/askforleave', askforleave )
lrouter.post('/seeleavedetails', seeleavedetails )
lrouter.get('*', function(req,res){
    res.json({message:"error"})
})
module.exports = lrouter


