const mongoose = require("mongoose")


const Schema = mongoose.Schema;

const AttendanceSchema = new Schema({


employeeid:{
    type:String
},
date:{
    type:Date,
    default:Date.now
},
verified:{
    type:Boolean,
    default:false
},
remarks:{
    type:String
},
islate:{
    type:Boolean,
    default:true
}

})

module.exports= mongoose.model("Attendance", AttendanceSchema);