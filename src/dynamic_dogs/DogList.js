import React, { Component } from 'react'

class DogList extends Component{
  render(){
    // const dogs = this.props.dogs.map( d => {
    //   <div key={d.name}>
    //     <h1>{d.name}</h1>
    //     <h3>{d.age}</h3>
    //     {d.facts.map(x=>{
    //       <p>{x}</p>
    //     })}
    //   </div>
    // })
    return(
      <div style={{display:'flex', justifyContent: 'space-between', flexWrap: 'wrap', textAlign: 'center', margin: 'auto', maxWidth: '50%'}}>
        {this.props.allDogs.map( x =>  
          <div>
            <h1>{x.name}</h1>
            <h3>{x.age}</h3>
            {x.facts.map( y => <p>{y}</p> )}
          </div>  
        )}
      </div>
    )
  }
}

export default DogList