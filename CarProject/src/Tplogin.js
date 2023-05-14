

import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router'
import axios from 'axios';
import mystore from './Components/mystore';
import BuyerHome from './Components/BuyerHome';
import { BrowserRouter } from 'react-router-dom';
import {Redirect, Route, Switch } from 'react-router-dom';


function Tplogin(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
   
    const history = useHistory();
    useEffect(()=> {

        // alert('usehistory');
        // history.push("/login");
        // if (localStorage.getItem('loggedcustomer'))
        // {
        //     history.push("/contactus");
        // }
    }, [])


    function login()
    {
        // let item ={email,password}

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

                    history.push("/");
                 
                   
                }
                else if (response.data.loginid.userType == "admin") {
                    mystore.dispatch({type: 'LOGGEDIN'});
                    localStorage.setItem("loggedcustomer", JSON.stringify(obj));
                

                    alert("Hello admin");
                    history.push("/admin")
                }
                // else if (response.data === "") {
                //     this.setError("Wrong Email and password");
                //     alert("Wrong Email and password");
                // }
                else{
                    setError("Wrong Email and password");
                    alert("Wrong Email and password");
                }
                


              })
              .catch(function (error) {
                // console.log(error);
                alert("Wrong Email and password");
              });
    }




    return (
        <>            
        <div className="my-5">
            <h1 className="text-center">
                Login Now, Hello 
            </h1>
        </div>
        <div className="container-login-contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto ">
                
                        <div className="mb-3">
                            <label for="username">Email address</label>
                            <input type="email"  
                              onChange = { (e) => {
                                  setEmail(e.target.value)
                              } }

                            />
                        </div>

                        <div className="mb-3">
                            <label for="password">Password </label>
                            <input type="password" 
                           
                            onChange = { (e) => {
                                  setPassword(e.target.value)
                              } }

                            />
                        </div>
                        {/* <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div> */}
                        <div className="col-12">
                            <input type="button" name="button" value="Login" onClick={login}  />
                            
                            {/* <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p> */}
                            {/* <h5 style={{ color: "red" }}><i>{this.state.error}</i></h5> */}
                        </div>
                  
                </div>
            </div>
        </div>

        <div>
            <BrowserRouter>
            <Route  path="/buyerhome" component={BuyerHome} ></Route> 


            </BrowserRouter>
        </div>
    
    </>
    )


}

export default Tplogin;