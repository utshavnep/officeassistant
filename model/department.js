const mongoose = require("mongoose")


const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({


employeeid:{
type:String
},
departmentname:{
    type:String
},
departmentobjective:{
    type:String
},
headofdepartment:{
    type:String
},
salaryrange:{
    type:String
}

})

module.exports= mongoose.model("Department", DepartmentSchema);
