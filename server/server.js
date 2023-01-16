const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const cors = require('cors')
const connection = require('./Configuration/db')
const userRoute = require('./Routes/user')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:'true'}))


//--------db connection---------------

connection()  
app.use('/api',userRoute)



app.listen(process.env.PORT,()=>{

    console.log('server started on ',process.env.PORT)
})

 