import axios from 'axios';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import base_url from './Services/Baseurl';
import {Redirect, Route, Switch } from 'react-router-dom';
import Tplogin from './Tplogin';



const Register = () => {

    const [register, setRegister] = useState({});

    const addregdata = (e) =>{
        console.log(register);
        postdatatoserver(register);
        e.preventDefault();
        setRegister('');
        alert('Successfully Registered');
    }


    const postdatatoserver = (data) => {
        axios.post(`${base_url}/register`, data).then(
            (response) => {
                console.log(response);
                console.log("successful upto here ")
            },
            (error)=>{
                console.log("error aali");
            }

        )
    }


    return (
        <>
            <div className="my-5">
                <h1 className="text-center">
                    Register Now
                </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                <div className="RegestrationForm">

                    <div className="col-md-6 col-10 mx-auto ">
                        <form onSubmit = {addregdata}>
                            <div className="mb-3">
                                <label for="fname" className="form-label"> First Name </label>
                                <input type="text" className="form-control" id="fname" placeholder="First Name"
                                    onChange = { (e) => {
                                        setRegister( {...register, fname : e.target.value} );
                                    } }
                                 />
                            </div>
                            <div className="mb-3">
                                <label for="lname" className="form-label"> Last Name </label>
                                <input type="text" className="form-control" id="lname" placeholder="Last Name"
                                    onChange = { (e) => {
                                        setRegister( {...register, lname : e.target.value} );
                                    } }
                                
                                 />
                            </div>
                            <div className="mb-3">
                                <label for="phoneno" className="form-label">Phone Number </label>
                                <input type="number" className="form-control" id="phoneno" placeholder="mobile no.." 
                                    onChange = { (e) => {
                                        setRegister( {...register, phoneno : e.target.value} )
                                    } }

                                />
                            </div>
                            <div className="mb-3">
                                <label for="usrname" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="username" placeholder="name@example.com" 
                                    onChange= { (e) => {
                                        setRegister({...register, username : e.target.value  })
                                    } }

                                />
                            </div>
                            <div className="mb-3">
                                <label for="adress" className="form-label">Address </label>
                                <input type="text" className="form-control" id="adress" placeholder="Address.." 
                                    onChange= { (e) => {
                                        setRegister({...register, adress : e.target.value})

                                    } }

                                />
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password </label>
                                <input type="password" className="form-control" id="password" placeholder="Password.." 
                                    onChange={(e)=>{
                                        setRegister({...register, password:e.target.value})
                                    } }

                                />
                            </div>

                            <div class="col-md-4 position-relative">
                                <label for="color" class="form-label">You are</label>
                                <select class="form-select" id="color" required
                                onChange={(e) => {
                                        setRegister({ ...register, usertype: e.target.value });
                                    }}
                                >
                                    <option selected disabled value="">Choose...</option>
                                    <option value="buyer">Buyer</option>
                                    <option value="seller">Seller</option>
                                   
                                    
                                </select>

                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                                <p className="forgot-password text-right">
                                    Already registered <a href="/login">log in?</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            <div>
                <BrowserRouter>
                <Route  path="/login" component={Tplogin} ></Route>

                </BrowserRouter>
            </div>
            
        </>
    );
}

export default Register;