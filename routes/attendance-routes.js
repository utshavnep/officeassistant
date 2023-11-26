const {getAttendance, putattendance} = require('../controller/attendancecontroller')
const express = require('express')
const arouter = express.Router()







arouter.post('/takeattendance',putattendance)
arouter.post('/getattendance', getAttendance )
arouter.get('*', function(req,res){
    res.json({message:"error"})
})
module.exports = arouter


