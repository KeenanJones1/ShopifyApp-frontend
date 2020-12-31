import React, { Component } from 'react'

export default class login extends Component {
 constructor(){
  super()
  this.state = {
   username: "",
   password: ""
  }
 }

 setUserInfo = (e) => {
  this.setState({
   [e.target.name]: e.target.value
  })
 }

 handleLoginForm = (e) => {
  e.preventDefault()
  const postObj = {
   method: 'POST',
   headers: {'Content-Type': 'application/json'},
   body: JSON.stringify({user: {username: this.state.username, password: this.state.password}})
  }
  fetch('http://localhost:3000/login', postObj)
  .then(resp => resp.json())
  .then(data => {if (data.errors){
   // case method for each error case
   alert(data.errors.join(' & '))
  }else{
   localStorage.setItem('token', data.token)
   this.props.routeProps.history.push('/home')
  }})
 }

 render() {

  return (
   <div>
    <form action="">
     <label htmlFor="">username</label>
     <input type="text" name="username" placeholder="enter username" onChange={(event) => this.setUserInfo(event)}/>
     <label htmlFor="">password</label>
     <input type="text" placeholder="password" name="password" onChange={(event) => this.setUserInfo(event)}/>
     <input type="submit" onClick={(event) => this.handleLoginForm(event)}/>
    </form>
   </div>
  )
 }
}