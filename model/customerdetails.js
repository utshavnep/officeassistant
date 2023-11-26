const mongoose = require("mongoose")


const Schema = mongoose.Schema;

const CustomerdetailSchema = new Schema({

panno:{
        type:Number
 },
mobileno:{
    type:Number
},
name:{
    type:String
},
customerdescription:{
    type:String
},
category:{
    type:String
},
address:{
    type:String
},

})

module.exports= mongoose.model("Stock", CustomerdetailSchema);