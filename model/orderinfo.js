const mongoose = require("mongoose")


const Schema = mongoose.Schema;

const OrderinfoSchema = new Schema({
costumercredentials:{
type:String
},
Customerinfo:{
type:String
},
dateoftalk:{
    type:Date,
    default:Date.now
},
refrence:{
    type:String
},
location:{
    type:String
},
orderrates:{
type:String
},
employeelocation:{
    type:{type:String, enum:['Point'], required: true  },
    coordinates:[Number]
,}

})
OrderinfoSchema.index({employeelocation:"2dsphere"})

module.exports= mongoose.model("Orderinfo", OrderinfoSchema);