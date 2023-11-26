const mongoose = require("mongoose")


const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({


employeeid:{
    type:String
},
refrenceno:{
    type:String
},
itemlist:{
    type:Array
},
subtotal:{
    type:Number
},
discount:{
    type:Number
},
taxableamount:{
    type:Number
},
Vat:{
    type:Number
},
grandtotal:{
    type:Number
},

isApproved:{
    type:Boolean,
    default:false
},
dateofexpense:{
    type:Date,
    default:Date.now
}


})

module.exports= mongoose.model("Expense", ExpenseSchema);