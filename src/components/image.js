import React from 'react'

const image = (props) => {
 return (
  <div className="col my-3 img-container">
   <img src={`http://localhost:3000${props.image.imgUrl}`} alt="" width="300" height="200"/>
   <h5>{props.image.name}</h5>
  </div>
 )
}

export default image
