import React from 'react';

const CarComponent = (props) => {


    return(
        <>
        id : {props.id},
        width : {props.width},
        height : {props.height},
        title : {props.title},
        price : {props.price},

        </>
    );


}

export default CarComponent;