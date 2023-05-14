import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const ViewDetails = (props) =>{

    const [car, setCar] = useState({});

useEffect(()=>{

    axios.get('http://localhost:9091/viewdetails/'+props.match.params.id)
    .then(function (response) {
        console.log(response);
        console.log(response.data);
        setCar(response.data)
    }).catch(function (error) {
        console.log(error);
        
      });
     
}, [])


return(
    <>
   
    <img src={car.photo} style={{width : '300px'}} />

    <h1>Car Comapny - {car.carCompany}</h1>
    <h1>Car Model - {car.carModel}</h1>
    <h1>car regestration number - {car.regno}</h1>
    <h1>Car color - {car.color}</h1>
    <h1>Total Owners - {car.owners}</h1>
    <h1> car state - {car.state}</h1>
    <h1>Car city - {car.city}</h1>
    <h1>pincode of city - {car.pinNo}</h1>
    <h1>car price - {car.price}</h1>
    <h1>car purchase date - {car.purchaseDate}</h1>
    <h1>Total running of car - {car.totalRunning}</h1>

    </>
)


}

export default ViewDetails;