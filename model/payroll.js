const mongoose = require("mongoose")


const Schema = mongoose.Schema;

const PayrollSchema = new Schema({
empoyeeid:{
    type:String
},
jobid:{
    type:String
},
salaryid:{
    type:String
},
leaveid:[{
    type:String
}],
date:{
    type:Date,
    default:Date.now()
},
report:{
    type:String
},
total_amount:{
    type:String
}


})

module.exports= mongoose.model("Payroll", PayrollSchema);