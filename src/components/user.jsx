import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {history} from '../history';

let details = JSON.parse(localStorage.getItem("CurrentUser"));
console.log(details);

class User extends React.Component{
    constructor(){
        super();

        this.state ={
            name:details.name ,
            email:details.email ,
            password:details.password
        }
        
    }

    logout=()=>{
        localStorage.removeItem('CurrentUser');
        history.push('/');
        window.location.reload();
    }
    
    render(){
        return(
            <div style={{marginTop:20,marginLeft:20}}>
                <h3>Username: {this.state.name}</h3><br/>
                <h3>Email: {this.state.email}</h3><br/>
                <h3>Password: {this.state.password}</h3><br/>
                <Button variant="warning" as={Link} to="/changePassword">Change Password</Button>{' '}
                <Button variant="secondary"  onClick={this.logout}>Logout</Button>{' '}
            </div>
        )
    }
};


export default User;