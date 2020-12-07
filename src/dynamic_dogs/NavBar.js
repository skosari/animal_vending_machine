import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class NavBar extends Component{
  constructor(props){
    super(props)
    this.state = {
      mobile: false
    }
    this.handleResize = this.handleResize.bind(this)
  }

  handleResize(){
    {window.innerWidth < 600 ?
      this.setState({mobile: true})
      :
      this.setState({mobile: false})
    }
  }

  render(){
    window.addEventListener('resize', this.handleResize)
    
    return(
      <div>
        {this.state.mobile ? <p>mobile</p> : <p>desktop</p>}
        <div 
          style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            maxWidth: '50%', 
            margin: 'auto',
            }}>
          <NavLink exact to='/doglist' activeClassName='active-link' >Home</NavLink>
          <NavLink exact to='/dog/whiskey' activeClassName='active-link' >Whiskey</NavLink>
          <NavLink exact to='/dog/hazel' activeClassName='active-link' >Hazel</NavLink>
          <NavLink exact to='/dog/tubby' activeClassName='active-link' >Tubby</NavLink>
        </div>
      </div>
    )
  }
}

export default NavBar