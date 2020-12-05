import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Cat extends Component {
  componentDidMount() {
    console.log("DOG DID MOUNT!");
  }
  componentWillUnmount() {
    console.log("DOG WILL UNMOUNT!");
  }
  render() {
    console.log("CAT RENDER!");
    return (
      <div className='Cat'>
        <h1>Cat!!!</h1>
        <h3>This cat is named: {this.props.name}</h3>
        <img style={{width: 300}}src='https://images.unsplash.com/photo-1566340070191-403a3b871d27?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2303&q=80' />
        <Link to='/'>Back</Link>
      </div>
    );
  }
}
export default Cat;
