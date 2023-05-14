import React, { Component } from 'react';

class Purchase extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
            <hr/>
            <br/>
                <h2 style={{ fontFamily: "cursive" }}><b>Hello {JSON.parse(localStorage.getItem("loggedcustomer")).fname},</b><br /><br /> <h3>This is a confirmation that we have just received your secure online payment.</h3> </h2>
            <hr/>
            <br/>
                <h3 style={{ fontFamily: "cursive" }}> Thank you..Have a great day!!</h3>
            </div>
        );
    }
}

export default Purchase;