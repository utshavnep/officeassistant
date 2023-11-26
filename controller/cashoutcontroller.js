var Cashout = require('../model/cashout')

const requestforcashout = async(req,res)=>{
    const {reason,cashamount,employeeid} = req.body
    try {
        const doc = new Cashout({
            reason:reason,
            cashamount:cashamount,
            employeeid:employeeid
        })
      await  doc.save()
        
            return  res.status(202).send({ "status": "sucess", "message": doc })
    } catch (error) {
        return res.status(206).send({ "status": "failed", "message": "no match found" })    
    }
}


const cashout = async (req,res)=>{
    const {employeeid} = req.body
    try {
        const cashout = await Cashout.find({employeeid:employeeid})
        if(Object.keys(cashout).length > 0){
            return  res.status(202).send({ "status": "sucess", "message": cashout})
        }else{
            return  res.status(204).send({ "status": "failed", "message": "not found " })  
        }
    } catch (error) {
        return res.status(206).send({ "status": "failed", "message": "no match found" })    
    }
}


exports.requestforcashout = requestforcashout
exports.cashout = cashout