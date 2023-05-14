import React from 'react';
import Card from '../Card';
import UserServices2 from '../Services/UserServices2';
import CarComponent from './CarComponent';


class UserComponents2 extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            cars : []
        }
    }

    componentDidMount(){
        UserServices2.getCars().then( (response) => {
            this.setState({cars: response.data})
        } );
    }

    render (){
        return (
            
                            this.state.cars.map (  (car) =>
                               
                                    <>
                                         <section className="buy-section">
                                             
                                         
                                     <Card id = {car.carId}
                                            photo = {car.photo}
                                           company = {car.carCompany}
                                           color = {car.color}
                                           purchaseDate = {car.purchaseDate}
                                           owners = {car.owners}
                                           totalRunning = {car.totalRunning}
                                           model = {car.carModel}
                                           regno = {car.regno}
                                           price = {car.price}
                                           city = {car.city}
                                           state = {car.state}
                                           pinNo = {car.pinNo}
                                           />
                                
                                 
                                         </section>
                                    </>
                            
            
        )
        )
    }


}
export default UserComponents2;
