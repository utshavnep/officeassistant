const mongoose = require("mongoose")


const Schema = mongoose.Schema;

const LeaveSchema = new Schema({
    employeeid:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    reason:{
        type:String
    },
    isapproved:{
        type:Boolean,
        default:false
    }
})


module.exports= mongoose.model("leave", LeaveSchema);