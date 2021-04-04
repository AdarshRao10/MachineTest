//import Details from "./details";
import React, {Component} from "react";
import Navbar from "../src/components/navigation";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch} from 'react-router-dom';
import PrivateRoute from '../src/private.route';

import User from './components/user';
import Task from './components/task';
import Home from './components/home';
import Login from './components/login';
import ChangePassword from './components/changePassword';


function App(){
  return(
    <React.Fragment>
        <Navbar/>
        <Switch>
        <Route path='/' exact component={Login}/> 
        <PrivateRoute path='/home' exact component={Home}/>
        <PrivateRoute path='/user' exact component={User}/>
        <PrivateRoute path='/task' exact component={Task}/>
        <PrivateRoute path='/changePassword' exact component={ChangePassword}/>
        </Switch>
        
    </React.Fragment>
  )
}







export default App;