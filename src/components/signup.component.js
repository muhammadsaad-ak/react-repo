import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    useHistory,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom"

import Display from './display.component';

export default class SignUp extends Component {
  
    constructor(props) {
        super(props);
        this.routeChange = this.routeChange.bind(this);
        this.state = {
            signUpData: {
                firstName : props.firstName,
                lastName : props.lastName,
                email : props.email
            }
        }
      }

      routeChange() { 
        let path = '/display.component';
        this.props.history.push(path);
        this.signUpData = this.handleSignUpData.bind(this);
      }
    
      handleFirstNameChanged(event) {
        var signUpData        = this.state.signUpData;
        signUpData.firstName  = event.target.value;
    
        this.setState({ signUpData: signUpData });
      }
    
      handleLastNameChanged(event) {
        var signUpData      = this.state.signUpData;
        signUpData.lastName = event.target.value;
    
        this.setState({ signUpData: signUpData });
      }
    
      handleEmailChanged(event) {
        var signUpData    = this.state.signUpData;
        signUpData.email = event.target.value;
    
        this.setState({ signUpData: signUpData });
      }
    
      handleSignUpData() {
        console.log(this.state.signUpData);
      }  
     
    
    render() {
        return (
            <Router>
            <Switch>
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" value = {this.state.signUpData.firstName} onChange={this.handleFirstNameChanged.bind(this)} className="form-control" placeholder="First name" />
                    <Display message ={this.state.signUpData.firstName}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" value = {this.state.signUpData.lastName} onChange={this.handleLastNameChanged.bind(this)} className="form-control" placeholder="Last name" />
                    <Display message ={this.state.signUpData.lastName}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value = {this.state.signUpData.email} onChange={this.handleEmailChanged.bind(this)} className="form-control" placeholder="Enter email" />
                    <Display message ={this.state.signUpData.email}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="button" className="btn btn-primary btn-block" onClick={this.routeChange} onChange={this.handleSignUpData.bind(this)}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="src/components/login.component.js">sign in?</a>
                </p>
            </form>
            </Switch>
            </Router>
        );
    }
}

