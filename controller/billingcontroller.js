const Billing = require('../model/billing')

const Customerdetails = require("../model/customerdetails")



const checkcustomerbyphone = async(req,res)=>{
    const {phoneno} = req.body
    const phone = await Customerdetails.findOne({mobileno:phoneno}).select("_id")
    try {
        if(phone){
          return  res.status(202).send({ "status": "sucess", "message": phone })
        }else{
          return  res.status(202).send({ "status": "failed", "message": "no match found" })   
        }   
    } catch (error) {
      return  res.status(206).send({ "status": "failed", "message": "no match found" })     
    }
  
    
}


const checkcustomerbyname = async(req,res)=>{
    const {name} = req.body
    const phone = await Customerdetails.findOne({name:name}).select("_id")
    try {
        if(phone.length <! 1){
          return  res.status(202).send({ "status": "sucess", "message": phone })
        }else{
          return  res.status(202).send({ "status": "failed", "message": "no match found" })   
        }   
    } catch (error) {
      return  res.status(206).send({ "status": "failed", "message": "no match found" })     
    }
  
    
}

const addcustomerinfo =async(req,res)=>{
const {panno,mobileno,name,customerdescription,category,address} = req.body

    const phone = await Customerdetails.findOne({mobileno:mobileno}).select("_id")
try {
    if(phone){
      return  res.status(204).send({ "status": "failed", "message": "user already exists" })  
    }else{
        const doc = new Customerdetails({
            panno:panno,
            mobileno:mobileno,
            name:name,
            customerdescription:customerdescription,
            category:category,
            address:address
        })
        await doc.save()

        const saved_user = await Customerdetails.findOne({ mobileno:mobileno })

     return   res.status(202).send({ "status": "sucess", "message": saved_user })
    }
} catch (error) {
   return res.status(206).send({ "status": "failed", "message": "no match found" })  
}
    
}


const addbilling = async(req,res)=>{
    const {customerinfo,refrence,itemlist,subtotal,discount,taxableamount,vat,grandtotal,type,cashpaid,credit} = req.body
    try {
        const doc = new new Billing (
            {
                Customerinfo:customerinfo,
                refrence:refrence,
                itemlist:itemlist,
                subtotal:subtotal,
                discount:discount,
                taxableamount:taxableamount,
                vat:vat,
                grandtotal:grandtotal,
                type:type,
                cashpaid:cashpaid,
                credit:credit
            }
            
        )
        await doc.save()
        const savedbilling = await Billing.findOne({refrence:refrence})
        
        return   res.status(202).send({ "status": "sucess", "message": savedbilling })
    } catch (error) {
        return res.status(206).send({ "status": "failed", "message": "no match found" }) 
    }
}


const modifypayment = async(req,res)=>{
    const {type,cashpaid,credit,iscredit,id} = req.body
    try {
         
    const payment = await Billing.findByIdAndUpdate(id,
        {
        cashpaid:cashpaid,
        type:type,
        credit:credit,
        iscredit:iscredit
    })       

    return   res.status(202).send({ "status": "sucess", "message": payment })
    } catch (error) {
        return res.status(206).send({ "status": "failed", "message": "no match found" })   
    }
}

const getbillsbyrecord = async (req,res)=>{
    const {refrence} = req.body;
    try {
        const bill = await Billing.find({refrence:refrence})
        if(bill.length <!1){

            return   res.status(202).send({ "status": "sucess", "message": bill })
        }else{
            
    return   res.status(202).send({ "status": "sucess", "message": "noproductsold" })
        }
    } catch (error) {
        return res.status(206).send({ "status": "failed", "message": "no match found" })      
    }
}



