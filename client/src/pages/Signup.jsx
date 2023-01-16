
import React from 'react'
import SignupForm from "../component/Signup";
import Container from 'react-bootstrap/Container';
import { FaSearch, IconName } from "react-icons/fa";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Signup() {
    return (

        <div className='bg-black p-4 min-vh-100'>
        <Container>
            <div className="d-flex">

                <div className='w-50'>
                    <h2 className="title  theamColor">Fanconvo</h2>
                    <p className="s-title  text-white">
                        <small className='font-weight-normal'> A marketplace for conversations,mentorships, and performances.</small>
                    </p>
                </div>
                <div className="d-flex justify-content-end w-50">
                    <p className=" me-3 text-white">Signup</p>
                    <p className=" text-white">Login</p>
                </div>

            </div>
            <div className=' d-md-flex w-md-50'>
                <div className='w-md-35'>
                <h5 className="text-white  me-4 mb-0">Search New Talent</h5>
                </div>
                <div className='w-md-65'>
                <div className="rounded-pill w-100 w-auto search_bar  px-2 border border-success">
                    <FaSearch style={{marginTop:'25px',marginLeft:'5px'}} className="theamColor " />
                    <input type="text" className='border-0  w-95  bg-transparent rounded-pill' />
                </div>
                </div>
            </div>

            <div className='bg-dark border-0 rounded p-4 mt-4'>
            <Container>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3 w-auto  border-0 rounded-pill d-flex justify-content-center"
                >
                    <Tab eventKey="home" title="FAN SIGNUP" >
                        <SignupForm user={"Fan"}/>
                    </Tab>
                    <Tab eventKey="profile" title="TALENT SIGNUP">
                        <SignupForm user={"Talent"}/>
                    </Tab>
                </Tabs>
                </Container>
            </div>



            <div className="d-md-flex mt-4">

                <div className='w-md-50'>
                    <h2 className="title  theamColor">Fanconvo</h2> 
                </div>
                <div className="d-md-flex justify-content-end w-50">
                    <p className=" me-4 text-white">How Fanconvo works ?</p>
                    <p className=" me-4 text-white">Terms Us</p>
                    <p className=" me-4 text-white">Contact Us</p>
                </div>

            </div>
        </Container>
    </div>
    )
}

export default Signup