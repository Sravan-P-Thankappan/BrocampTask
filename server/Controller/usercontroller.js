const fanModel = require('../Model/fanmodel')

const talentModel = require('../Model/Talentmodel')

const bcrypt = require('bcrypt')


module.exports={

    fanSignUp:(req,res)=>{

        console.log('fansignup')
        console.log(req.body)

        fanModel.findOne({email:req.body.email}).then((existinguser)=>{
             
            if(existinguser) res.status(409).json({message:'Email Already Exist'})
            
            else{
                
                bcrypt.hash(req.body.password,10).then((password)=>{
              
                    req.body.password = password
                   
                     fanModel.create(req.body).then(()=>{

                        res.status(200).json({message:'Account created Successfully'})
                     })
                     .catch((er)=>{
                        
                        res.status(500).json({message:er.message})
                     })
                   
                })
                .catch((er)=>{
                    console.log(er.message)
                })
                
            }
        })
    },
   

    talentSignUp:(req,res)=>{

        console.log('talentsignup')
        console.log(req.body)

        talentModel.findOne({email:req.body.email}).then((existinguser)=>{
             
            if(existinguser) res.status(409).json({message:'Email Already Exist'})
            else{
                
                bcrypt.hash(req.body.password,10).then((password)=>{
              
                    req.body.password = password
                   
                    talentModel.create(req.body).then(()=>{

                        res.status(200).json({message:'Account created Successfully'})
                     })
                     .catch((er)=>{
                        
                        res.status(500).json({message:er.message})
                     })
                   
                })
                .catch((er)=>{
                    console.log(er.message)
                })
                
            }
        })

    }


}