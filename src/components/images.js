import React from 'react'
import Image from './image'

const images = (props) => {
 const renderImages = () => {
  return props.images.map(img => 
    <Image key={img.id} image={img}/>
   )
 }

 return (
  <div className="row">
   {renderImages()}
  </div>
 )
}

export default images
