import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
// import RegisteredUsers from './RegisteredUsers';
import mystore from './Components/mystore';
import { NavLink } from 'react-router-dom';
import UserComponent from './Components/UserComponent';

class Admin extends React.Component{

    constructor(props){
        super(props);
    }

    logout=()=>{
        mystore.dispatch({type: 'LOGGEDOUT'});
        this.props.history.push("/login");
    }

    render() {
        return (
            <>

            <h1>Hello admin</h1>
            <NavLink activeClassName="menu_active" className="nav-link" to="/users">All Users list</NavLink>
            <NavLink activeClassName="menu_active" className="nav-link" to="/getcars">All Cars list with their Owners</NavLink>
            {/* <BrowserRouter> */}




                {/* <div>
                    <div className="bg-text" >
                        <h1 style={{ fontFamily: "cursive", textAlign: "center" }}>Admin page</h1>
                        <br />
                        <ul className="nav nav-tabs" style={{ fontFamily: "monospace" }}>
                            <li className="nav-item"><Link className="nav-link text-dark" to="/rgusers"><b>Registered Users</b></Link></li>
                            <li className="nav-item"><Link className="nav-link text-dark" to="/petinfo" ><b>Cars</b></Link></li>
                            <li className="nav-item" style={{color:'black',paddingLeft:'1500px'}}><a href="" onClick={this.logout} style={{color:'dark',textDecorationLine:'none'}} ><b>Logout</b></a></li> 
                        </ul>
                    </div>
                    <Route path="/rgusers" component={RegisteredUsers}></Route>
                </div> */}

            </>
            // </BrowserRouter>
        );
    }
}

export default Admin;