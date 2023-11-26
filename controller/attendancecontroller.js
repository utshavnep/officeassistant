const Attendance = require('../model/attendance')


const putattendance = async (req,res)=>{
    const {employeeid} = req.body
    let result
 
    try {
        result = new Attendance({
            employeeid:employeeid
        })
        await result.save()
   return   res.status(202).send({ "status": "sucess", "message": result })
    } catch (error) {
        return res.status(206).send({ "status": "failed", "message": "no match found" }) 
    }
}

const getAttendance = async (req,res)=>{
    const {employeeid} = req.body
    try {
        const attendance = await Attendance.find({employeeid:employeeid})
   
        if(Object.keys(attendance).length > 0){
            return  res.status(202).send({ "status": "sucess", "message": attendance})
        }else{
            return  res.status(204).send({"status": "failed", "message": "not found "})  
        }
      
    } catch (error) {
        return res.status(206).send({ "status": "failed", "message": "no match found" }) 
    }}
    

    exports.getAttendance = getAttendance
    exports.putattendance = putattendance