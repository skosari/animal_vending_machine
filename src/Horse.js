import React, { Component } from "react";
import { Link } from 'react-router-dom'
class Horse extends Component {
  
  render() {
    
    return (
      <div className='Horse'>
        <h1>Cat!!!</h1>
        <h3>This cat is named: {this.props.name}</h3>
        <img style={{width: 300}}src='https://images.unsplash.com/photo-1547581849-38ba650ad0de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' />
        <Link to='/'>Back</Link>
      </div>
    );
  }
}
export default Horse;
