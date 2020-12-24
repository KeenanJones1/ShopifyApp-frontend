import React, { Component } from 'react'


export default class Home extends Component {
 constructor(){
  super()
  this.state = {
   username: "",
   images: []
  }
 }
 componentDidMount(){
  let token = localStorage.getItem('token')
  let reqObj = {
   method: 'GET',
   headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
  }
  
 fetch("http://localhost:3000/myuser", reqObj)
 .then(resp => resp.json())
 .then(data => this.setState({
  username: data.username,
  images: data.images
 }))
 }

 render() {
  console.log(this.state);
  return (
   <div>
    <h3>{this.state.username}</h3>
    <h3>Upload Images</h3>
    <h3>Your Images</h3>
    <h3>Search Images</h3>
   </div>
  )
 }
}

