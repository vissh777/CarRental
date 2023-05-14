import React from "react";
import mystore from "./mystore";
import { BrowserRouter, NavLink } from "react-router-dom";
import {Redirect, Route, Switch } from 'react-router-dom';
import UserComponents2 from './UserComponents2';
import Card from '../Card';
import UserServices2 from '../Services/UserServices2';
import TpFile from "./TpFile";
import Tplogin from '../Tplogin';





class Headerm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flag2 :true
        }
    }

    logout = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });
        this.props.history.push("/login");
    }

    render() {
        return (
            <>
            <BrowserRouter>

                <h1 style={{fontFamily:"cursive"}}>Welcome!! {JSON.parse(localStorage.getItem("loggedcustomer")).fname}</h1>
               
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">


                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                <div className="container-fluid">
                                    {/* <NavLink className="navbar-brand" to="/">Pre-own Car System</NavLink>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button> */}
                                    <form d-flex>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                    <NavLink activeClassName="menu_active" exact className="nav-link " aria-current="page" to="/buy">Buy used Car</NavLink>
                                                </li>

                                                <li className="nav-item">
                                                    <NavLink activeClassName="menu_active" exact className="nav-link " aria-current="page" to="/tpfile">tpfile</NavLink>
                                                </li>



                                                {/* <li className="nav-item">
                                                    <NavLink activeClassName="menu_active" className="nav-link" to="/contactus">Contact Us</NavLink>
                                                </li> */}


                                                <li className="nav-item">
                                                    <NavLink activeClassName="menu_active" className="nav-link"
                                                        to="#"
                                                        onClick={this.logout}
                                                    >Log out</NavLink>
                                                </li>
                                            </ul>



                                        </div>
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div>

                {/* <Route  path="/" exact component={Homepage} ></Route> */}
                {/* <Route  path="/contactus" component={Contactus} ></Route> */}
                <Route  path="/buy" component={UserComponents2} ></Route>
                <Route path="/tpfile" component={TpFile}></Route>
                

                </div>
                </BrowserRouter>


            </>
        );
    }
}
export default Headerm;