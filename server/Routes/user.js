const express = require('express')

const router = express.Router()

const userController = require('../Controller/usercontroller')


//------------Fan SignUp-----------------------

router.post('/api/fan',userController.fanSignUp)


//-----------Tanlent SignUp-----------------------
router.post('/api/talent',userController.talentSignUp)



module.exports = router