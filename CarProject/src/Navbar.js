import React, {useState, useEffect} from 'react'

import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router'
import axios from 'axios';
import mystore from './Components/mystore';


const Navbar = () => {
    const [flag, setFlag] = useState('');
    const [flag2, setFlag2] = useState('');
    
    const history = useHistory();
    useEffect(()=> {
        
        // alert('usehistory');
        // history.push("/login");
        // if (localStorage.getItem('loggedcustomer'))
        // {
            //     history.push("/contactus");
            // }

            mystore.subscribe(() => {setFlag(mystore.getState().loggedin) });
    }, [])
    
    const logout = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });
        setFlag(false);
        localStorage.clear();
        history.push("/login");
    }
    
    return ( 
        <>
     
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">


                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">Pre-own Car System</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <form d-flex>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <NavLink activeClassName="menu_active" exact className="nav-link " aria-current="page" to="/buy">Buy used Car</NavLink>
                                            </li>




                                            <div className="bg" style={{display: flag?'block':'none'}}>

                                            <li className="nav-item">
                                                <NavLink activeClassName="menu_active" className="nav-link" to="/sell">Sell used Car</NavLink>
                                            </li>
                                            </div>

                                            <div className="bg" style={{display: flag?'none':'block'}}>

                                            <li className="nav-item">
                                                <NavLink activeClassName="menu_active" className="nav-link" to="/login">Login</NavLink>
                                            </li>
                                            </div>



                                            <div className="bg" style={{display: flag?'none':'block'}}>
                                            <li className="nav-item">
                                                <NavLink activeClassName="menu_active" className="nav-link" to="/register">Register</NavLink>
                                            </li>
                                            </div>


                                            <li className="nav-item">
                                                <NavLink activeClassName="menu_active" className="nav-link" to="/contactus">Contact Us</NavLink>
                                            </li>




                                            <div className="bg" style={{display: flag?'block':'none'}}>
                                            <li className="nav-item">
                                                <NavLink activeClassName="menu_active" className="nav-link" to=""
                                                onClick={logout}
                                                >Log out</NavLink>
                                            </li>
                                            </div>


                                          
                                        </ul>

                                    </div>
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Navbar;