import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router'




function DeleteUser(props){
    const [user, setUser] = useState({});

    const history = useHistory();


    useEffect(()=>{
    
        axios.delete('http://localhost:9091/users/'+props.match.params.id)
        .then(function (response) {
            console.log(response);
            
           
        }).catch(function (error) {
            console.log(error);
            
          });

        //   history.push('/users');
        //   setUser('');
         
    }, []);



    return(
        <h1>user deleted</h1>
    )


}

export default DeleteUser;