import React, { Component } from 'react'
import Signup from '../components/signup'
import Login from '../components/login'
import signup from '../components/signup'

export default class SignupLogin extends Component {
 constructor(){
  super()
  this.state = {
   signup: true,
  }
 }

  handleFormSwitch = () => {
   this.setState(prevState => {
    return {signup: !prevState.signup}
   })
 }


 render() {
  return (
   <div>
    {this.state.signup ? <Signup routeProps={this.props}/> : <Login routeProps={this.props}/>}
    <button onClick={() => this.handleFormSwitch()}>{this.state.signup ? "Already Registered ?" : "Create an Account"}</button>
   </div>
  )
 }
}
