const mongoose = require('mongoose')

mongoose.set("strictQuery", false)

const connection = ()=>{
    mongoose.connect(process.env.URL).then(()=>{
        console.log('database connected')
    })
    .catch((er)=>{

        console.log(er.message)
    })
}

module.exports = connection