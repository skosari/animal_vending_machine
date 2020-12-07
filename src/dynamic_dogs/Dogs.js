import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Dog from './Dog'
import DogList from './DogList'
import NavBar from './NavBar'
class Dogs extends Component{

  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: "whiskey",
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: "hazel",
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: "tubby",
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  render(){
    const getDog = (x) => {
      let name = x.match.params.name
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      )
      return <Dog {...x} dog={currentDog} />
    }
    return(
      <div>
        
        <Switch>
          <Route 
            exact path='/doglist' 
            render={()=><DogList allDogs={this.props.dogs}/>}/>
          <Route 
            exact path='/dog/:name' 
            render={getDog}/>
        </Switch>
      </div>

    )
  }
}

export default Dogs