import React, { Component } from 'react';

class RegisteredUsers extends Component {

    constructor(props){
        super(props);
        this.state = {
            users : []
        }
    }

    componentDidMount=() =>{
        // fetch("http://localhost:8080/allinfo")
        // .then(resp => resp.json())
        // .then(data => this.setState({users : data}))
    }

    render() {
        return (
            <div>
                <br/>
                <h2 style={{textAlign:"center", fontFamily:"cursive"}}><b><u>List of all registered user</u></b></h2>
                <br/><br/>
                <table className="table table-sm table-bordered bg-white container " style={{ color: "dark",border:"1px solid red",textAlign:"center",fontFamily:"cursive" }}>
                        <tr class="bg-dark" style={{color:'white'}}> 
                            <th>LoginID</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>User Type</th>
                        </tr>
                        {
                            this.state.users.map(obj => {

                                return (
                                    <tr>
                                        <td> {obj.loginid} </td>
                                        <td> {obj.email}</td>
                                        <td> {obj.password}</td>
                                        <td>{obj.usertype}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
            </div>
        );
    }
}

export default RegisteredUsers;