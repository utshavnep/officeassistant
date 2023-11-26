const Employee = require('../model/employee')

const jwt = require('jsonwebtoken')


const checkUserAuth = async (req, res, next) => {
  let token
  const { authorization } = req.headers
  if (authorization && authorization.startsWith('Bearer')) {
    try {
      // Get Token from header
      token = authorization.split(' ')[1]
      if (token !== 'undefined') {
        // Verify Token
        const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY)

        // Get User from Token
        req.user = await Employee.findById(userID).select('-password')
      
        next()
      }
    } catch (error) {
      console.log(error)
      res.status(201).send({ status: "failed", "message": "Unauthorized User" })
    }
  }
  
}

exports.checkUserAuth = checkUserAuth