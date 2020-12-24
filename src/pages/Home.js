import React, { Component } from 'react'

export default class Home extends Component {
 constructor(){
  super()
  this.state = {}
 }
 componentDidMount(){
  let token = localStorage.getItem('token')
  let reqObj = {
   method: 'GET',
   headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
  }
  
 fetch("http://localhost:3000/myuser", reqObj)
 .then(resp => resp.json())
 .then(data => console.log(data))
 }

 render() {
  return (
   <div>
    Home
   </div>
  )
 }
}

