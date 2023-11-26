

const mongoose = require("mongoose")


const Schema = mongoose.Schema;

const CashoutSchema = new Schema({
    employeeid:{
        type:String
    },
    cashamount:{
        type:Number
    },
    reason:{
        type:String
    },
    dateofpayment:{
        type:Date,
        default:Date.now
    },
    approved:{
        type:Boolean,
        default:false
    }
})


module.exports= mongoose.model("Cashout", CashoutSchema);