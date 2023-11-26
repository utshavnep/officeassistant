const mongoose = require("mongoose")


const Schema = mongoose.Schema;

const PurchaseSchema = new Schema({

Customerinfo:{
type:String
},
dateofsales:{
    type:Date
},
refrence:{
    type:String
},
itemlist:[{
    stockname:{
        type:String
    },
    
    totalquantity:{
        type:Number
    },
    rate:{
        type:Number
    },
    amount:{
    type:Number
    }
}],
subtotal:{
    type:Number
},
discount:{
    type:Number
},
Taxableamount:{
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

module.exports= mongoose.model("Billing", PurchaseSchema);