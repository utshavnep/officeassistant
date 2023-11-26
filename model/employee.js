const mongoose = require("mongoose")


const Schema = mongoose.Schema;


const EmployeeSchema = new Schema({
name:{
        type:String,      
    },
 emailid:{
        type:String
    },
phoneno:{
    type:Number
},
password:{
    type: String
},
citizenshipno:{
    type:String
},
placeofissue:{
    type:String
},
dateofissue:{
    type:String
},
panno:{
    type:String
},
bankaccountno:{
    type:String
},
bankaccountname:{
    type:String
},
branch:{
    type:String
},  
degisnation:{
    type:String
},
gender:{
    type:String
},
dateofbirth:{
    type:Date
},
fulltime:{
    type:Boolean
},

    



    
})



module.exports= mongoose.model("Employee", EmployeeSchema);