const Paymentinput = require('../model/paymentinput')

const addpaymentinput = async(req,res)=>{
    const {employeeid,bankaccount,paymentreceivername,amount,refrence} = req.body
let payment;
try {
    payment = new Paymentinput({
        employeeid:employeeid,
        bankaccount:bankaccount,
        paymentreceivername:paymentreceivername,
        amount:amount,
        refrence:refrence
    })

   await payment.save()
   return   res.status(202).send({ "status": "sucess", "message": payment })

} catch (error) {
    return res.status(206).send({ "status": "failed", "message": "no match found" })    
}
}

exports.addpaymentinput = addpaymentinput