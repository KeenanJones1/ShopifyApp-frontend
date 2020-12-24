import React from 'react'
import Image from './image'

const images = (props) => {
 const renderImages = () => {
  return props.images.map(img => 
    <Image image={img}/>
   )
 }

 return (
  <div>
   {renderImages()}
  </div>
 )
}

export default images
