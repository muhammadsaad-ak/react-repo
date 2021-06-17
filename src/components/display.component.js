import React, { Component } from "react";
import './signup.component.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom"

  export default class Display extends Component {
    render(){
        return  (
           <p> 
              {this.props.message}
               
            </p>
        )
    }
  }