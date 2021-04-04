import React from 'react';
import {Button, Form} from "react-bootstrap";
import SimpleValidator from 'simple-react-validator';
import {history} from '../history';

let details = JSON.parse(localStorage.getItem("CurrentUser"));
console.log(details);

class Change extends React.Component{
    constructor(){
        super();

        this.state ={
            name:details.name ,
            email:details.email ,
            password:""
        }

        this.validator = new SimpleValidator();
        
    }

    handleInput=(e)=>{
        this.setState({password: e.target.value})
    };
    
    Savepassword = ()=>{
        if(this.validator.allValid())
        {
        let details = JSON.parse(localStorage.getItem("CurrentUser"));
        details.password = this.state.password;
        localStorage.setItem("CurrentUser",JSON.stringify(details));
          history.push('/user');
          window.location.reload();
        }
        else
        {
            this.validator.showMessages();
            this.forceUpdate();
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
                <h3>New Password: </h3>
                <div>
                    <Form style={{marginRight:50}}>
                    <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="Password" placeholder="Password" value={this.state.password}  onChange={this.handleInput}/>
    <div style={{background:"#CD5C5C",color:"white"}}>{this.validator.message('Password', this.state.password, 'required|min:8')}</div> 
  </Form.Group>
                    </Form>
               
                </div>
                
                <br/>          
                <div style={{marginTop:20}}>
                <Button variant="success" onClick={this.Savepassword}>Save Password</Button>{' '}
                <Button variant="secondary" onClick={this.logout}>Logout</Button>{' '}
                </div>
               
            </div>
        )
    }
};


export default Change;