import React, { Component } from 'react'

class ChildProps extends Component{
  render(){
    let myStyle = {
      backgroundColor: '#eee',
      opacity: '50%',
      color: 'orange'
    }
    return(
      <div style={myStyle}>
        {this.props.children}
      </div>
    )
  }
}

export default ChildProps