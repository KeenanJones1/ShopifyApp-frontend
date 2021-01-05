import React, { Component } from 'react'

class imageSearch extends Component {
 constructor(){
  super()
  this.state={
  title: "",
  query: ""
  }
 }


  handleInputChange = (e) => {
   this.setState({
    query: e.target.value
   })
 }

 handleSubmit = (e) => {
  e.preventDefault()
  let reqObj = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({search: this.state.query})
  }

  fetch(`http://localhost:3000/search/${this.state.query}`)
  .then(resp => resp.json())
  .then(data => console.log(data))
 }

 render() {
  return (
   <div className="row">
    <div className="col">
     <form action="">
      <div className="form-group">
       <label htmlFor="">Search for an image by keywords</label>
       <input type="text" onChange={(event) => this.handleInputChange(event)}/>
      </div>
      <button type="submit" className="btn btn-primary" onClick={(event) => this.handleSubmit(event)}>Submit</button>
     </form>
    </div>
   </div>
  )
 }
}

export default imageSearch