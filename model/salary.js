const mongoose = require("mongoose")


const Schema = mongoose.Schema;

const SalarySchema = new Schema({

jobid:{
type:String
},
amount:{
    type:Number
},
anual:{
    type:Number
},
bonus:{
    type:String
},
bonuspercent:{
    type:String
}


})


module.exports= mongoose.model("Salary", SalarySchema);