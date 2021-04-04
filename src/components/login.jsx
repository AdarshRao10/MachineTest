import {Component} from "react";
import {Form,Button} from "react-bootstrap";
import SimpleValidator from 'simple-react-validator';
import {history} from '../history';




class Login extends Component{

  constructor(props){
    super(props);
    this.state={
     Name:"",
     EmailId:"",
     Password:""
    }
    this.validator = new SimpleValidator();
  }
  
  inputData = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  };

  handleformdata = (e)=>{
  e.preventDefault();
  if(this.validator.allValid())
  {
    console.log(this.state);
    const CurrentUserdata = {
      name:this.state.Name,
      email:this.state.EmailId,
      password:this.state.Password
    }
    localStorage.setItem("CurrentUser",JSON.stringify(CurrentUserdata));

    const result = JSON.parse(localStorage.getItem("CurrentUser"));
    console.log(result);

    history.push('/home');
    window.location.reload();

  
  }
 else
 {
  this.validator.showMessages();
  this.forceUpdate();
 }
    
  };




  render(){
    return(
      <Form style={{marginLeft:20,marginRight:20,marginTop:100}} onSubmit={this.handleformdata}>


       <Form.Group controlId="formBasicText" >
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name="Name" placeholder="Enter Name" value={this.state.Name} onChange={this.inputData}/>
    <div style={{background:"#CD5C5C",color:"white"}}>{this.validator.message('Name', this.state.Name, 'required|string')}</div> 
  </Form.Group>

  <Form.Group controlId="formBasicEmail" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="EmailId" placeholder="Enter email" value={this.state.EmailId}  onChange={this.inputData}/>
   <div style={{background:"#CD5C5C",color:"white"}}>{this.validator.message('email', this.state.EmailId, 'required|email')}</div> 
  </Form.Group>

 

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="Password" placeholder="Password" value={this.state.Password}  onChange={this.inputData}/>
    <div style={{background:"#CD5C5C",color:"white"}}>{this.validator.message('Password', this.state.Password, 'required|min:8')}</div> 
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
     
      
    )
  }

}


export default Login;