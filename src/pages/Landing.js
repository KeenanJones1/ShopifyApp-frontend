import React, { Component } from 'react'
import Signup from '../components/signup'
import ImageSearch from '../components/imageSearch'
import Images from '../components/images'

export default class Landing extends Component {
 constructor(){
  super()
  this.state = {
   images: []
  }
 }

 // componentDidMount(){
 //  fetch("http://localhost:3000/images")
 //  .then(resp => resp.json())
 //  .then(data => console.log(data))
 // }

 setImages = (images) => {
  this.setState({images: images})
 }

 render() {
  return (
   <div>
    <ImageSearch setImages={this.setImages}/>
    <Images images={this.state.images}/>

   </div>
  )
 }
}
