const mongoose = require("mongoose")


const Schema = mongoose.Schema;

const PaymentinputSchema = new Schema({


employeeid:{
    type:String
},
bankaccount:{
    type:String
},
paymentreceivername:{
    type:String
},
amount:{
    type:String
},
dateofinput:{
    type:Date,
    default: Date.now
},
refrence:{
    type:String
},
isverified:{
    type:Boolean,
    default:false
}

})

module.exports= mongoose.model("Paymentinput", PaymentinputSchema);