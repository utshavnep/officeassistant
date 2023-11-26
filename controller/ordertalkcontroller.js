let OrderInfo = require('../model/orderinfo')


const addorderinfo = async(req,res)=>{
    const {customercredentials,customerinfo,refrence,location, latitude,longitude,orderrates} = req.body
let result;
    try {
result = new OrderInfo({
    employeelocation:{
        type:'Point',
        coordinates:[parseFloat(longitude),parseFloat(latitude)]
    },
    costumercredentials:customercredentials,
    Customerinfo:customerinfo,
    refrence:refrence,
    location:location,
    orderrates:orderrates
})    

await result.save()
return   res.status(202).send({ "status": "sucess", "message": result })
} catch (error) {
    return res.status(206).send({ "status": "failed", "message": "no match found" })    
}

}

exports.addorderinfo = addorderinfo