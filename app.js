
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const bodyparser = require('body-parser')
const app = express()

const http = require('http');
const server = http.createServer(app);


const dotenv = require('dotenv')
dotenv.config()

app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(express.json())




const urouter = require('./routes/employee-routes')
const arouter = require('./routes/attendance-routes')
const corouter = require('./routes/cashout-routes')
const exrouter = require('./routes/expense-routes')
const lrouter = require('./routes/leave-routes')
const otrouter = require('./routes/ordertalk-route')
const pirouter = require('./routes/paymentinput-routes')



app.use('/employee',urouter)
app.use('/attendance', arouter)
app.use('/cashout', corouter)
app.use('/expense',exrouter)
app.use('/leave',lrouter)
app.use('/ordertalk',otrouter)
app.use('/pay',pirouter)

mongoose.connect("mongodb+srv://admin:admin@cluster0.dbasrgs.mongodb.net/?retryWrites=true&w=majority")
.then(()=> {
    server.listen(5000);
console.log('database connected')
})
.catch((err)=> console.log(err));