const Employee = require('../model/employee')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')









const registeruser = async (req,res,next) =>{
 const {phoneno, password, password_confirmation, name, emailid,citizenshipno,
    placeofissue, dateofissue,panno,bankaccountno, bankaccountname,branch, degisnation, department} = req.body
const user = await Employee.findOne({phoneno}) ;
if(user) {
  return  res.json({message:'user already exists', status:'failed'})
}
else{
   if(password === password_confirmation){
   try {
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(password,salt)
    const doc = new Employee({
        name: name,
        password:hashpassword,
        emailid:emailid,
        phoneno:phoneno,
        citizenshipno:citizenshipno,
        placeofissue:placeofissue,
        dateofissue:dateofissue,
        panno:panno,
        bankaccountno:bankaccountno,
        bankaccountname:bankaccountname,
        branch:branch,
        degisnation:degisnation, 
        department:department
    })
    await doc.save()

   
    const saved_user = await Employee.findOne({ phoneno: phoneno })
    // Generate JWT Token
    const token = jwt.sign({ userID: saved_user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '60d' })
    res.status(201).send({ "status": "success", "message": "Registration Success", "token": token, })
   } catch (error) {
    console.log(error)
    res.send({ "status": "failed", "message": "Unable to Register" })   
   }
   }
   else{
    return  res.json({message:'password doesnot match', status:'failed'})
   } 
}

}


const login = async (req,res,next) =>{
    try {
        const { phoneno, password } = req.body
        
          const user = await Employee.findOne({ phoneno: phoneno })
          
          if (user != null) {
            const isMatch =  bcrypt.compareSync(password, user.password)
            
            if ((user.phoneno == phoneno) && isMatch) {
              // Generate JWT Token
              const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '50d' })
              res.status(200).send({ "status": "success", "message": "Login Success", "token": token })
            } else {
              res.status(202).send({ "status": "failed", "message": "Email or Password is not Valid" })
            }
          } else {
            res.status(202).send({ "status": "failed", "message": "You are not a Registered User" })
          }
        
      } catch (error) {
        
        res.status(202).send({ "status": "failed", "message": "Unable to Login" })
      }
}



const loggedUser = async (req, res) => {

    res.status(202).send({ "user": req.user, status:"sucess" })
  }


const findbyid = async (req,res) =>{
const id = req.params.id
const user = await Employee.findById(id)
if(user){
    res.status(200).send({ "status": "sucess", "data": user })
} 
else{
    res.status(202).send({ "status": "failed", "message": "Unable to find" })   
}
}



const getall = async (req,res,next) =>{
    const user = await Employee.find()
    if (user){
    res.status(200).send({ "status": "sucess", "data": user })
    }
}


const checkuser = async(req,res,next) =>{
  const {phoneno} = req.body

  const user =  await Employee.findOne({phoneno:phoneno})
  if (user) {
    res.status(200).send({ "status": "user" })
  } else {
    res.status(200).send({ "status": "register" })
  }
}



const deleteUser = async (req,res,next)=>{
  const {userid}= req.body
  try {
    const user = await Employee.findByIdAndDelete(userid)
    res.status(200).send({ "message": user })
  } catch (error) {
    res.status(202).send({ "status": "register" })
  }
}

const changepassword = async (req,res,next)=>{
  const {userid, password} = req.body
  try {
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(password,salt)
    const user = await Employee.findByIdAndUpdate(userid, {
      password:hashpassword
    })

    if (user){
      res.status(200).send({ "message": user })
    }else{
      res.status(202).send({ "message": "register" })
    }
  } catch (error) {
    res.status(202).send({ "message": "register" })
  }
}
exports.changepassword = changepassword
exports.deleteUser = deleteUser
exports.registeruser = registeruser
exports.login = login
exports.loggedUser = loggedUser
exports.findById = findbyid
exports.getall = getall
exports.checkuser = checkuser