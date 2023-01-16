
import React, { useState } from 'react'
import axios from '../utilities/Axios'

function Signup({user}) {
  
    const [userDetails,setUserDetails] = useState({})   
    const [formError,setFormError] = useState({}) 
    const [error,setError] = useState('')

    console.log(user)
    const handleDetails = (e)=>{
        
        let formResult = {[e.target.name]:e.target.value}
        setUserDetails({...userDetails,...formResult})
        
    }

    console.log('userDetails ',userDetails)

    const validate = (data) => {


        const errors = {}
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!data.firstname) {
            errors.firstname = 'First Name Is Required'

        }
        if (!data.lastname) {
            errors.lastname = 'Last Name Is Required'

        }
        if (!data.username) {
            errors.username = 'User Name Is Required'

        }
        if (!data.email) {
            errors.email = 'Email Is Required'

        }  else if (!regex.test(data.email)) {

            errors.email = 'Email Is Not Valid'

        }
      
        if (!data.password) {
            errors.password = 'Password Is Required'

        }

        // if (data.password.length<4) {
        //     errors.password = 'Minimum Strength four character'

        // }

        return errors

    }

    const handleSubmit = (e) => {
        
        e.preventDefault()
        console.log('first')

        let result = validate(userDetails)
          
        console.log(result)
        setFormError({...result})

        if(Object.keys(result).length===0) {
              
           user=='Fan'?
           axios.post('/api/fan',userDetails).then((response)=>{
                
            console.log(response)
            e.target.reset()
           })
           .catch((er)=>{
            console.log(er)
           })
           :
           axios.post('/api/talent',userDetails).then((response)=>{
            console.log(response)

            e.target.reset()
           })
           .catch((er)=>{
           
            const {response:{data:{message}}} = er
            console.log('exception checkingggggg')
            console.log(message)
            setError(message)
 
           })
        }

        return 
    
    }

    return (

        <>


            <div className='d-flex justify-content-center'>

                <div className='col-md-6'>
                    <h4 className='font-weight-normal text-white text-center'>Create Your {user} Account</h4>
                    <form onSubmit={handleSubmit}>
                       <p className='text-danger small text-center mt-3'>{error}</p>
                        <div className="mb-3 text-left">
                            <div className='mb-1'>
                                <label className="text-white text-left"  >
                                    First Name
                                </label>

                            </div>
                            <div>
                                <input className="rounded-pill w-100 bg-transparent text-white   border border-success px-3 py-1 w-100"
                                    id="inline-full-name"
                                    placeholder='First Name'
                                    name='firstname'
                                    onChange={(e)=>handleDetails(e)}
                                  
                                  />
                            </div>
                            <p className='text-danger small'>{formError.firstname}</p>
                        </div>

                        <div className="mb-3 text-left">
                            <div className='mb-1'>
                                <label className="text-white text-left"  >
                                    Last Name
                                </label>

                            </div>
                            <div>
                                <input className="rounded-pill bg-transparent text-white  border border-success px-3 py-1  w-100"
                                    id="inline-full-name"
                                    placeholder='Last Name'
                                    name='lastname'
                                    onChange={(e)=>handleDetails(e)}

                                   />
                            </div>
                            <p className='text-danger small'>{formError.lastname}</p>
                        </div>

                        <div className="mb-3 text-left">
                            <div className='mb-1'>
                                <label className="text-white text-left"  >
                                    Username
                                </label>

                            </div>
                            <div>
                                <input className="rounded-pill bg-transparent text-white border border-success px-3 py-1  w-100"
                                    id="inline-full-name"
                                    placeholder='username'
                                    name='username'
                                    onChange={(e)=>handleDetails(e)}

                                  />
                                  <p className='text-danger small'>{formError.username}</p>
                            </div>
                        </div>

                        <div className="mb-3 text-left">
                            <div className='mb-1'>
                                <label className="text-white text-left"  >
                                    Email
                                </label>

                            </div>
                            <div>
                                <input type="email" className="rounded-pill bg-transparent text-white border border-success px-3 py-1  w-100"
                                    id="inline-full-name"
                                    placeholder='Email'
                                    name='email'
                                    onChange={(e)=>handleDetails(e)}

                                     />
                                     <p className='text-danger small'>{formError.email}</p>
                            </div>
                        </div>

                        <div className="mb-3 text-left">
                            <div className='mb-1'>
                                <label className="text-white text-left"  >
                                    Password
                                </label>

                            </div>

                            <div>
                                <input type="password" className="rounded-pill bg-transparent text-white border border-success px-3 py-1  w-100"
                                    id="inline-full-name"
                                    placeholder='Password'
                                    name='password'
                                    onChange={(e)=>handleDetails(e)}
                                    
                                    />
                                    <p className='text-danger small'>{formError.password}</p>
                            </div>
                        </div>

                        {/* <p className='text-danger font-[8px]'>{passwordErr}</p> */}
                        <div className="text-cnter text-center">
                            <button className="bg-theam p-2 border-0 rounded-pill" type="submit">
                                SIGN UP
                            </button>
                            <p className='mt-3'><span className='text-white'> Already have an account ?</span> <span className='theamColor'>Login</span></p>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default Signup