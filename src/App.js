import logo from './logo.svg';
import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom'
import Cat from './Cat'
import About from './About'
import Horse from './Horse'
import Dog from './Dog'

function App() {
  return (
    <div style={{display: 'block', textAlign: 'center', padding: 10}}>
      <nav style={{display:'flex',width:'75%',justifyContent:"space-between",margin:'auto'}}>
        <NavLink exact activeClassName='active-link' to='/'>
          Home
        </NavLink>
        <NavLink exact activeClassName='active-link' to='/horse'>Horse</NavLink> 
        <NavLink exact activeClassName='active-link' to='dog'>Dog</NavLink>
        <NavLink exact activeClassName='active-link' to='cat'>Cat</NavLink>
      </nav>
      <div > 
        <Switch>
          <Route 
            exact path="/horse" 
            render={()=><Horse name='Superman'/>}
          />
          <Route 
            exact path="/dog" 
            render={()=><Dog name='Mickey'/>}
          />  
          <Route 
            exact path="/cat" 
            render={()=><Cat name='Mr Biggellsworth'/>}
          />       
          <Route exact path="/" component={About}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
