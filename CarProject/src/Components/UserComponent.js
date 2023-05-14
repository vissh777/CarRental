import React from 'react';
import Userservice from '../Services/Userservice';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router';


class UserComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            users : []
          
        }
    }

    componentDidMount(){
        Userservice.getUsers().then( (response) => {
            this.setState({users: response.data})
        } );
    }


   

    //no need 

     delete=(cid)=>{
        console.log(cid);

        axios.delete(`http://localhost:9091/users/${cid}`)
        .then(response => alert('successfully deleted'));
        

        
        // this.props.history.push('/users');
        
        // fetch("http://localhost:8080/deletebypid?pid="+ pid)
        // .then(resp => resp.json())
    }
    

    render (){
        return (
            <div>
                <h1 className="text-center">User list</h1>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <td>User id</td>
                            <td>fname</td>
                            <td>lname</td>
                            <td>PhoneNumber</td>
                            <td>Address</td>
                            <td>Email</td>
                            <td>Password</td>
                            <td>userType</td>
                            <td>Action</td>
                 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.cid} >
                                    <td>{user.cid}</td>
                                    <td>{user.fname}</td>
                                    <td>{user.lname}</td>
                                    <td>{user.phoneno}</td>
                                    <td>{user.address}</td>
                                    <td>{user.loginid.username}</td>
                                    <td>{user.loginid.password}</td>
                                    <td>{user.loginid.userType}</td>

                                    <td>   <NavLink  to='#'
                                        style={{ color: 'black', background: "yellow" }}
                                        onClick={ ()=> this.delete(user.cid)}
                                        >
                                        Delete </NavLink><br /></td>


                                    {/* <td>   <NavLink  to={`users/${user.cid}`}
                                        style={{ color: 'black', background: "yellow" }}
                                        
                                        >
                                        Delete </NavLink><br /></td> */}
                                    
                                </tr>
                            )
                        }
                    </tbody>


                </table>

            </div>
        )
    }


}
export default UserComponent;
