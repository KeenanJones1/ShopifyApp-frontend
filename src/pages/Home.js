import React, { Component } from 'react'
import { DirectUpload } from 'activestorage'
import Images from '../components/images'

export default class Home extends Component {
 constructor(){
  super()
  this.state = {
   username: "",
   images: [],
   selectedFile: null,
   imageKeywords: [],
   imageName: ""
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

  handleImageForm = (file) => {
  console.log(file);
 }

 setName = (e) => {
  this.setState({
   imageName: e.target.value
  })
 }

 setSelectedFile = (e) => {
  this.setState({selectedFile: e.target.files[0]})
 }

 sendFile = (e) => {
   e.preventDefault()
  new DirectUpload(this.state.selectedFile,'http://localhost:3000/rails/active_storage/direct_uploads').create((error, blob) => {
   if(error){
     console.log("Error here", error)
    }
   else {
    let token = localStorage.getItem('token')
    let postObj = {
     method: 'POST',
     headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
     body: JSON.stringify({image: blob.signed_id, imageName: this.state.imageName})
    }
    fetch('http://localhost:3000/images', postObj)
    .then(resp => resp.json())
    .then(data => console.log(data))
   }
  })
 }


 render() {
  return (
  <div className="container">
   <div className="row">
    <div className="col my-3 username-display">
     <h4>{this.state.username}</h4>
    </div>
   </div>

   <div className="row">
    <div className="col">
     <form action="">
      <div className="form-group">
       <input type="file" onChange={(e) => this.setSelectedFile(e)}/>
      </div>
      <div className="form-group">
       <label htmlFor="" className="input-label mr-3">image name</label>
       <input type="text" name="imageName" id="" onChange={(event) => this.setName(event)}/>
      </div>
      <div className="form-group">
       <label htmlFor="" className="input-label mr-3">description</label>
       <textarea type="textarea" name="imageDescription" id="" onChange={(event) => this.setName(event)}/>
      </div>
      <div className="form-group">
       <label htmlFor="" className="input-label mr-3">keywords</label>
       <input type="text" name="imageKeywords" id="" onChange={(event) => this.setName(event)}/>
       <button className="btn btn-primary">add keywords</button>
      </div>
      <button className="btn-primary" onClick={(event) => this.sendFile(event)}>Upload</button>
     </form>
    </div>
   </div>
   <div className="container">
     <Images images={this.state.images}/>
   </div>
  </div>
  )
 }
}

// <form onSubmit={(file) => this.handleImageForm(file)}>
// <input type="text" value={this.state.imageName} onChange={(e) => this.setName(e.target.value)}/>
// <input type="file" value={this.state.selectedFile} onChange={(e) => this.setSelectedFile(e.target.files[0])}/>
// <input type="text" placeholder="Image Name" onChange={(e) => this.setName(e) }/>
// <button className="btn btn-primary" onClick={() => this.sendFile()}>Upload</button>
// </form>