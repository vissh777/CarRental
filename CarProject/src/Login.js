import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'react';
import mystore from './Components/mystore';
import { withRouter } from 'react-router';
import {initialstate,reducer} from './Components/reducer'
import { BrowserRouter} from "react-router-dom";
import { history } from 'history';



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
              error: ""
        } 


    }


    checkLogin = () => {
        let email = this.refs.email.value;
        let password = this.refs.password.value;

        console.log("using refs ",email);
        console.log(password);

        

        axios.get('http://localhost:9091/login', {
            params: {
              username : email,
              password : password
            }})
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                console.log(response.data.loginid.userType);
                 const obj =  (response.data);
                
               

                if (response.data.loginid.userType == "buyer") {
                    console.log("page of buyer")

                    
                    mystore.dispatch({type: 'LOGGEDIN'});
                    localStorage.setItem("loggedcustomer", JSON.stringify(obj));
                

                    alert(JSON.stringify(obj));

                    this.props.history.push("/buy");
                 
                    // this.props.history.push('/dashboard');
                    //console.log("called");
                }
                // else if (response.data == "petowner") {
                    // mystore.dispatch({type: 'LOGGEDIN'});
                    // this.props.history.push("/petownerhome")
                // }
                // else if (response.data === "") {
                //     this.setState({ error: "Wrong Email and password"});
                //     alert("Wrong Email and password");
                // }
                else{
                    this.setState({ error: "Wrong Email and password"});
                    alert("Wrong Email and password");
                }
                


              })
              .catch(function (error) {
                console.log(error);
              });
          
    }


    render() {
        return (
            <>
          

            
            <div className="my-5">
                <h1 className="text-center">
                    Login Now
                </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto ">
                        <form >

                            <div className="mb-3">
                                <label for="username" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="username" placeholder="name@example.com" 
                                   ref="email"

                                />
                            </div>

                            <div className="mb-3">
                                <label for="password" className="form-label">Password </label>
                                <input type="password" className="form-control" 
                                id="password" placeholder="Password.." 
                                ref="password"

                                />
                            </div>
                            <div className="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                            <div className="col-12">
                                <input type="button" name="button" value="Login" onClick={this.checkLogin} className="btn btn-dark btn-lg btn-block" />
                                
                                <p className="forgot-password text-right">
                                    Forgot <a href="/login">password?</a>
                                </p>
                                <h5 style={{ color: "red" }}><i>{this.state.error}</i></h5>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        </>
        );


    }

}

export default Login;