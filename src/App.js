import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Signup from './pages/Signup'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      cart: []
    }
  }

  render(){
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
          </Switch>
      </Router>
    );
  }
}

export default App;
