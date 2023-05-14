

// import React from "react";
// import { BrowserRouter, NavLink } from "react-router-dom";
// import mystore from "./mystore";
// import Homepage from '../Homepage';
// import Register from '../Register';
// import Contactus from '../Contactus';
// import { Redirect, Route, Switch } from 'react-router-dom';
// import Tplogin from '../Tplogin';



// class Headerm extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             flag: false
//         }
//     }

//     render() {
//         mystore.subscribe(() => { this.setState({ flag: mystore.getState().loggedin }) })
//         return (
//             <>
//                 <div className="bg" style={{ display: this.state.flag ? 'none' : 'block' }}>

//                     <div className="container-fluid nav_bg">
//                         <div className="row">
//                             <div className="col-10 mx-auto">


//                                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                                     <div className="container-fluid">
//                                         <NavLink className="navbar-brand" to="/">Pre-own Car System</NavLink>
//                                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                                             <span className="navbar-toggler-icon"></span>
//                                         </button>
//                                         <form d-flex>
//                                             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                                                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                                     {/* <li className="nav-item">
//                                                 <NavLink activeClassName="menu_active" exact className="nav-link " aria-current="page" to="/buy">Buy used Car</NavLink>
//                                             </li> */}

//                                                     <li className="nav-item">
//                                                         <NavLink activeClassName="menu_active" className="nav-link" to="/login">Login</NavLink>
//                                                     </li>

//                                                     <li className="nav-item">
//                                                         <NavLink activeClassName="menu_active" className="nav-link" to="/register">Register</NavLink>
//                                                     </li>

//                                                     <li className="nav-item">
//                                                         <NavLink activeClassName="menu_active" className="nav-link" to="/contactus">Contact Us</NavLink>
//                                                     </li>
//                                                 </ul>

//                                             </div>
//                                         </form>
//                                     </div>
//                                 </nav>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <BrowserRouter>
//                             <Route path="/" exact component={Homepage} ></Route>
//                             <Route path="/login" component={Tplogin} ></Route>
//                             <Route path="/register" component={Register} ></Route>
//                             <Route path="/contactus" component={Contactus} ></Route>
//                         </BrowserRouter>

//                     </div>



//                 </div>
//             </>
//         );
//     }
// }
// export default Headerm;