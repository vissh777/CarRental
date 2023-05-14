import React, { Component } from "react";
import web from "../src/images/car.jpg";
// import { NavLink } from "react-router-dom";
import Common from "./Common";



// class Homepage extends React.Component{
//     constructor(props)
//     {
//         super(props);
//     }

//     render(){
//         return(
//             <>
//             <h1>Heiii</h1>
//             </>
//         )
//     }
// }


const Homepage = (props) => {
    return (
        <>
             <Common 
             name='Buy your Dream car by' 
             imgsrc={web}
             visit="/buy" 
             btname="Get Started"
             />
        </>
    );
};

export default Homepage;