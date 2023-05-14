import { NavLink } from "react-router-dom";
//import web from '../src/images/car2.jpg'
// import viewdetails from './ViewDetails'
import { useHistory } from 'react-router'
import React, { useState, useEffect } from 'react'






const Card = (props) => {

    const [num, setNum] = useState('');

    const history = useHistory();
    useEffect(() => {

        // alert('usehistory');
        // history.push("/login");
        // if (localStorage.getItem('loggedcustomer'))
        // {
        //     history.push("/contactus");
        // }
    }, [])



    const description = () => {
        console.log(props.id);
        console.log(props.company);
        console.log(props.price);
        setNum(props.id)
        console.log(num)


        // alert(
        //     props.company
        // )

    }



    return (
        <>


            <section className="buy-section">



                <div className="container">

                    <div className="card">



                        <div className="col-sm-4">
                            <div className="car-block" >
                                <img src={props.photo} className="card-img-top" alt="hello" width="300px" height="300px" />
                                <div className="card-body">
                                    <span className="card-title font-weight-bold"><b>{props.company}</b></span>&nbsp;&nbsp;
                                    <span>{props.model}</span><br />
                                    <label className="card-title font-weight-bold">Rs : {props.price}</label><br />
                                  
                                         <NavLink  to={`viewdetails/${props.id}`}
                                        style={{ color: 'black', background: "yellow" }}
                                        >
                                        Description </NavLink><br />



                                    <NavLink to="payment" className="btn btn-dark btn-lg btn-block">Buy Now</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Card;





// class Card extends React.Component {
//     constructor(props) {
//         super(props)
//         flag: 'none'
//     }


//     render() {
//         return (
//             <>
//                 <section className="buy-section">



//                     <div className="container">

//                         <div className="card">



//                             <div className="col-sm-4">
//                                 <div className="car-block" >
//                                     <img src={this.props.photo} className="card-img-top" alt="hello" width="300px" height="300px" />
//                                     <div className="card-body">
//                                         <span className="card-title font-weight-bold"><b>{this.props.company}</b></span>&nbsp;&nbsp;
//                                         <span>{this.props.model}</span><br />
//                                         <label className="card-title font-weight-bold">Rs : {this.props.price}</label><br />
//                                         <NavLink to="#"
//                                             style={{ color: 'black', background: "yellow" }}
//                                             onClick={this.description}>
//                                             Description </NavLink><br />

//                                         <div style={{ display = { flag } }} >
//                                             {this.props.company}
//                                             {this.props.price}
//                                         </div>


//                                         <NavLink to="#" className="btn btn-dark btn-lg btn-block">Buy Now</NavLink>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </section>
//             </>
//         );
//     }
// }


// export default Card;
