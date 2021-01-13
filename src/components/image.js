import React from 'react'
import styled from 'styled-components'

const image = (props) => {
 return (
  <ImageWrapper className="col my-3 img-container">
   <Image src={`http://localhost:3000${props.image.imgUrl}`} alt="" width="300" height="200" onClick={() => props.addToCart(props.image.id)}/>
   <h5>{props.image.name}</h5>
  </ImageWrapper>
 )
}

const ImageWrapper = styled.div`
`

const Image = styled.img`
 :hover{
  border: solid 2px black;
 }
`

export default image
