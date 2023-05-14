import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import Homepage from './Homepage';
import Buy from './Buy';
import Forbuy from './Forbuy';
import Sell from './Sell';
import Login from './Login';
import Register from './Register';
import Contactus from './Contactus';
import Footer from './Footer';
import {Redirect, Route, Switch } from 'react-router-dom';
import UserComponent from './Components/UserComponent';
import UserComponents2 from './Components/UserComponents2';
import ViewDetails from './ViewDetails';
import mystore from './Components/mystore';
import { BrowserRouter } from 'react-router-dom';
import Tplogin from './Tplogin';
import Headerm from './Components/Headerm';
import BuyerHome from './Components/BuyerHome';
import Payment from './Payment';
import Purchase from './Purchase';
import Admin from './Admin';
import GetAllCars from './Components/GetAllCars';
import DeleteUser from './Components/DeleteUser';


class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
        flag: false
    }
  }


   render(){
    mystore.subscribe(() => { this.setState({ flag: mystore.getState().loggedin }) })
    console.log("flag ",this.state.flag);
    return(
      <>
      
     
     <BrowserRouter>
    



      <Navbar />
    
    
    <Route  path="/" exact component={Homepage} ></Route>
    <Route  path="/buy" component={UserComponents2} ></Route>
    <Route  path="/forbuy" component={Forbuy} ></Route>
    <Route  path="/sell" component={Sell} ></Route>
    <Route  path="/login" component={Tplogin} ></Route>
    <Route  path="/register" component={Register} ></Route>
    <Route  path="/contactus" component={Contactus} ></Route>
    <Route  path="/users" component={UserComponent} ></Route>
    <Route  path="/viewdetails/:id" component={ViewDetails} ></Route>
    <Route  path="/payment" component={Payment} ></Route> 
    <Route  path="/purchase" component={Purchase} ></Route> 
    <Route  path="/getcars" component={GetAllCars} ></Route> 

    <Route  path="/users/:id" component={DeleteUser} ></Route>


    {/* <Route  path="/viewdetails" component={ViewDetails} ></Route> */}
    <Route  path="/admin" component={Admin} ></Route> 

    <Route  path="/buyerhome" component={BuyerHome} ></Route> 
   



    <Redirect to="/" />

     </BrowserRouter>
    <Footer />
     
      </>
    )
   }
}

export default App;
