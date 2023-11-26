const mongoose = require("mongoose")


const Schema = mongoose.Schema;

const StockSchema = new Schema({

purchaseid:[{
    type:String
}],
stockname:{
    type:String
},
stockdescription:{
    type:String
},
category:{
    type:String
},
stocktype:{
    type:String
},
totalquantity:{
    type:Number
},
unit:{
    type:Number
},
openedunit:{
    type:Number
}

})

module.exports= mongoose.model("Stock", StockSchema);