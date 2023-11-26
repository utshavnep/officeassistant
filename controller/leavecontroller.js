const Leave = require("../model/leave")

const askforleave = async(req,res)=>{
    const { reason,employeeid}  = req.body
    
    try {
    const doc = new Leave({
        reason:reason,
        employeeid:employeeid
    })     
        
    await doc.save()
        return   res.status(202).send({ "status": "sucess", "message": doc })
        } catch (error) {
            return res.status(206).send({ "status": "failed", "message": "no match found" })   
        }



}

const seeleavedetails = async (req,res)=>{
    const {employeeid} = req.body
    try {
        const leave = await Leave.find({employeeid:employeeid})
        if(Object.keys(leave).length > 0){

            return   res.status(202).send({ "status": "sucess", "message": leave })
        }else{
            
    return   res.status(204).send({ "status": "sucess", "message": "noproductsold" })
        }
    } catch (error) {
        return res.status(206).send({ "status": "failed", "message": "no match found" })   
    }
}

exports.askforleave = askforleave
exports.seeleavedetails = seeleavedetails