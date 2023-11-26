const Expense = require('../model/expense')

const addExpense = async(req,res)=>{
    const {employeeid,refrenceno,subtotal,discount,taxableamount,vat,grandtotal, itemlist} = req.body

    try {

        const doc = new Expense({
            employeeid:employeeid,
            refrenceno:refrenceno,
            itemlist:itemlist,
            subtotal:subtotal,
            discount:discount,
            taxableamount:taxableamount,
            vat:vat,
            grandtotal:grandtotal
        })
        await doc.save()

        return  res.status(202).send({ "status": "sucess", "message": doc })
    } catch (error) {
        return res.status(206).send({ "status": "failed", "message": "no match found" })    
    }
}



exports.addExpense = addExpense