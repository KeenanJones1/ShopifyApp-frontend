import React, { Component } from 'react'

class imageSearch extends Component {
 constructor(){
  super()
  this.state={
  title: "",
  keyword: ""
  }
 }


  handleInputChange = (e) => {
   this.setState({
    keyword: e.target.value
   })
 }

 handleSubmit = (e) => {
  e.preventDefault()
 }

 render() {
  return (
   <div className="row">
    <div className="col">
     <form action="">
      <div className="form-group">
       <label htmlFor="">Search for an image by name or keyword</label>
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