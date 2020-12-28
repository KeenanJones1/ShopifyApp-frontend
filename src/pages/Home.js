import React, { Component } from 'react'
import {DirectUpload} from 'activestorage'

export default class Home extends Component {
 constructor(){
  super()
  this.state = {
   username: "",
   images: [],
   selectedFile: null,
   // imageKeywords: [],
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
  // const image = 
  // const formData = new FormData();
  // formData.append('image', image, image.name)
  // const token = localStorage.getItem('token')
  // const reqObj = {
  //  method: 'POST',
  //  headers: {'Authorization': `Bearer ${token}`},
  //  body: formData
  //  }
  //  fetch('http://localhost:3000/images', reqObj)
  //  .then(resp => resp.json())
  //  .then(data => console.log(data))

  this.setState({selectedFile: e.target.files[0]})
 }

 sendFile = () => {


  const upload = new DirectUpload(this.state.selectedFile,'http://localhost:3000/rails/active_storage/direct_uploads')

  upload.create((error, blob) => {
   if(error){console.log(error)}
   else {
    let token = localStorage.getItem('token')
    let postObj = {
     method: 'POST',
     headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
     body: JSON.stringify({image: blob.signed_id})
    }
    fetch('http://localhost:3000/images', postObj)
    .then(resp => resp.json())
    .then(data => console.log(data))
   }
  })
 }


 render() {
  let image = this.state.images[0]
  let image2 = this.state.images[1]
  console.log(image ? image.imgUrl : "hello" );
  return (
   <div>
    <div className="container">
     <div className="row">
      <div className="col username-display">
       <h4>{this.state.username}</h4>
      </div>
     </div>

     <div className="row">
      <div className="col">
       <form action="">
        <input type="file" onChange={(e) => this.setSelectedFile(e)}/>
        <div className="btn-primary" onClick={() => this.sendFile()}>Upload</div>
       </form>
      </div>
     </div>
     <div className="row">
      <img src={image ? `http://localhost:3000/${image.imgUrl}` : 'hello'} alt=""/>
      <img src={image2 ? `http://localhost:3000/${image2.imgUrl}` : 'hello'} alt=""/>
     </div>
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