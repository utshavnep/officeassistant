const mongoose = require("mongoose")


const Schema = mongoose.Schema;

const BillingSchema = new Schema({

Customerinfo:{
type:String
},
dateofsales:{
    type:Date,
    default:Date.now
},
refrence:{
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
type:{
    type:String
},
cashpaid:{
    type:String
},
credit:{
    type:String
},
isCredit:{
    type:Boolean,
    
}
})

module.exports= mongoose.model("Billing", BillingSchema);