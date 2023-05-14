import React, { Component } from 'react';
import UserServices2 from '../Services/UserServices2';

class GetAllCars extends Component {
   
    constructor(props){
        super(props)
        this.state = {
            cars : []
        }
    }

    componentDidMount(){
        UserServices2.getCars().then( (response) => {
            console.log(`resp.data ${response.data}`)
            this.setState({cars: response.data})
           console.log(this.state.cars);
        } );
    }
  
   
    render() {
        return (
            <div>
                <h1 className="text-center">Cars List</h1>
                <table className="table table-stripped table-bordered">
                    <thead>
                        <tr>
                            <td>Photo</td>
                            <td>Car id</td>
                            <td>Company</td>
                            <td>Color</td>
                            <td>Purchase Date</td>
                            <td>Number of owners</td>
                            <td>Car Model</td>
                            <td>regestration number</td>
                            <td>price</td>
                            <td>city</td>
                            <td>state</td>
                            <td>pinNo</td>
                            <td>car owner</td>
                            
                            <td>fname</td>
                            <td>lname</td>
                            <td>phoneno</td>
                            <td>address</td>
                            
                          
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cars.map(
                                cars =>
                                <tr key = {cars.carId} >
                                <td> <img src={cars.photo} className="card-img-top" alt="car" width="100px" height="100px" /></td>
                                    <td>{cars.carId}</td>
                                    <td>{cars.carCompany}</td>
                                    <td>{cars.color}</td>
                                    <td>{cars.purchaseDate}</td>
                                    <td>{cars.owners}</td>
                                    <td>{cars.carModel}</td>
                                    <td>{cars.regno}</td>
                                    <td>{cars.price}</td>
                                    <td>{cars.city}</td>
                                    <td>{cars.state}</td>
                                    <td>{cars.pinNo}</td>
                                    <td>Car owner details =</td>
                                    {cars.register ? <>
                                        
                                    <td>{cars.register.fname}</td> 
                                    <td>{cars.register.lname}</td> 
                                    <td>{cars.register.phoneno}</td> 
                                    <td>{cars.register.address}</td> 
                                    
                                    </>
                                    : ""
                                    }
                                   

                                   
                                    
                                </tr>
                            )
                        }
                    </tbody>


                </table>

            </div>
        );
    }
}

export default GetAllCars;
